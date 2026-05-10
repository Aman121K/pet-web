import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { NewsletterModal } from './components/NewsletterModal.jsx';
import { About } from './pages/About.jsx';
import { Blog } from './pages/Blog.jsx';
import { Checkout } from './pages/Checkout.jsx';
import { Contact } from './pages/Contact.jsx';
import { CreateAccount } from './pages/CreateAccount.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Faq } from './pages/Faq.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { ProductDetails } from './pages/ProductDetails.jsx';
import { Shop } from './pages/Shop.jsx';
import { Signup } from './pages/Signup.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
}
