import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Check, Lightbulb, Users, TrendingUp } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import bookCoverUrl from "@assets/WhatsApp-Image-2025-10-31-at-11.28.56_1763185454539.jpeg";
import videoUrl from "@assets/Firefly \"A mesmerizing underwater scene featuring glowing 3D jellyfish gracefully swimming in deep w (1)_1763185426158.mp4";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      return await apiRequest("POST", "/api/subscribe", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the Movement!",
        description: "You're now subscribed. Check your email for exclusive updates.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertSubscriber) => {
    subscribeMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          {/* Purple Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-accent/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Book Cover */}
            <div 
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="relative animate-float">
                <img
                  src={bookCoverUrl}
                  alt="Mindset Before Skillset Book Cover"
                  className="w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-2xl"
                  style={{
                    boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(255, 107, 53, 0.4)",
                  }}
                  data-testid="img-book-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div 
              className={`text-white space-y-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                MINDSET BEFORE SKILLSET
              </h1>
              <p className="text-xl md:text-2xl font-medium text-accent" data-testid="text-hero-subtitle">
                By Oluwasegun Ajibola - Leadership | Growth | Clarity
              </p>
              
              <div className="space-y-4 pt-4">
                <p className="text-lg md:text-xl leading-relaxed" data-testid="text-hero-description-1">
                  Because who you become shapes what you can build.
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90" data-testid="text-hero-description-2">
                  Mindset Before Skillset is not just a book. It is a movement. 
                  It challenges how we think about success and reminds us that before we sharpen our 
                  skills, we must first strengthen our mindset.
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90" data-testid="text-hero-description-3">
                  This journey captures the power of identity, clarity, and lessons that shape real leadership and 
                  purpose-driven success.
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90" data-testid="text-hero-description-4">
                  It is for thinkers, doers, and builders who believe that true progress begins in the mind 
                  long before it shows in results.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full animate-glow-pulse hover:scale-105 transition-transform"
                  onClick={() => {
                    document.getElementById("subscribe-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-hero-subscribe"
                >
                  SUBSCRIBE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-what-to-expect">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground" data-testid="text-what-to-expect-title">
            What to Expect
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Join a community of forward-thinkers committed to personal and professional growth
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Insights and resources on leadership and growth",
                description: "Access exclusive content that transforms your approach to success",
                color: "text-accent",
              },
              {
                icon: TrendingUp,
                title: "The Mindset Before Skillset framework",
                description: "A proven methodology for building lasting success from the inside out",
                color: "text-primary",
              },
              {
                icon: Users,
                title: "Book updates, launch events, and exclusive community access",
                description: "Be the first to know and connect with like-minded achievers",
                color: "text-accent",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s forwards`,
                  opacity: 0,
                }}
                data-testid={`card-feature-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${item.color} p-3 rounded-lg bg-primary/10`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-3 text-card-foreground group-hover:text-primary transition-colors" data-testid={`text-feature-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section 
        id="subscribe-section"
        className="py-16 md:py-24 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10"
        data-testid="section-join-movement"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-join-title">
              Join the Movement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-join-description">
              Be among the first to get early access, exclusive insights, and behind the scenes content before the 
              official launch.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 border border-card-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="h-12 text-base border-2 focus:border-primary focus:ring-primary/20 focus:ring-2"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email Address"
                          className="h-12 text-base border-2 focus:border-primary focus:ring-primary/20 focus:ring-2"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={subscribeMutation.isPending}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold h-12 text-lg rounded-lg hover:scale-[1.02] transition-transform"
                  data-testid="button-subscribe"
                >
                  {subscribeMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Subscribe Now
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground py-12" data-testid="footer">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-footer-tagline">
              STAY TUNED, YOUR MINDSET JOURNEY STARTS SOON.
            </h3>
            <p className="text-lg opacity-90" data-testid="text-footer-author">
              Oluwasegun Ajibola (Mr Wood) Author, Mindset Before Skillset
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <h4 className="text-lg font-semibold" data-testid="text-follow-us">Follow Us</h4>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="Instagram"
              data-testid="link-instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="YouTube"
              data-testid="link-youtube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-sm opacity-75" data-testid="text-copyright">
            © 2025 Oluwasegun Ajibola | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
