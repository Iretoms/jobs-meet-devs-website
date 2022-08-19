import GlobalStyles from "./styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Community from "./pages/Community"
import ContactUs from "./pages/ContactUs"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;