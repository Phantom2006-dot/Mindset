# Mindset Before Skillset - Book Landing Page

## Project Overview
A stunning, modern single-page landing site for the book "Mindset Before Skillset" by Oluwasegun Ajibola (Mr Wood). Features a beautiful underwater jellyfish video background with purple tint, animated sections, and an email subscription system.

## Features Implemented
- **Hero Section**: Full-screen video background with purple gradient overlay, floating book cover animation, compelling book description
- **What to Expect Section**: Three animated feature cards highlighting book benefits (Leadership & Growth, Framework, Community Access)
- **Join the Movement Section**: Email subscription form with validation
- **Footer**: Social media links (Facebook, Twitter, Instagram, YouTube) and copyright information
- **Email Notifications**: Admin receives email at danielnworah2006@gmail.com when someone subscribes
- **Responsive Design**: Fully responsive across all device sizes
- **Animations**: Floating book cover, fade-in effects, glow effects on buttons, smooth transitions
- **SEO Optimized**: Meta tags, Open Graph tags, descriptive title

## Technology Stack
- **Frontend**: React, Vite, TailwindCSS, Shadcn UI, React Hook Form, TanStack Query
- **Backend**: Express.js, Nodemailer
- **Storage**: In-memory storage (MemStorage)
- **Fonts**: Poppins (primary), Inter (body text)
- **Icons**: Lucide React, React Icons

## Color Scheme
- **Primary**: Purple (#8B5CF6) - Used for overlays, primary actions
- **Accent**: Orange (#FF6B35) - Used for CTAs, highlights
- **Background**: Gradient from primary/10 to default background
- **Text**: High contrast white on video background, standard foreground on other sections

## Key Pages & Routes
- `/` - Homepage (only page)
- `POST /api/subscribe` - Subscription API endpoint

## Data Schema
```typescript
Subscriber {
  id: string (UUID)
  name: string (min 2 chars)
  email: string (unique, validated)
  subscribedAt: timestamp
}
```

## Environment Variables Required
- `EMAIL_USER` - Gmail address for sending notifications
- `EMAIL_PASSWORD` - Gmail App Password (not regular password)
- `SESSION_SECRET` - Session secret (auto-generated)

## Email Notifications
When a user subscribes:
1. Subscriber data is saved to in-memory storage
2. Form validation checks for duplicate emails
3. Email notification sent to danielnworah2006@gmail.com with subscriber details
4. Success toast shown to user
5. Form automatically resets

## Design Guidelines Followed
- Purple and orange color scheme with glow effects
- Poppins font family for modern, clean typography
- Smooth animations on scroll and hover
- Video background with purple overlay for text readability
- Consistent spacing and component usage
- Accessible form validation with clear error messages
- Mobile-first responsive design

## File Structure
```
client/src/
  ├── pages/
  │   ├── home.tsx (main landing page)
  │   └── not-found.tsx
  ├── components/ui/ (Shadcn components)
  ├── App.tsx
  └── index.css (design tokens)

server/
  ├── routes.ts (subscription API)
  ├── storage.ts (in-memory data storage)
  └── index.ts

shared/
  └── schema.ts (TypeScript schemas and Zod validation)

attached_assets/
  ├── book-cover.jpeg (book cover image)
  ├── jellyfish-video.mp4 (underwater background video)
  └── Screenshot_20251115-054025_1763185488773.png (reference)
```

## User Journey
1. User lands on homepage → sees stunning video background with hero content
2. Reads about the book and what to expect
3. Clicks "SUBSCRIBE NOW" → smooth scrolls to subscription form
4. Enters name and email
5. Submits form → sees loading state
6. Receives success message → form clears automatically
7. Admin (danielnworah2006@gmail.com) receives email notification with subscriber details

## Development Notes
- Video auto-plays, loops, and is muted for best UX
- Form uses React Hook Form with Zod validation
- TanStack Query manages API mutations
- Toast notifications for user feedback
- Duplicate email detection prevents re-subscriptions
- Email sending failures are gracefully handled (subscription still saves)

## Testing
End-to-end testing confirmed:
- Video background displays correctly
- Book cover and hero content visible
- Subscription form validation works
- Duplicate email detection functional
- Success/error toasts display appropriately
- Form clears on successful submission
- Responsive design works across breakpoints

## Recent Changes (November 15, 2025)
- Created complete landing page with video background
- Implemented subscriber schema and API
- Added email notification system with Nodemailer
- Configured purple/orange design system with glow effects
- Added custom animations (float, glow-pulse, fade-in-up)
- Optimized for SEO with meta tags
- Set up responsive layouts for all screen sizes

## Known Considerations
- Email notifications require valid Gmail App Password in environment variables
- In-memory storage means subscriber data resets on server restart
- For production, consider migrating to PostgreSQL database
- Video file should be optimized for web to reduce load times
