

// server.js

const express = require('express');

const twilio = require('twilio');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// Twilio client setup

const accountSid="";
const authToken="" ;



const client = twilio(accountSid, authToken);

// Route to generate OTP
app.post('/generate-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  try {
    const verification = await client.verify.v2.services("VA8137360825643e3e2b4629c4e662c752")
      .verifications
      .create({ to: `+91${phoneNumber}`, channel: 'sms' });
    res.status(200).json({ message: 'OTP sent', sid: verification.sid });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send OTP', details: error.message });
  }
});

// Route to verify OTP
app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, code } = req.body;
  console.log(code)

  if (!phoneNumber || !code) {
    return res.status(400).json({ error: 'Phone number and code are required' });
  }

  try {
    const verification_check = await client.verify.v2.services("VA8137360825643e3e2b4629c4e662c752")
        .verificationChecks
        .create({ to: `+91${phoneNumber}`, code });

    console.log(verification_check.status);
    res.status(200).json({ message: verification_check.status });
} catch (err) {
    console.error('Error during OTP verification:', err.message);
    res.status(500).json({ error: 'Failed to verify OTP' });
}

});

// Start the server
app.listen(port, () => {
  console.log(`Server`)})
