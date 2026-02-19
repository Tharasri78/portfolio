import { useState } from "react";
import { sendContactMessage } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await sendContactMessage(form);
      setStatus("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">

        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>
            Have a project idea, collaboration, or opportunity?
            Send a message and I’ll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
