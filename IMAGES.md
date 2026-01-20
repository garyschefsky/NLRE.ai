# Image Guidelines

## Where to Place Images

All images should be placed in the `/public/images/` directory.

## Required Images

### Logo
- **File**: `logo.png` or `logo.jpg`
- **Location**: `/public/images/logo.png`
- **Usage**: Replace the placeholder in `components/Logo.tsx`
- **Specs**: Circular logo, 96x96px minimum, should match the 4-quadrant design (2 textured gray, 2 teal)

### Team Photos
- **Gary J. Schefsky**: `/public/images/team-gary.jpg`
- **John Paye**: `/public/images/team-john.jpg`
- **Kenneth Chin**: `/public/images/team-kenneth.jpg`
- **Specs**: Professional headshots, recommended 256x320px (portrait orientation)

### Project Images
- **1495 S. El Camino Real**: `/public/images/project-1495-el-camino.jpg`
- **116 New Montgomery Street**: `/public/images/project-116-new-montgomery.jpg`
- **Specs**: Architectural renderings/photos, recommended 384x256px (landscape orientation)

## How to Add Images

1. Place your image files in `/public/images/`
2. Update the component files to use the images:
   - For team photos: Update `app/our-team/page.tsx`
   - For project images: Update `app/our-team/page.tsx` (in the projects section)
   - For logo: Update `components/Logo.tsx`

## Example Usage

```tsx
// In a component
<img 
  src="/images/logo.png" 
  alt="New Luna Ventures Logo" 
  className="w-24 h-24 rounded-full object-cover" 
/>
```

Note: Images in `/public/` are served from the root, so use `/images/filename.jpg` not `/public/images/filename.jpg`
