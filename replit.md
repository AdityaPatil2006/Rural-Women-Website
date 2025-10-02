# Rural Women Entrepreneurs Empowerment Platform

## Overview

A multilingual static website designed to empower rural women entrepreneurs in Maharashtra by providing digital literacy education, entrepreneurship skills training, and information about government schemes. The platform supports three languages (Marathi, Hindi, and English) to ensure accessibility for diverse rural audiences. Built as a lightweight, mobile-first, static website optimized for low-bandwidth environments and offline accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Static site architecture for GitHub Pages/Netlify deployment
- Mobile-first responsive design approach

**Design Principles:**
- **Accessibility First**: Large touch targets, high contrast colors, simple navigation
- **Low Bandwidth Optimization**: Minimal external dependencies, emoji icons instead of image files, inline CSS/JS
- **Offline-Ready**: Downloadable PDF resources for offline consumption
- **Progressive Enhancement**: Core functionality works without JavaScript; JS enhances UX

**Language Switching Implementation:**
- Client-side translation using data attributes (`data-mr`, `data-hi`, `data-en`)
- Language state managed in JavaScript without requiring page reload
- All content stored inline within HTML for offline capability

**Color System:**
- CSS custom properties (variables) for consistent theming
- Warm color palette (orange/brown tones) suitable for rural context
- High contrast for readability in various lighting conditions

### Content Structure

**Page Organization:**
1. **Home Page** (`index.html`) - Landing page with section overview
2. **Digital Literacy** (`digital-literacy.html`) - Step-by-step tutorials for smartphone usage, UPI payments, online safety
3. **Entrepreneurship Skills** (`entrepreneurship.html`) - Business fundamentals, marketing, financial literacy
4. **Government Schemes** (`schemes.html`) - Information about Startup India, Mudra Yojana, Digital India
5. **Resources** (`resources.html`) - Success stories, helpful contacts
6. **Contact** (`contact.html`) - Contact form for user inquiries

**Navigation Pattern:**
- Consistent header navigation across all pages
- Active state indicators for current page
- Language toggle prominently displayed in header

### Form Handling

**Contact Form Architecture:**
- Client-side validation using HTML5 required attributes
- JavaScript event handling for form submission
- Form message display system for user feedback
- No backend required (static implementation with placeholder for future integration)

**Considerations:**
- Currently configured for client-side only
- Future enhancement would require backend API or form service integration (e.g., Formspree, Netlify Forms)

### Asset Management

**Download Resources:**
- `/downloads` folder contains placeholder for PDF guides
- Designed for offline resource distribution
- Planned content includes tutorials in all three languages

**Icon Strategy:**
- Emoji-based icons to eliminate image file dependencies
- Reduces bandwidth requirements
- Ensures universal rendering across devices

### Responsive Design

**Breakpoint Strategy:**
- Mobile-first base styles
- Progressive enhancement for larger screens
- Flexible grid system using CSS Flexbox
- Container max-width of 1200px for large screens

**Touch Optimization:**
- Large clickable areas for navigation and buttons
- Adequate spacing between interactive elements
- Simplified forms with clear labels

## External Dependencies

### Third-Party Services

**None currently integrated** - The application is designed as a fully self-contained static website.

**Potential Future Integrations:**
- **Form Backend Service**: Formspree, Netlify Forms, or custom API for contact form submissions
- **Analytics**: Google Analytics or privacy-focused alternatives for usage tracking
- **CDN**: For faster global content delivery (currently relies on hosting platform's CDN)

### Hosting & Deployment

**Target Platforms:**
- GitHub Pages (primary)
- Netlify (alternative)
- Any static file hosting service

**Requirements:**
- No build process needed
- Direct deployment of HTML/CSS/JS files
- No server-side processing required

### Browser Compatibility

**Target Support:**
- Modern mobile browsers (Chrome, Safari, Firefox on Android/iOS)
- Feature detection approach for JavaScript enhancements
- Graceful degradation for older browsers
- No polyfills required for core functionality

### Font System

**Strategy:**
- System font stack for zero external requests
- Fallback chain: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif`
- Ensures readable Marathi/Hindi/English text across platforms

### Data Storage

**Current Implementation:**
- No database or persistent storage
- All content embedded in HTML
- Language preferences not persisted (resets on page reload)

**Future Considerations:**
- localStorage for language preference persistence
- IndexedDB for offline PDF caching
- No backend database required for static content model