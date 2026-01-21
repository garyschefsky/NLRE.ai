import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, cell, portfolioType, portfolioOther, propertyCount, isPrincipalOwner, capitalDeployments } = body

    // Email content - formatted for readability
    const emailContent = `
New Contact Form Submission from NLRE Website

PRINCIPAL REAL ESTATE OWNER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${firstName} ${lastName}
Email: ${email}
Cell: ${cell || 'Not provided'}
Portfolio Type: ${portfolioType || 'Not specified'}${portfolioOther ? ` (${portfolioOther})` : ''}
Properties in Urban Core SF: ${propertyCount || 'Not specified'}

CAPITAL MARKET PARTNER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principal Owner Status: ${isPrincipalOwner || 'Not provided'}
Capital Deployments: ${capitalDeployments || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
    `.trim()

    // Email configuration
    const GARY_EMAIL = process.env.CONTACT_EMAIL || 'gary@nlre.ai'
    const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@nlre.ai'

    // Option 1: Using Resend (Recommended - Free tier: 100 emails/day)
    // To set up:
    // 1. Sign up at https://resend.com
    // 2. Get your API key
    // 3. Add to .env.local: RESEND_API_KEY=re_xxxxx
    // 4. Uncomment the code below and install: npm install resend
    
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.emails.send({
        from: FROM_EMAIL,
        to: GARY_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission - ${firstName} ${lastName}`,
        text: emailContent,
      })
    } else {
      // Fallback: Log to console (for development)
      // In production, you should set up Resend or another email service
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('CONTACT FORM SUBMISSION (Email service not configured)')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log(emailContent)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('\nTo enable email sending:')
      console.log('1. Sign up at https://resend.com')
      console.log('2. Add RESEND_API_KEY to .env.local')
      console.log('3. Run: npm install resend')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry. We will contact you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'There was an error submitting your form. Please try again or email us directly at info@nlre.ai' },
      { status: 500 }
    )
  }
}
