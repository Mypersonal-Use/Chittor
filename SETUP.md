# Project Chittoor Website - Setup Guide

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
App_Chittoor/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── ExecutiveVision.tsx  # Vision section
│   ├── RuralCrisis.tsx      # Crisis section
│   ├── Blueprint.tsx        # Blueprint section
│   ├── Pillars.tsx          # Detailed pillars
│   ├── ImpactMetrics.tsx    # Impact metrics
│   ├── LivingLab.tsx        # Living lab
│   ├── Partnerships.tsx     # Partnerships
│   ├── Roadmap.tsx          # Roadmap
│   ├── AboutAtria.tsx       # About section
│   ├── Contact.tsx          # Contact form
│   └── ParticleEffect.tsx   # Particle effects
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind config
├── tsconfig.json            # TypeScript config
└── next.config.js           # Next.js config
```

## Features Implemented

✅ Hero section with animated background
✅ Executive Vision section
✅ Rural Crisis interactive icons
✅ Four-pillar Blueprint
✅ Detailed Pillar pages
✅ Impact Metrics with animated counters
✅ Living Lab section
✅ Partnerships matrix
✅ Roadmap & Timeline
✅ About Atria Group
✅ Contact form
✅ Responsive design
✅ Animations and transitions
✅ SEO optimization
✅ Accessibility features

## Customization

### Colors
Edit `tailwind.config.js` to change color scheme:
- Primary Green: `#00CC88`
- Primary Blue: `#0066FF`

### Content
Edit individual component files in `components/` directory to update content.

### Styling
Modify `app/globals.css` for global styles and `tailwind.config.js` for theme customization.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Troubleshooting

### Module Not Found Errors
Run `npm install` to ensure all dependencies are installed.

### TypeScript Errors
Ensure TypeScript is properly configured and all types are correctly imported.

### Build Errors
Clear `.next` directory and rebuild:
```bash
rm -rf .next
npm run build
```

## Support

For issues or questions, contact: projectchittoor@atria.edu
