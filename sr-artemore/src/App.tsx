import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { NotifProvider } from "./components/Notification";
import CustomCursor from "./components/CustomCursor";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";

type Page = "home" | "products" | "detail" | "cart" | "checkout" | "success" | "about" | "contact" | "favorites";

function AppInner() {
  const [page, setPage] = useState<Page>("home");
  const [productId, setProductId] = useState<number>(1);

  const navigate = (newPage: Page, id?: number) => {
    if (id !== undefined) setProductId(id);
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showFooter = page !== "checkout" && page !== "success";

  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Header currentPage={page} onNavigate={navigate} />

      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "products" && <ProductsPage onNavigate={navigate} />}
      {page === "detail" && <ProductDetailPage productId={productId} onNavigate={navigate} />}
      {page === "favorites" && <FavoritesPage onNavigate={navigate} />}
      {page === "cart" && <CartPage onNavigate={navigate} />}
      {page === "checkout" && <CheckoutPage onNavigate={navigate} />}
      {page === "success" && <SuccessPage onNavigate={navigate} />}
      {page === "about" && <AboutPage onNavigate={navigate} />}
      {page === "contact" && <ContactPage />}

      {showFooter && <Footer onNavigate={navigate} />}
    </>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <NotifProvider>
          <AppInner />
        </NotifProvider>
      </CartProvider>
    </FavoritesProvider>
  );
}