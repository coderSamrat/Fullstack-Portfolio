import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
      },
});

transporter.verify(function (error, success) {
      if (error) {
            console.log('Error connecting to mail server:', error);
      } else {
            console.log('Server is ready to take our messages', success);
      }
});

export { transporter };