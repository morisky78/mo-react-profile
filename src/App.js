import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from "./pages/About";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div >
      <Router basename="/">
          <Navigation />
          <Routes>
              <Route path="/" element={<About />} /> 
              <Route path="/portfolio" element={<h2>portfolio</h2>}/>
              <Route path="/contact" element={<h2>contact</h2>} />
              <Route path="/resume" element={<h2>Resume</h2>} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
