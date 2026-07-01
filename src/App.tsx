import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import GiteDetailPage from "./pages/GiteDetailPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gite/:slug" element={<GiteDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
