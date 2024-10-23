// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// // app.use(express.static('public')); // Предполагается, что HTML, CSS и JS файлы находятся в папке 'public'
// app.use(express.static(path.join(__dirname))); // Обслуживание статических файлов из корневой папки

// // Настройка Nodemailer
// // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'wholesale@allskyline.com',
//     pass: 'vppc lanb fjrg jexj', // Используйте пароль приложения для Gmail
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// app.post('/subscribe', async (req, res) => {
//   console.log('Received data:', req.body);
//   try {
//     const { email, phone } = req.body;
//     if (!email || !phone) {
//       throw new Error('Email and phone are required');
//     }

//     console.log('Attempting to send email');
//     await transporter.sendMail({
//       from: 'wholesale@allskyline.com',
//       to: email,
//       subject: 'Subscription Confirmation',
//       text: `Thanks for subscribing to SKYLINE WHOLESALE LLC. To start receiving messages from SKYLINE WHOLESALE LLC, send a message with the word "START" from your number ${phone}, which you entered when subscribing, to our company number +18779380764. If you want to unsubscribe from the mailing list, send an SMS with the word "STOP" to our company number +18779380764.`,
//     });
//     console.log('Email sent successfully');

//     res.status(200).json({ message: 'Subscription successful' });
//   } catch (error) {
//     console.error('Server error:', error);
//     res
//       .status(500)
//       .json({ message: 'Subscription failed', error: error.message });
//   }
// });

// // Обработка запросов к корневому пути
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
