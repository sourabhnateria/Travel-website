const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Enquiry endpoint
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone, location, notes, tourName, tourPrice, tourDuration } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Tour Enquiry: ${tourName}`,
    html: `
      <h2>New Tour Enquiry Received</h2>
      <hr>
      <h3>Tour Details:</h3>
      <p><strong>Tour Name:</strong> ${tourName}</p>
      <p><strong>Duration:</strong> ${tourDuration}</p>
      <p><strong>Price:</strong> ${tourPrice}</p>
      <hr>
      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Selected Location:</strong> ${location}</p>
      <hr>
      <h3>Additional Requirements:</h3>
      <p>${notes || 'No additional requirements mentioned'}</p>
      <hr>
      <p><em>Please respond to the customer within 24 hours.</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send enquiry' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
