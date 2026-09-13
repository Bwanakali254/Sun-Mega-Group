import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import GlassInterior from "./pages/GlassInterior";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import RealEstate from "./pages/RealEstate";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/glass-interior" element={<GlassInterior />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
