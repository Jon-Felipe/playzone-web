import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';

// components
import SiteLayout from './components/Layouts/SiteLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
