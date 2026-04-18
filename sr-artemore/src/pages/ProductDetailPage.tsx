import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useNotif } from "../components/Notification";
import ProductCard from "../components/ProductCard";

type Page =
  | "home"
  | "products"
  | "detail"
  | "cart"
  | "checkout"
  | "success"
  | "about"
  | "contact"
  | "favorites";

interface ProductDetailProps {
  productId: number;
  onNavigate: (page: Page, productId?: number) => void;
}

export default function ProductDetailPage({
  productId,
  onNavigate,
}: ProductDetailProps) {
  const product =
    products.find((p) => p.id === productId) || products[0];

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0] || ""
  );
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();
  const { show } = useNotif();

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product, selectedSize, selectedColor);
    }
    show(`${product.name} added to cart!`);
  };

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category === product.category
    )
    .slice(0, 4);

  return (
    <div>
      {/* 🔹 BREADCRUMB */}
      <div className="page-hero" style={{ padding: "40px 60px" }}>
        <p className="breadcrumb">
          <a
            onClick={() => onNavigate("home")}
            style={{ cursor: "pointer", color: "#888" }}
          >
            Home
          </a>
          {" → "}
          <a
            onClick={() => onNavigate("products")}
            style={{ cursor: "pointer", color: "#888" }}
          >
            Products
          </a>
          {" → "}
          <span>{product.name}</span>
        </p>
      </div>

      <div className="detail-layout">
        {/* 🔹 IMAGE GALLERY */}
        <div className="img-gallery">
          <div className="thumb-list">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                className={`thumb${
                  activeImg === i ? " active" : ""
                }`}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>

          <div className="main-img">
            <img
              src={product.images[activeImg] || product.image}
              alt={product.name}
            />
          </div>
        </div>

        {/* 🔹 INFO */}
        <div className="detail-info">
          <p className="detail-label">{product.category}</p>
          <h1 className="detail-title">{product.name}</h1>

          {/* ⭐ RATING */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <span style={{ color: "var(--gold)", fontSize: "14px" }}>
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              ({product.reviews} reviews)
            </span>
          </div>

          {/* 💰 PRICE */}
          <div className="detail-price">
            £{product.price}
            {product.oldPrice && (
              <span className="old">£{product.oldPrice}</span>
            )}
          </div>

          <p className="detail-desc">{product.description}</p>

          {/* 🔹 SIZE */}
          {product.sizes.length > 0 && (
            <>
              <p className="option-label">
                Size: <strong>{selectedSize}</strong>
              </p>
              <div className="size-options">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`size-btn${
                      selectedSize === s ? " active" : ""
                    }`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* 🔹 COLOR */}
          {product.colors.length > 0 && (
            <>
              <p className="option-label">Color</p>
              <div className="color-options">
                {product.colors.map((c) => (
                  <div
                    key={c}
                    className={`color-dot${
                      selectedColor === c ? " active" : ""
                    }`}
                    style={{ background: c }}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
            </>
          )}

          {/* 🔹 QTY + ADD */}
          <div className="qty-add">
            <div className="qty-wrap">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <input type="number" value={qty} readOnly />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>

            <button className="btn-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className="btn-wishlist">♡</button>
          </div>

          {/* 🔹 FEATURES */}
          <div className="detail-features">
            {[
              "100% Handmade — crafted individually in our studio",
              "Reusable up to 10+ wears with proper care",
              "Includes application kit & adhesive tabs",
              "Free shipping on orders above £50",
            ].map((text) => (
              <div key={text} className="feature-row">
                <span className="feature-icon">✦</span>
                <span className="feature-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 RELATED */}
      {related.length > 0 && (
        <div className="similar-section">
          <div className="section-header">
            <p className="section-label">You May Also Like</p>
            <h2 className="section-title">Related Products</h2>
          </div>

          <div className="products-grid">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}