import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <div className="maincontainer">
      <Router basename="/">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Routes>
              <Route path="/" element={<About  currentPage={currentPage} setCurrentPage={setCurrentPage} />} /> 
              <Route path="/portfolio" element={<Portfolio currentPage={currentPage} setCurrentPage={setCurrentPage} />}/>
              {/* <Route path="/contact" element={<Contact  currentPage={currentPage} setCurrentPage={setCurrentPage} />} /> */}
              <Route path="/resume" element={<Resume  currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
              <Route path="*" element={<h2>404 page</h2>} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

// import React from "react";
// import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { Header } from "./Header";
// import { Item } from "./Item";
// import { List } from "./List";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;

//   return (
//     <>
//       <List selectedId={id} />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div className="container">
//       <AnimateSharedLayout type="crossfade">
//         <Header />
//         <Router>
//           <Route path={["/:id", "/"]} component={Store} />
//         </Router>
//       </AnimateSharedLayout>
//     </div>
//   );
// }
