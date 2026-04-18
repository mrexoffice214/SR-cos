import { useState } from "react";
import { products, categories } from "../data/products";
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

interface ProductsPageProps {
  onNavigate: (page: Page, productId?: number) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedCat, setSelectedCat] = useState("All");
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState(250); // 🔥 increased for jewellery

  const filtered = products
    .filter((p) => selectedCat === "All" || p.category === selectedCat)
    .filter((p) => p.price <= priceRange)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "featured") return Number(b.featured) - Number(a.featured);
      return 0;
    });

  return (
    <div className="products-container">
      <div className="page-hero">
        <h1 style={{ fontFamily: "Bodoni Moda, serif" }}>
          Our Collections
        </h1>
        <p className="breadcrumb">
          Home → <span>Shop</span>
        </p>
      </div>

      <div className="shop-layout">
        {/* 🔹 SIDEBAR */}
        <div className="sidebar">
          <h3 className="filter-title">CATEGORIES</h3>

          {/* ALL */}
          <div
            className="filter-item"
            onClick={() => setSelectedCat("All")}
            style={{ cursor: "pointer", marginBottom: "15px" }}
          >
            <label
              style={{
                color: selectedCat === "All" ? "var(--gold)" : "inherit",
                fontWeight: selectedCat === "All" ? "600" : "400",
              }}
            >
              All Products
            </label>
            <span>{products.length}</span>
          </div>

          {/* CATEGORY LIST */}
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="filter-item"
              onClick={() => setSelectedCat(cat.name)}
              style={{ cursor: "pointer", marginBottom: "15px" }}
            >
              <label
                style={{
                  color:
                    selectedCat === cat.name ? "var(--gold)" : "inherit",
                  fontWeight:
                    selectedCat === cat.name ? "600" : "400",
                }}
              >
                {cat.name}
              </label>
              <span>
                {
                  products.filter(
                    (p) => p.category === cat.name
                  ).length
                }
              </span>
            </div>
          ))}

          {/* 🔹 PRICE */}
          <h3 className="filter-title" style={{ marginTop: "40px" }}>
            PRICE RANGE
          </h3>
          <input
            type="range"
            min={0}
            max={250}
            step={5}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="price-range-slider"
          />
          <p className="price-display">Up to £{priceRange}</p>

          {/* 🔹 BADGE (UI only for now) */}
          <h3 className="filter-title" style={{ marginTop: "40px" }}>
            BADGE
          </h3>
          {["New Arrivals", "On Sale", "Best Sellers"].map((b) => (
            <div key={b} className="filter-item">
              <label className="checkbox-label">{b}</label>
            </div>
          ))}
        </div>

        {/* 🔹 MAIN */}
        <div className="main-content">
          <div className="shop-header">
            <p>
              Showing <strong>{filtered.length}</strong> products
            </p>

            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* 🔹 GRID */}
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {/* 🔹 EMPTY STATE */}
          {filtered.length === 0 && (
            <div className="no-results">
              <p>
                No products match your criteria. Try adjusting the
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}