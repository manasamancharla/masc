import { Routes, Route } from "react-router";

import Intro from "./pages/Intro";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
