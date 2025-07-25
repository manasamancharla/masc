import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

import Intro from "./pages/Intro";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index element={<Intro />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
