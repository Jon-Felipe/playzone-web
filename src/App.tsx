import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import CartPage from './pages/CartPage/CartPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ReviewPage from './pages/ReviewPage/ReviewPage';

// components
import SiteLayout from './components/Layouts/SiteLayout';
import CheckoutLayout from './components/Layouts/CheckoutLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
          <Route path='cart' element={<CheckoutLayout />}>
            <Route index element={<CartPage />} />
            <Route path='payment' element={<PaymentPage />} />
            <Route path='review' element={<ReviewPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
