# Image Setup Guide for Executive Vision Section

## Current Design

The Executive Vision section now features three beautiful gradient cards with:
- **Soil & Culture** - Green gradient with sprout icon
- **Family & Community** - Blue/purple gradient with community icon
- **Growth & Prosperity** - Orange/yellow gradient with growth icon

## Adding Real Images

### Option 1: Using Local Images (Recommended)

1. **Add images to `public/images/` directory:**
   ```
   public/
     images/
       soil-culture.jpg
       family-community.jpg
       growth-prosperity.jpg
   ```

2. **Uncomment the Image components in `components/ExecutiveVision.tsx`:**
   - Find the commented Image sections (lines 117-126, 171-180, 225-234)
   - Uncomment them
   - The images will automatically overlay on the gradients

### Option 2: Using Remote Images

1. **Update `next.config.js`** (already configured):
   ```js
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: '**',
       },
     ],
   },
   ```

2. **Update the image sources in `ExecutiveVision.tsx`:**
   ```tsx
   <Image
     src="https://your-image-url.com/soil-culture.jpg"
     alt="Soil & Culture"
     fill
     className="object-cover"
   />
   ```

### Option 3: Using Unsplash (Free Stock Images)

You can use Unsplash images directly:

```tsx
<Image
  src="https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop"
  alt="Soil & Culture"
  fill
  className="object-cover"
/>
```

## Image Recommendations

### Soil & Culture
- Green fields, farming, agriculture
- Rural landscapes, soil, crops
- Traditional farming practices
- **Suggested search:** "sustainable farming", "rural agriculture", "green fields"

### Family & Community
- Families working together
- Community gatherings, village life
- People helping each other
- **Suggested search:** "rural community", "family farming", "village life"

### Growth & Prosperity
- Prosperous farms, harvest
- Success, growth, development
- Modern agriculture, technology
- **Suggested search:** "agricultural growth", "rural prosperity", "farm success"

## Image Specifications

- **Recommended size:** 1200x800px (3:2 ratio)
- **Format:** JPG or WebP
- **File size:** Under 500KB (optimize for web)
- **Aspect ratio:** 3:2 or 16:9 works best

## Current Features

✅ Beautiful gradient backgrounds
✅ Glassmorphism effects
✅ Animated icons
✅ Hover effects
✅ Responsive design
✅ Ready for image integration

## Quick Start

1. Add your images to `public/images/`
2. Uncomment the Image components in `ExecutiveVision.tsx`
3. Update the image paths if needed
4. Images will blend with gradients for a professional look

The current design looks great with just gradients, but adding real images will make it even more impactful!

