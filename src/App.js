import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <div >
      <Router basename="/">
          <Header />
          <Routes>
              <Route path="/" element={<About />} /> 
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
