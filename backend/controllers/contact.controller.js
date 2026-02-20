import Contact from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    await Contact.create({ name, email, message });

    // SMTP Transport (Render-safe)
    const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

    

    // Send mail
    await transporter.sendMail({
      from: `"HR via Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};