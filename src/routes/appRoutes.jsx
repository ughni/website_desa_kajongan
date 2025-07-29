import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import AjukanSurat from "../Pages/AjukanSuratPage";
import AdminDashboard from "../Pages/AdminDashboardPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ajukan" element={<AjukanSurat />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
