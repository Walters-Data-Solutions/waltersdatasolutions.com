import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

async function verifyCaptcha(captchaValue: string) {
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`;
  const response = await fetch(verifyUrl, { method: "POST" });
  const data = await response.json();
  return data.success;
}

export async function POST(req: Request) {
  const { name, email, message, captcha } = await req.json()

  if (!captcha) {
    return NextResponse.json({ message: 'reCAPTCHA token is missing' }, { status: 400 })
  }

  const isCaptchaValid = await verifyCaptcha(captcha)
  if (!isCaptchaValid) {
    return NextResponse.json({ message: 'reCAPTCHA validation failed' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'ty@waltersdatasolutions.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}

