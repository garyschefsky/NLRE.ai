# nlre.ai Website

A modern, clean website for New Luna Ventures (d.b.a nlre.ai) - a real estate development company focused on revitalizing San Francisco's urban core.

## Tech Stack

- **Next.js 14.2.0** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Portable Deployment** - Works on any Node.js host (Vercel, Netlify, AWS, GCP, Railway, Render, etc.)

## Getting Started

### Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

**Optional:** If you want email notifications from the contact form:
1. Sign up at [Resend](https://resend.com)
2. Add `RESEND_API_KEY=re_xxxxx` to `.env.local`
3. Uncomment the email sending code in `app/api/contact/route.ts`

## Building for Production

```bash
npm run build
npm start
```

The build creates a standalone server in `.next/standalone/` that can run on any Node.js host.

## Deployment

This site is **host-agnostic** and can be deployed to:

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
- Connect your Git repository
- Build command: `npm run build`
- Publish directory: `.next`

### Railway / Render / Fly.io
- Connect your Git repository
- Build command: `npm run build`
- Start command: `npm start`
- Node.js version: 18+ or 20+

### AWS / GCP / Azure
- Use the standalone build output
- Deploy `.next/standalone/` to your Node.js server
- Or use Docker (see below)

### Docker Deployment

```bash
# Build
docker build -t nlre-ai .

# Run
docker run -p 3000:3000 nlre-ai
```

### Traditional VPS / Server

1. Clone repository
2. Run `npm ci && npm run build`
3. Start with `npm start` or use PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "nlre-ai" -- start
   ```

## Project Structure

- `app/` - Next.js app directory with pages and API routes
- `components/` - Reusable React components
- `public/` - Static assets (images, videos)
- `next.config.js` - Next.js configuration (standalone output enabled)

## Pages

- `/` - Landing page with hero video
- `/what-we-do` - Services and offerings
- `/our-team` - Team information
- `/clients-we-serve` - Client information
- `/projects` - Projects and offering memoranda (hidden from nav)
- `/connect` - Contact form (Google Forms embed)

## Adding Images

Place images in the `public/images/` directory and reference them using `/images/image-name.jpg` in your components.

## Portability Features

✅ **No vendor lock-in** - Works on any Node.js host  
✅ **Standalone build** - Self-contained deployment package  
✅ **Environment variable fallbacks** - Graceful defaults  
✅ **Standard Next.js patterns** - No platform-specific code  
✅ **Docker support** - Container-ready deployment

## Support

For questions or issues, contact: info@nlre.ai
