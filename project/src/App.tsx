import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CallForPaper from './pages/CallForPaper';
import Committee from './pages/Committee';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ImportantDates from './pages/ImportantDates';
import Registration from './pages/Registration';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/call-for-paper" element={<CallForPaper />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;