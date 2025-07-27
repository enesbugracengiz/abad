import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";
import ActivitiesPage from "./pages/ActivitiesPage";
import NewsPage from "./pages/NewsPage";
import MapPage from "./pages/MapPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/map" element={<MapPage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/certificate" element={<CertificatePage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/movement" element={<ActivitiesPage />} />
                <Route path="/kindergarten" element={<NewsPage />} />
                <Route path="/shop" element={<HomePage />} />
                <Route path="/donate" element={<CertificatePage />} />
                <Route path="/projects" element={<ActivitiesPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>

      {/* Toast Bildirimleri */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          fontSize: "14px",
          borderRadius: "8px",
        }}
      />
    </>
  );
}

export default App;
