// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

/*// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // تنظیمات ایمیل
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hasibullahwahabzadah@gmail.com', // ایمیل شما
        pass: 'hasibhwe78200040' // رمز عبور ایمیل شما
      }
    });

    const mailOptions = {
      from: 'hasibullahwahabzadah@gmail.com', // آدرس ایمیل شما
      to: 'hasibullahwahabzadah@gmail.com', // آدرس ایمیل مقصد
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    try {
      // ارسال ایمیل
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

 */