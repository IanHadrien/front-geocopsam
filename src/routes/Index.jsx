import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Maps from "../pages/Maps/Index";
import AuthenticatedLayout from "../layouts/AuthenticatedLayates";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Plantations from "../pages/Plantations";
import Profile from "../pages/Profile";
import PlantationCreate from "../pages/Plantations/Create";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<AuthenticatedLayout />}>
          <Route path="/maps" element={<Maps />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />

          {/* Plantações */}
          <Route path="/plantations" element={<Plantations />} />
          <Route path="/plantations/create" element={<PlantationCreate />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}