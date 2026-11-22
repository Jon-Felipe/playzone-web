import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage/HomePage';

// components
import SiteLayout from './components/Layouts/SiteLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
