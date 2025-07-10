import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";
import ActivitiesPage from "./pages/ActivitiesPage";
import NewsPage from "./pages/NewsPage";
import MapPage from "./pages/MapPage";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/movement" element={<ActivitiesPage />} />
        <Route path="/kindergarten" element={<NewsPage />} />
        <Route path="/shop" element={<HomePage />} />
        <Route path="/donate" element={<CertificatePage />} />
        <Route path="/projects" element={<ActivitiesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
