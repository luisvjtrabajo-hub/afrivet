---
name: Canine Compassion
colors:
  surface: '#f1fbff'
  surface-dim: '#d1dce0'
  surface-bright: '#f1fbff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eaf5fa'
  surface-container: '#e4f0f4'
  surface-container-high: '#dfeaef'
  surface-container-highest: '#d9e4e9'
  on-surface: '#131d21'
  on-surface-variant: '#5e3f3b'
  inverse-surface: '#283236'
  inverse-on-surface: '#e7f3f7'
  outline: '#936e69'
  outline-variant: '#e8bcb6'
  surface-tint: '#c0000b'
  primary: '#bc000a'
  on-primary: '#ffffff'
  primary-container: '#e61919'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4aa'
  secondary: '#586062'
  on-secondary: '#ffffff'
  secondary-container: '#dae1e3'
  on-secondary-container: '#5d6466'
  tertiary: '#5f5a5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#787373'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930006'
  secondary-fixed: '#dde4e6'
  secondary-fixed-dim: '#c1c8ca'
  on-secondary-fixed: '#161d1f'
  on-secondary-fixed-variant: '#41484a'
  tertiary-fixed: '#e8e1e1'
  tertiary-fixed-dim: '#ccc5c5'
  on-tertiary-fixed: '#1e1b1b'
  on-tertiary-fixed-variant: '#4a4646'
  background: '#f1fbff'
  on-background: '#131d21'
  surface-variant: '#d9e4e9'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built to balance clinical precision with the warmth of a "second home" for pets and their owners. Targeting pet parents who seek both professional expertise and an empathetic touch, the UI evokes a sense of reliability and comfort.

The style is **Modern Corporate with Tactile Warmth**. It leverages generous whitespace and a clean, systematic layout common in high-end healthcare, but softens the digital edges with rounded geometries and smooth, organic transitions. The visual language avoids the coldness of traditional medical software, opting instead for a friendly, approachable interface that prioritizes clarity and ease of use.

**Motion Philosophy:**
Animations should be "viscous" and purposeful. Use ease-in-out transitions that mimic natural movement—nothing should snap instantly. Page transitions should feel like a gentle slide or a soft fade-in to maintain a calm environment for users who may be in high-stress situations regarding their pet's health.

## Colors

The palette is anchored by a vibrant, high-energy **Primary Red (#E61919)** derived from the brand's logo. This color is used strategically for primary actions, emergency alerts, and key branding moments to convey passion and vital care.

To balance the intensity of the red, the system utilizes a **Secondary Charcoal (#2D3436)** for professional grounding and high-contrast text. A **Tertiary Soft Rose (#F9F1F1)** serves as a background tint for cards and sections, softening the overall aesthetic and reinforcing the "warm home" vibe. Neutrals are kept cool and clean to maintain a hygienic, clinical feel without appearing stark.

## Typography

The design system uses **Manrope** across all levels. This modern sans-serif is chosen for its geometric balance and highly legible numerals—critical for medical dosages and appointment times.

- **Headlines:** Use tighter letter spacing and heavier weights to project confidence and authority.
- **Body Text:** Standard weights with generous line-height ensure readability for long-form care instructions or medical history.
- **Labels:** Semi-bold or Bold weights are used for UI metadata and navigation to ensure they stand out against the soft background layers.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure on desktop and a 4-column structure on mobile. The spacing rhythm is based on an 8px baseline, ensuring all elements align to a consistent mathematical scale.

**Reflow Rules:**
- **Desktop:** Large margins (64px) create a "gallery" feel for content, emphasizing the premium nature of the veterinary care. 
- **Tablet:** Margins shrink to 32px, and 12-column layouts collapse to 8 columns.
- **Mobile:** Margins are minimized to 16px to maximize utility. Elements typically stack vertically, but horizontal carousels are used for "Pet Profiles" or "Upcoming Appointments" to save vertical space.

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of organized hierarchy. Instead of traditional gray shadows, we use very low-opacity shadows tinted with the secondary charcoal color to keep the UI looking clean and integrated.

- **Level 0 (Base):** Pure white or the Soft Rose background tint.
- **Level 1 (Cards):** Slight elevation with a 4px blur shadow. Used for content containers.
- **Level 2 (Interactive):** When hovered, cards or buttons lift further (8px blur) to provide tactile feedback.
- **Level 3 (Modals/Overlays):** Significant depth with a 24px diffused shadow to focus the user's attention on critical tasks.

## Shapes

The shape language is **Rounded**, reflecting the soft and friendly nature of the animal companions the brand serves.

- **Standard Elements:** Buttons, input fields, and small tags use a 0.5rem (8px) radius.
- **Large Containers:** Cards and section blocks use a 1rem (16px) radius to feel more like "furniture" within the interface.
- **Avatars:** Always circular to represent pets and staff in a friendly, personified manner.

## Components

### Buttons
- **Primary:** Solid Red with white text. High-contrast, rounded-md. On hover, the color deepens slightly.
- **Secondary:** Outlined Red with transparent background. Used for less urgent actions like "View History."
- **Ghost:** Charcoal text with no background. Used for navigation or utility actions.

### Input Fields
- High-contrast charcoal borders (low opacity) that turn Red on focus. 
- Labels are always positioned above the field for maximum accessibility.
- Error states utilize a lighter shade of red with a supporting icon.

### Cards
- White surfaces on Soft Rose backgrounds.
- Always include a soft ambient shadow and 16px padding.
- For pet profiles, cards should feature a prominent circular avatar and a "Status" chip (e.g., "Healthy", "Appointment Due").

### Chips & Tags
- Used for pet categories (Canine, Feline) or appointment types.
- Soft rounded edges (Pill-shaped) with low-saturation background tints to prevent visual noise.

### Pet Profiles & Timeline
- A specialized component showing a vertical or horizontal chronological view of a pet's medical history. 
- Uses thin vertical lines and soft circles to denote "events" like vaccinations or check-ups.