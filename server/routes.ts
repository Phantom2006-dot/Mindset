import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASSWORD || "",
    },
  });

  // Subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate request body
      const result = insertSubscriberSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        });
      }

      const { name, email } = result.data;

      // Check if email already exists
      const existing = await storage.getSubscriberByEmail(email);
      if (existing) {
        return res.status(400).json({
          message: "This email is already subscribed!",
        });
      }

      // Create subscriber
      const subscriber = await storage.createSubscriber({ name, email });

      // Send notification email to admin
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: "danielnworah2006@gmail.com",
          subject: "🎉 New Subscriber - Mindset Before Skillset",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #8B5CF6; margin-bottom: 20px;">New Subscriber Alert!</h1>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 10px 0;"><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <p style="color: #666;">Someone just joined the Mindset Before Skillset movement! 🚀</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Continue even if email fails - subscriber was still saved
      }

      return res.status(201).json({
        message: "Successfully subscribed!",
        subscriber: {
          id: subscriber.id,
          name: subscriber.name,
          email: subscriber.email,
        },
      });
    } catch (error) {
      console.error("Subscription error:", error);
      return res.status(500).json({
        message: "An error occurred while processing your subscription.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
