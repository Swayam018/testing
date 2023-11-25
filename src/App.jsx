import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SpalshScreen from "./pages/SpalshScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
      <Router>
        <SpalshScreen />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
