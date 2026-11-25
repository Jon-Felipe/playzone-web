import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import CartPage from './pages/CartPage/CartPage';

// components
import SiteLayout from './components/Layouts/SiteLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
