# Email Setup Guide for Contact Form

## Current Status

The contact form is now set up with an API route at `/api/contact/route.ts`. Currently, form submissions are logged to the console. To actually send emails, you need to configure an email service.

## Email Destination

Messages will be sent to: **pratham.projectchittoor@atriauniversity.edu.in**

## Setup Options

### Option 1: Resend (Recommended - Easiest)

Resend is a modern email API service with a generous free tier.

1. **Sign up for Resend**: https://resend.com
2. **Get your API key** from the Resend dashboard
3. **Install Resend**:
   ```bash
   npm install resend
   ```
4. **Add API key to environment variables**:
   Create a `.env.local` file in your project root:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=pratham.projectchittoor@atriauniversity.edu.in
   ```
5. **Update the API route** (`app/api/contact/route.ts`):
   Uncomment and configure the Resend code in the file.

### Option 2: SendGrid

1. **Sign up for SendGrid**: https://sendgrid.com
2. **Get your API key** from SendGrid dashboard
3. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
4. **Add to `.env.local`**:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   CONTACT_EMAIL=pratham.projectchittoor@atriauniversity.edu.in
   ```
5. **Update the API route** to use SendGrid

### Option 3: Nodemailer (SMTP)

Use your own SMTP server (Gmail, Outlook, etc.)

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```
2. **Add to `.env.local`**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=pratham.projectchittoor@atriauniversity.edu.in
   ```
3. **Update the API route** to use Nodemailer

### Option 4: Formspree (No Backend Code)

1. **Sign up for Formspree**: https://formspree.io
2. **Get your form endpoint** from Formspree
3. **Update Contact component** to send directly to Formspree endpoint

## Implementation Example (Resend)

Here's how to implement with Resend:

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, message } = body

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email
    await resend.emails.send({
      from: 'Project Chittoor <contact@yourdomain.com>',
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
      `,
    })

    return NextResponse.json(
      { message: 'Thank you for your interest! We will get back to you soon.', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
```

## Testing

1. **Test the form** by submitting a message
2. **Check the console** for logged submissions (until email is configured)
3. **Verify email delivery** once email service is set up

## Security Notes

- ✅ Never commit `.env.local` to version control
- ✅ Add `.env.local` to `.gitignore`
- ✅ Validate and sanitize form inputs
- ✅ Rate limit the API endpoint to prevent spam
- ✅ Use environment variables for sensitive data

## Current Behavior

Until email is configured, form submissions are:
- ✅ Logged to the server console
- ✅ Validated for required fields
- ✅ Stored in form state (temporary)
- ❌ NOT sent via email (needs configuration)

## Next Steps

1. Choose an email service (Resend recommended)
2. Set up API keys
3. Install required packages
4. Update the API route with email sending code
5. Test the form submission
6. Verify email delivery

## Support

For questions about email setup, refer to:
- Resend docs: https://resend.com/docs
- SendGrid docs: https://docs.sendgrid.com
- Nodemailer docs: https://nodemailer.com/about/

