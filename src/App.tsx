import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
