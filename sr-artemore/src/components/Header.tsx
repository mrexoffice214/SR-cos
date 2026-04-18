import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

type Page = "home" | "products" | "detail" | "cart" | "checkout" | "success" | "about" | "contact" | "favorites";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <div className="logo-wrap" onClick={() => onNavigate("home")}>
          <svg className="logo-svg" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="40" height="40" stroke="#c9a96e" strokeWidth="1.2"/>
            <rect x="4" y="4" width="34" height="34" stroke="#c9a96e" strokeWidth="0.5" strokeDasharray="2 2"/>
            <text x="21" y="17" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontWeight="600" fill="#0a0a0a">SR</text>
            <line x1="8" y1="21" x2="34" y2="21" stroke="#c9a96e" strokeWidth="0.6"/>
            <text x="21" y="33" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fill="#c9a96e">✿ ✿ ✿</text>
          </svg>
          <div>
            <div className="logo-text">SR <span>ARTÉ</span>MORE</div>
            <div className="logo-sub">Luxury Press-On Nails</div>
          </div>
        </div>

        <ul className="nav-links">
          {(["home", "products", "about", "contact"] as const).map(page => (
            <li key={page}>
              <a
                onClick={() => onNavigate(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page === "home" ? "Home" : page === "products" ? "Products" : page === "about" ? "About Us" : "Contact"}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-icons">
          {/* Search Icon */}
          <button onClick={() => onNavigate("products")} title="Search">
            <i className="ri-search-line"></i>
          </button>
          
          {/* Favorites Icon */}
<button 
  onClick={() => onNavigate("favorites")} 
  className="icon-btn"
  style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <i className={favorites.length > 0 ? "ri-heart-3-fill" : "ri-heart-3-line"}></i>
  
  {favorites.length > 0 && (
    <span className="fav-badge">{favorites.length}</span>
  )}
</button>

          {/* Cart Icon (Remix Icon) */}
          <button 
            onClick={() => onNavigate("cart")} 
            title="Cart" 
            style={{ position: "relative" }}
            className={`icon-btn ${currentPage === "cart" ? "active" : ""}`}
          >
            <i className="ri-shopping-cart-fill"></i>
            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}