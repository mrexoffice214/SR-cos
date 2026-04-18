import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <div className="contact-layout">
        <div className="contact-info">
          <h1>Let's<br />Connect</h1>
          <p>Have a question, custom order request, or just want to say hello? We'd love to hear from you. Our team responds within 24 hours.</p>

          {[
            { icon: "📍", title: "Studio", text: "Mumbai, Maharashtra, India" },
            { icon: "📧", title: "Email", text: "hello@srArtemore.com" },
            { icon: "📱", title: "WhatsApp", text: "+91 98765 43210" },
            { icon: "🕐", title: "Hours", text: "Mon–Sat, 10am – 7pm IST" },
          ].map(d => (
            <div key={d.title} className="contact-detail">
              <div className="icon">{d.icon}</div>
              <h4>{d.title}</h4>
              <p>{d.text}</p>
            </div>
          ))}

          <div className="footer-social" style={{ marginTop: "40px" }}>
            {["📸", "🎵", "📌"].map((icon, i) => (
              <a key={i} className="social-btn">{icon}</a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: "48px", color: "var(--gold)", marginBottom: "20px" }}>✓</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, marginBottom: "12px" }}>Message Sent!</h2>
              <p style={{ color: "var(--text-muted)" }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input required value={form.name} onChange={e => set("name", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={e => set("email", e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input required value={form.subject} onChange={e => set("subject", e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    style={{ width: "100%", minHeight: "150px", padding: "12px", border: "1px solid var(--border)", fontFamily: "'Jost', sans-serif", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
