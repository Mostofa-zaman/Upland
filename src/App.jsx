import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Popup from "./pages/Popup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post" element={<Post />} />
          <Route path="popup" element={<Popup />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
