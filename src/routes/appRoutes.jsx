import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AjukanSurat from "../pages/AjukanSurat";
import AdminDashboard from "../pages/adminDashboard";
import ProfilDesa from "../components/ProfilDesa";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ajukan" element={<AjukanSurat />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
