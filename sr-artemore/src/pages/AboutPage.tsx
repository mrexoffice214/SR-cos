type Page = "home" | "products" | "detail" | "cart" | "checkout" | "success" | "about" | "contact";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <div className="about-hero">
        <div className="about-hero-text">
          <h1>Crafting<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Beauty</em><br />by Hand</h1>
          <p>SR Artémore was born from a simple belief: every person deserves to wear art. We handcraft luxury press-on nails with precision, passion, and a commitment to perfection that has made us the trusted choice for hundreds of style-conscious clients across India.</p>
        </div>
        <div className="about-hero-img">
          <img src="https://placehold.co/500x625/1a1a1a/c9a96e?text=SR+ARTEMORE" alt="About SR Artemore" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <img src="https://placehold.co/600x450/f5f0e8/c9a96e?text=Our+Studio" alt="Our Studio" />
          <div className="about-grid-text">
            <h2>The Story<br />Behind the Brand</h2>
            <p>It began in a small studio in Mumbai, where our founder SR spent hours perfecting the art of press-on nail making. What started as a personal passion quickly turned into something bigger — a community of women who believe that beautiful nails shouldn't come at the cost of your time or your natural nails.</p>
            <p>Today, SR Artémore crafts every single set by hand. No machines, no assembly lines — just careful, considered craftsmanship that you can feel the moment you put them on.</p>
          </div>
        </div>

        <div className="about-grid" style={{ flexDirection: "row-reverse" }}>
          <div className="about-grid-text">
            <h2>Our Process &amp;<br />Philosophy</h2>
            <p>We begin every set with premium acrylic blanks, carefully shaped and filed to our signature profiles. Each nail is then hand-painted with multiple layers of professional gel polish, cured under UV light, and finished with our signature topcoat.</p>
            <p>Aurora chrome effects, marble designs, and intricate nail art are all applied by hand — making every set truly one-of-a-kind. Our nails are reusable, adjustable, and built to last through 10+ wears.</p>
            <button className="btn-primary" onClick={() => onNavigate("products")}>
              <span>Shop Now</span>
            </button>
          </div>
          <img src="https://placehold.co/600x450/0a0a0a/c9a96e?text=Our+Process" alt="Our Process" />
        </div>

        <div className="section-header">
          <p className="section-label">Our Values</p>
          <h2 className="section-title">What We Stand For</h2>
        </div>
        <div className="values-grid">
          {[
            { icon: "✦", title: "Handcrafted Quality", text: "Every set is made individually by hand. No shortcuts, no compromises. Just pure craftsmanship." },
            { icon: "♻", title: "Reusable Design", text: "Our press-ons are designed to be worn multiple times. Sustainable beauty that doesn't cost the earth." },
            { icon: "💎", title: "Premium Materials", text: "We use only professional-grade materials — the same quality as your favourite nail salon." },
          ].map(v => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-section">
        <div className="section-header">
          <p className="section-label">The Team</p>
          <h2 className="section-title">Meet the Artisans</h2>
          <p className="section-sub">A small, passionate team dedicated to making you feel beautiful</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", maxWidth: "800px", margin: "0 auto" }}>
          {["SR — Founder & Lead Artisan", "Meera — Design Lead", "Priya — Customer Experience"].map(name => (
            <div key={name} style={{ textAlign: "center" }}>
              <div style={{
                width: "120px", height: "120px", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
                margin: "0 auto 16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "36px"
              }}>✦</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px" }}>{name.split("—")[0]}</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "2px" }}>{name.split("—")[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
