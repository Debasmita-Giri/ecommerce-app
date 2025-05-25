import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { customerTheme } from "../customer/Components/customeThem";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import ContactUs from "../pages/ContactUs";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CancellationReturns from "../pages/CancellationReturns";
import BecomeSeller from "../pages/BecomeSeller";
import AffiliateProgram from "../pages/AffiliateProgram";
import About from "../pages/About";
import Homepage from "../pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import JobsSection from "../pages/JobsSection";
import NotFound from "../pages/Notfound";
import Cart from "../customer/Components/Cart/Cart";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";

const CustomerRoutes = () => {
  const location = useLocation();
  const showNavigation = location.pathname !== "*";

  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        {showNavigation && <Navigation />}
        <Routes>
          <Route path="/login" element={<Homepage />}></Route>
          <Route path="/register" element={<Homepage />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-condition" element={<TermsOfUse />}></Route>
          <Route path="/cancellation&return" element={<CancellationReturns />}></Route>
          <Route path="/seller" element={<BecomeSeller />}></Route>
          <Route path="/affiliate" element={<AffiliateProgram />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/jobs" element={<JobsSection />}></Route>
          <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
          <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payments/:orderId" element={<PaymentSuccess />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
