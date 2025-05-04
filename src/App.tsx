import { Routes, Route } from "react-router";

import Intro from "./pages/Intro";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Navbar />
    </>
  );
};

export default App;
