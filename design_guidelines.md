# Design Guidelines for "Mindset Before Skillset" Book Landing Page

## Design Approach
**Reference-Based**: Drawing inspiration from modern book launch pages and premium product landing pages (like Stripe, Apple product pages) with emphasis on visual storytelling and conversion-focused design.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Poppins (Google Fonts) for clean, modern readability
- **Headings**: Bold weights (700-800), large sizes for impact (text-4xl to text-6xl)
- **Body Text**: Regular weight (400-500), comfortable reading size (text-base to text-lg)
- **CTA Text**: Semibold (600), clear hierarchy

### Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, and 16 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8, gap-12
- Content max-width: max-w-7xl for full sections, max-w-4xl for text-focused areas

### Color Palette & Visual Treatment
- **Primary Accent**: Vibrant orange (#FF6B35 or similar) for CTAs and highlights
- **Secondary Accent**: Purple (#8B5CF6 or similar) for video overlay and gradients
- **Glow Effects**: Apply to buttons, cards, and key elements using box-shadow with purple/orange hues
- **Video Overlay**: 40-50% opacity purple gradient overlay on background video
- **Brightness**: High contrast, vivid colors throughout

## Section Structure

### 1. Hero Section (Video Background)
- Full-viewport height (min-h-screen)
- Underwater jellyfish video as background with purple tint overlay
- Two-column layout (lg:grid-cols-2):
  - **Left**: Book cover image with subtle glow effect, floating animation
  - **Right**: Book title, author name, compelling description, subscribe CTA button
- CTA button with glow effect and scale-on-hover animation

### 2. What to Expect Section
- Three-column grid (lg:grid-cols-3, md:grid-cols-2, base: grid-cols-1)
- Feature cards with icons, headings, and descriptions
- Fade-in animations on scroll
- Subtle background gradient
- Each card with hover lift effect (transform scale)

### 3. Join the Movement / Email Subscription
- Centered layout with compelling headline
- Email form with name and email fields
- Glowing subscribe button with orange/purple gradient
- Success message display after submission
- Form fields with focus glow effects

### 4. Footer
- Social media icons with glow on hover
- Copyright information
- Subtle purple gradient background

## Component Library

### Buttons
- Primary: Orange gradient with glow effect, white text
- Hover: Increased glow intensity, subtle scale (1.05)
- Focus: Enhanced glow ring

### Form Inputs
- Rounded borders with glow on focus
- Placeholder text in soft gray
- White/light background with subtle shadow

### Cards
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle shadow base state
- Enhanced shadow + scale on hover
- Optional gradient borders with glow

## Animations
- **Hero Elements**: Gentle floating/pulsing animation on book cover
- **Scroll Triggers**: Fade-in-up animations for sections (using intersection observer)
- **Hover States**: Scale transforms (1.03-1.05), glow intensity changes
- **Button CTAs**: Pulse animation on primary CTA
- **Form Submission**: Success message slide-in

## Images
- **Hero Book Cover**: High-quality product shot of "Mindset Before Skillset" book, positioned with glow effect halo
- **Video Background**: Underwater jellyfish scene with purple color overlay, ensures text readability

## Accessibility
- High contrast ratios maintained despite glow effects
- Focus indicators on all interactive elements
- Form labels and ARIA attributes
- Keyboard navigation support

## Technical Considerations
- Next.js static export for GoDaddy deployment
- Video optimized for web (compressed, auto-play, muted, looped)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Performance: Lazy load below-fold content, optimize video file size

## Overall Aesthetic
**Modern, dynamic, and energetic** - vibrant colors with strategic glow effects creating premium feel without overwhelming users. Balance between visual excitement (video, animations, glows) and conversion focus (clear CTAs, simple form).