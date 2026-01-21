# Email Setup Instructions for Contact Form

The contact form on the Connect page sends emails directly to Gary's email address.

## Quick Setup (Recommended: Resend)

1. **Sign up for Resend** (free tier: 100 emails/day)
   - Go to https://resend.com
   - Create an account
   - Get your API key from the dashboard

2. **Install Resend package**
   ```bash
   npm install resend
   ```

3. **Create `.env.local` file** in the root directory:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=gary@nlre.ai
   FROM_EMAIL=contact@nlre.ai
   ```

4. **Restart your development server**
   ```bash
   npm run dev
   ```

## Testing

1. Go to `/connect` page
2. Fill out the form
3. Submit
4. Check Gary's email inbox for the submission

## Current Status

- ✅ Contact form is functional
- ✅ Form validation in place
- ✅ API route created at `/api/contact`
- ⚠️ Email service needs to be configured (Resend recommended)

## Alternative Email Services

If you prefer a different email service, you can modify `app/api/contact/route.ts` to use:
- SendGrid
- Mailgun
- AWS SES
- Nodemailer with SMTP

## Contact Address

The contact address has been added to the footer:
- 580 California Street, 12th Floor
- San Francisco, CA 94104
- info@nlre.ai
