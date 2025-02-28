import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send email using SendGrid
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Email text content
 * @param {string} [options.html] - Email HTML content (optional)
 */
const sendEmail = async (options) => {
  const msg = {
    to: options.to,
    from: process.env.FROM_EMAIL,
    subject: options.subject,
    text: options.text,
    html: options.html
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${options.to}`);
  } catch (error) {
    console.error('SendGrid error:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    throw new Error('Email could not be sent');
  }
};

export default sendEmail;