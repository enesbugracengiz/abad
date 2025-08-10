import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import NaturePage from "./pages/NaturePage";
import YouthPage from "./pages/YouthPage";
import EducationPage from "./pages/EducationPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<HomePage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/shop" element={<HomePage />} />
        <Route path="/donate" element={<CertificatePage />} />
        <Route path="/nature" element={<NaturePage />} />
        <Route path="/youth" element={<YouthPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
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
    </AuthProvider>
  );
}

export default App;
