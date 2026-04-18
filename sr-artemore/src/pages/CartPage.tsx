import { useState } from "react";
import { useCart } from "../context/CartContext";

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

interface CartPageProps {
  onNavigate: (page: Page, productId?: number) => void;
}

export default function CartPage({ onNavigate }: CartPageProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = totalPrice >= 50 ? 0 : 5;
  const discount = couponApplied ? Math.round(totalPrice * 0.1) : 0;
  const total = Math.max(0, totalPrice + shipping - discount);

  if (items.length === 0) {
    return (
      <div className="cart-layout">
        <h1>Your Cart</h1>

        <div className="empty-cart">
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>🛍️</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>

          <button
            className="btn-primary"
            onClick={() => onNavigate("products")}
          >
            <span>Browse Collection</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <h1>Your Cart</h1>

      {/* 🔹 TABLE */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={`${item.product.id}-${item.size}-${item.color}`}>
              <td>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cart-item-img"
                />
              </td>

              <td>
                <div className="cart-item-name">
                  {item.product.name}
                </div>
                <div className="cart-item-variant">
                  Size: {item.size}
                </div>
                <div className="cart-item-variant">
                  Color: {item.color}
                </div>
              </td>

              <td>£{item.product.price}</td>

              <td>
                <div className="cart-qty">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        item.color,
                        -1
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        item.color,
                        1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </td>

              <td>
                £{item.product.price * item.quantity}
              </td>

              <td>
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.product.id,
                      item.size,
                      item.color
                    )
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔹 SUMMARY */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>£{totalPrice}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `£${shipping}`}</span>
        </div>

        {couponApplied && (
          <div
            className="summary-row"
            style={{ color: "var(--gold)" }}
          >
            <span>Discount (10%)</span>
            <span>−£{discount}</span>
          </div>
        )}

        {/* 🔹 COUPON */}
        <div className="coupon-row">
          <input
            type="text"
            placeholder="Coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <button
            onClick={() => {
              if (coupon.trim()) setCouponApplied(true);
            }}
          >
            Apply
          </button>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>£{total}</span>
        </div>

        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: "16px" }}
          onClick={() => onNavigate("checkout")}
        >
          <span>Proceed to Checkout</span>
        </button>

        <button
          className="btn-outline"
          style={{
            width: "100%",
            marginTop: "10px",
          }}
          onClick={() => onNavigate("products")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}