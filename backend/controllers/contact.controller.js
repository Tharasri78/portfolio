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

    // Mail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send mail TO YOU
    await transporter.sendMail({
  from: `"HR via Portfolio" <${process.env.EMAIL_USER}>`, // REQUIRED
  to: process.env.EMAIL_USER,                              // ALWAYS YOU
  replyTo: email,                                          // HR EMAIL
  subject: "New Contact Message",
  html: `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
});


    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
