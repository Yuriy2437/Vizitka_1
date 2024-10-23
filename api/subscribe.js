import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wholesale@allskyline.com',
    pass: 'vppc lanb fjrg jexj', // Используйте пароль приложения для Gmail
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, phone } = req.body;
    if (!email || !phone) {
      return res.status(400).json({ message: 'Email and phone are required' });
    }

    try {
      await transporter.sendMail({
        from: 'wholesale@allskyline.com',
        to: email,
        subject: 'Subscription Confirmation',
        text: `To start receiving messages from SKYLINE WHOLESALE LLC, send a message with the word "START" from your number ${phone}, which you entered when subscribing, to our company number +18779380764. If you want to unsubscribe from the mailing list, send an SMS with the word "STOP" to our company number +18779380764.`,
      });
      return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Server error:', error);
      return res
        .status(500)
        .json({ message: 'Subscription failed', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
