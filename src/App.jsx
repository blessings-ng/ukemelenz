import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

// 1. Import Layouts
import Layout from './components/Layout';

// 2. Import Pages
// We have built Home.jsx, so we import it normally.
import Home from './pages/Home';

// --- TEMPORARY PLACEHOLDERS ---
// Since we haven't written the code for these pages yet, 
// I am defining them here so your app doesn't crash.
// As we build each page, you will delete these lines and import the real files.
const About = () => <div className="min-h-screen flex items-center justify-center text-white text-3xl font-heading uppercase">About Page</div>;
const Services = () => <div className="min-h-screen flex items-center justify-center text-white text-3xl font-heading uppercase">Services Page</div>;
const Gallery = () => <div className="min-h-screen flex items-center justify-center text-white text-3xl font-heading uppercase">Gallery Page</div>;
const Feedback = () => <div className="min-h-screen flex items-center justify-center text-white text-3xl font-heading uppercase">Feedback Page</div>;
const BookNow = () => <div className="min-h-screen flex items-center justify-center text-white text-3xl font-heading uppercase">Booking Page</div>;

// 3. The "Scroll To Top" Helper
// This ensures the window scrolls up every time the route changes.
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Layout>
          <Routes>
            {/* The 6 Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </Layout>
      </Wrapper>
    </Router>
  );
}

export default App;