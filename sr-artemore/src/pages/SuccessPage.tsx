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

interface SuccessPageProps {
  onNavigate: (page: Page) => void;
}

export default function SuccessPage({ onNavigate }: SuccessPageProps) {
  const orderNum = `SR-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="success-page">
      
      {/* ✅ ICON */}
      <div className="success-icon">✓</div>

      {/* ✅ TITLE */}
      <h1>Order Confirmed</h1>

      <p>
        Thank you for your order. Your items are now being prepared with care.
      </p>

      {/* ✅ ORDER BOX */}
      <div className="order-box">
        <p><strong>Order ID:</strong> #{orderNum}</p>
        <p><strong>Estimated Delivery:</strong> 3–5 business days</p>
      </div>

      <p style={{ marginTop: "10px", fontSize: "13px", color: "var(--text-muted)" }}>
        A confirmation email has been sent with your order details.
      </p>

      {/* ✅ ACTION BUTTONS */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          className="btn-primary"
          onClick={() => onNavigate("products")}
        >
          Continue Shopping
        </button>

        <button
          className="btn-outline"
          style={{
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
          onClick={() => onNavigate("home")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}