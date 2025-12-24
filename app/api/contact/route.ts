import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email sending implementation
    // Currently logging to console. To enable email sending:
    // 1. Install Resend: npm install resend
    // 2. Add RESEND_API_KEY to .env.local
    // 3. Uncomment the Resend code below

    // Uncomment this section after setting up Resend:
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.emails.send({
        from: 'Project Chittoor <onboarding@resend.dev>', // Update with your verified domain
        to: process.env.CONTACT_EMAIL || 'pratham.projectchittoor@atriauniversity.edu.in',
        replyTo: email,
        subject: `New Partnership Inquiry from ${name}`,
        html: `
          <h2>New Partnership Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from Project Chittoor contact form</small></p>
        `,
      })
    } else {
      // Fallback: Log to console if email service is not configured
      console.log('Contact form submission:', {
        name,
        email,
        organization,
        message,
        timestamp: new Date().toISOString(),
      })
    }
    */

    // For now, log the submission (this will be replaced when email is configured)
    console.log('📧 Contact form submission (email not configured yet):', {
      name,
      email,
      organization,
      message,
      timestamp: new Date().toISOString(),
      note: 'Configure Resend API to enable email sending. See EMAIL_SETUP.md',
    })

    // Return success response
    return NextResponse.json(
      {
        message: 'Thank you for your interest! We will get back to you soon.',
        success: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

