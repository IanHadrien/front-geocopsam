import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Maps from "../pages/Maps/Index";
import AuthenticatedLayout from "../layouts/AuthenticatedLayates";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserEdit from "../pages/Users/edit";
import UserView from "../pages/Users/view";
import Plantations from "../pages/Plantations";
import Profile from "../pages/Profile";
import PlantationCreate from "../pages/Plantations/Create";
import Cultivations from "@/pages/Cultivations";
import CultivationCreate from "@/pages/Cultivations/create";
import AreasMaps from "@/pages/AreaMaps";
import AreaMapsCreate from "@/pages/AreaMaps/create";
import UserCreate from "@/pages/Users/create";
import CultivationEdit from "@/pages/Cultivations/edit";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<AuthenticatedLayout />}>
          <Route path="/maps" element={<Maps />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />
          <Route path="/users/view/:id" element={<UserView />} />

          {/* Plantações */}
          <Route path="/plantations" element={<Plantations />} />
          <Route path="/plantations/create" element={<PlantationCreate />} />

          {/* Cultivos */}
          <Route path="/cultivations" element={<Cultivations />} />
          <Route path="/cultivations/create" element={<CultivationCreate />} />
          <Route path="/cultivations/edit/:id" element={<CultivationEdit />} />

          {/* mapas */}
          <Route path="/areas-map" element={<AreasMaps />} />
          <Route path="/areasMap/create" element={<AreaMapsCreate />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}