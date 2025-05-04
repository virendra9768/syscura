// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import "./index.css";

// export default function MyApp() {
//   return (
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BannerSection } from "./components/BannerSection";
import { ContactUs } from "./components/ContactUs";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
