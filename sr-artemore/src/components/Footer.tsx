type Page = "home" | "products" | "detail" | "cart" | "checkout" | "success" | "about" | "contact";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase" }}>
            SR <span style={{ color: "var(--gold)" }}>ARTÉ</span>MORE
          </div>
          <p>Handcrafted luxury press-on nails. Each set a masterpiece — made with love, worn with confidence. Reusable, adjustable, and built to last.</p>
          <div className="footer-social">
            {["📸", "🎵", "📌", "💼"].map((icon, i) => (
              <a key={i} className="social-btn">{icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a onClick={() => onNavigate("products")}>All Products</a></li>
            <li><a onClick={() => onNavigate("products")}>New Arrivals</a></li>
            <li><a onClick={() => onNavigate("products")}>Best Sellers</a></li>
            <li><a onClick={() => onNavigate("products")}>Sale</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a>Size Guide</a></li>
            <li><a>How to Apply</a></li>
            <li><a>FAQ</a></li>
            <li><a onClick={() => onNavigate("contact")}>Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a onClick={() => onNavigate("about")}>About Us</a></li>
            <li><a>Our Story</a></li>
            <li><a>Press</a></li>
            <li><a>Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 SR Artémore. All rights reserved. Made with ♥ in India.</p>
        <div className="payment-icons">
          {["VISA", "MASTER", "UPI", "COD"].map(m => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
