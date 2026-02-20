export default function Contact() {
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

        <form
          className="contact-form"
          action="https://formsubmit.co/tharusree7@gmail.com"
          method="POST"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Portfolio Contact" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-xi-livid-95.vercel.app/#contact"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}