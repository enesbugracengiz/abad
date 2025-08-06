import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/shop" element={<HomePage />} />
        <Route path="/donate" element={<CertificatePage />} />
        <Route path="/admin" element={<AdminPage />} />
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
