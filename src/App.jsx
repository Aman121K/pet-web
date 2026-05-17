import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { NewsletterModal } from './components/NewsletterModal.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { About } from './pages/About.jsx';
import { Blog } from './pages/Blog.jsx';
import { BlogDetails } from './pages/BlogDetails.jsx';
import { Checkout } from './pages/Checkout.jsx';
import { CheckoutPayment } from './pages/CheckoutPayment.jsx';
import { Contact } from './pages/Contact.jsx';
import { CreateAccount } from './pages/CreateAccount.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Faq } from './pages/Faq.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { ProductDetails } from './pages/ProductDetails.jsx';
import { OrderConfirmation } from './pages/OrderConfirmation.jsx';
import { Shop } from './pages/Shop.jsx';
import { ShoppingCart } from './pages/ShoppingCart.jsx';
import { Shipping } from './pages/Shipping.jsx';
import { Terms } from './pages/Terms.jsx';
import { Returns } from './pages/Returns.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';
import { Signup } from './pages/Signup.jsx';

export default function App() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white text-ink">
      <Header />
      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<CheckoutPayment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </main>
      <NewsletterModal />
      <CartDrawer />
    </div>
  );
}
