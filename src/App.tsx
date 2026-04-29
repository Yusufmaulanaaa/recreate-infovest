import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Home from "./pages/Home";
import TalkShow from "./pages/TalkShow";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/WorkShop";
import Competition from "./pages/Competition";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Group 1: Halaman Utama dengan Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/talkshow" element={<TalkShow />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />
          
          {/* Halaman yang diproteksi (Hanya bisa diakses jika sudah login) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {/* Ganti dengan Dashboard jika nanti sudah ada komponennya */}
                <Home /> 
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Group 2: Halaman Autentikasi (Tanpa Navbar/Footer Utama) */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>

        {/* Fallback Route: Jika user mengetik alamat asal, arahkan ke Home */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;