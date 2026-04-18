import { useEffect } from "react";
import { products, categories, testimonials } from "../data/products";
import ProductCard from "../components/ProductCard";

// ADDED "favorites" HERE TO FIX THE ERROR
type Page = "home" | "products" | "detail" | "cart" | "checkout" | "success" | "about" | "contact" | "favorites";

interface HomePageProps {
  onNavigate: (page: Page, productId?: number) => void;
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage({ onNavigate }: HomePageProps) {
  useReveal();

  const instaImages = [
    "https://placehold.co/200x200/1a0a0a/c9a96e?text=♦",
    "https://placehold.co/200x200/0a0a1a/e8d5b0?text=♦",
    "https://placehold.co/200x200/0a1a0a/c9a96e?text=♦",
    "https://placehold.co/200x200/1a1a0a/c9a96e?text=♦",
    "https://placehold.co/200x200/1a0a1a/e8d5b0?text=♦",
    "https://placehold.co/200x200/0a1a1a/c9a96e?text=♦",
  ];

  return (
    <div>
      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">✦ Handcrafted Luxury</p>
          <h1 className="hero-title">
            Wear Art<br />on Your<br /><em>Fingertips</em>
          </h1>
          <p className="hero-sub">
            Handmade luxury essentials crafted with precision. Exclusive designs that transform your look instantly.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => onNavigate("products")}>
              <span>Explore Collection</span>
            </button>
            <button className="btn-outline" onClick={() => onNavigate("about")}>Our Story</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">500+</div>
              <div className="lbl">Happy Clients</div>
            </div>
            <div className="hero-stat">
              <div className="num">100%</div>
              <div className="lbl">Handmade</div>
            </div>
            <div className="hero-stat">
              <div className="num">20+</div>
              <div className="lbl">Designs</div>
            </div>
          </div>
        </div>
        <div className="hero-image" style={{ background: 'black' }}>
          <img
            src="/hero-bg.jpg"
            alt="SR Artemore Luxury"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              maskImage: 'linear-gradient(to right, transparent, black 50%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)'
            }}
          />
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {["✦ Henna Stencils", "✦ Press On Nails", "✦ Bridal Jewellery", "✦ Hand Made", "✦ Reusable", "✦ Free Shipping",
            "✦ Henna Stencils", "✦ Press On Nails", "✦ Bridal Jewellery", "✦ Hand Made", "✦ Reusable", "✦ Free Shipping"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="section" style={{ background: "var(--white)" }}>
        <div className="section-header reveal">
          <p className="section-label">Browse By</p>
          <h2 className="section-title">Categories</h2>
          <p className="section-sub">Explore our signature handcrafted collections</p>
        </div>
        
        <div 
          className="categories-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px',
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`cat-card reveal reveal-delay-${i + 1}`}
              onClick={() => onNavigate("products")}
              style={{ width: '100%' }}
            >
              <img src={cat.image} alt={cat.name} style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
              <div className="cat-arrow">→</div>
              <div className="cat-info">
                <div className="cat-name">{cat.name}</div>
                <div className="cat-count">View Collection</div>
              </div>
            </div>
          ))}

          {/* NEW COMING SOON CATEGORY */}
          <div
            className={`cat-card reveal reveal-delay-4`}
            style={{ width: '100%', cursor: 'default', opacity: 0.9 }}
          >
            <div style={{ aspectRatio: '16/9', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '2px' }}>PREMIUM FASHION</span>
            </div>
            <div className="cat-info">
              <div className="cat-name" style={{ color: 'var(--gold)' }}>SR ARTÉMORE FASHION</div>
              <div className="cat-count" style={{ fontStyle: 'italic', opacity: 0.8 }}>Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="section" style={{ background: "var(--cream)" }}>
        <div className="section-header reveal">
          <p className="section-label">Handcrafted</p>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-sub">Each set a masterpiece — limited editions crafted with care</p>
        </div>
        <div className="products-grid">
          {products.slice(0, 4).map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ProductCard product={p} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
        <div className="view-all-btn">
          <button className="btn-primary" onClick={() => onNavigate("products")}>
            <span>View All Products</span>
          </button>
        </div>
      </div>

      {/* BANNER */}
      <div className="banner">
        <div className="banner-text">
          <p className="eyebrow">✦ The SR Artémore Difference</p>
          <h2>Crafted for<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Perfection</em></h2>
          <p>Every piece is hand-crafted in our studio. We use only the finest materials to ensure premium luxury and durability.</p>
          <button className="btn-primary" onClick={() => onNavigate("about")}><span>Our Process</span></button>
          <div className="banner-stats">
            {[["500+", "Happy Clients"], ["Premium", "Quality"], ["100%", "Handmade"], ["4.9★", "Avg Rating"]].map(([num, lbl]) => (
              <div key={lbl} className="stat-item">
                <div className="num">{num}</div>
                <div className="lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="banner-img-grid">
          <div className="img-wrap">
            <img src="https://placehold.co/600x240/1a1a1a/c9a96e?text=SR+ARTEMORE" alt="Craft" />
          </div>
          <div className="img-wrap">
            <img src="https://placehold.co/280x180/2a1a0a/e8d5b0?text=Detail" alt="Detail" />
          </div>
          <div className="img-wrap">
            <img src="https://placehold.co/280x180/0a1a2a/c9a96e?text=Style" alt="Style" />
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section testimonials">
        <div className="section-header reveal">
          <p className="section-label">Client Love</p>
          <h2 className="section-title">What They Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card reveal reveal-delay-${i + 1}`}>
              <div className="stars">{t.stars}</div>
              <p className="testi-text">"{t.text}"</p>
              <p className="testi-author">— {t.author}, <span>{t.location}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="section" style={{ background: "var(--white)" }}>
        <div className="section-header reveal">
          <p className="section-label">Just Dropped</p>
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-sub">Fresh designs, just crafted — be the first to wear them</p>
        </div>
        <div className="products-grid">
          {products.slice(4, 8).map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <ProductCard product={p} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="section" style={{ padding: "40px 0", background: "var(--cream)" }}>
        <div className="section-header reveal">
          <p className="section-label">@srArtemore</p>
          <h2 className="section-title">Follow Our World</h2>
        </div>
        <div className="insta-grid">
          {instaImages.map((src, i) => (
            <div key={i} className="insta-item">
              <img src={src} alt={`Instagram ${i + 1}`} />
              <div className="insta-overlay">♡</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}