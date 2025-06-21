import { Routes, Route } from "react-router";
import { AnimatePresence } from "motion/react";

import Intro from "./pages/Intro";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Navbar />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default App;
