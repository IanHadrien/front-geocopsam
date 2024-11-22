import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Maps from '../pages/Maps/Index'
import AuthenticatedLayout from '../layouts/AuthenticatedLayates'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import UserEdit from '../pages/Users/edit'
import UserView from '../pages/Users/view'
import Plantations from '../pages/Plantations'
import Profile from '../pages/Profile'
import PlantationCreate from '../pages/Plantations/create'
import Cultivations from '@/pages/Cultivations'
import CultivationCreate from '@/pages/Cultivations/create'
import AreasMaps from '@/pages/AreaMaps'
import AreaMapsCreate from '@/pages/AreaMaps/create'
import UserCreate from '@/pages/Users/create'
import CultivationEdit from '@/pages/Cultivations/edit'
import AreaMapsEdit from '@/pages/AreaMaps/edit'
import PlantationEdit from '@/pages/Plantations/edit'
import AreasMapView from '@/pages/AreaMaps/view'
import RequireNotAuth from './requireNotAuth'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import NewPassword from '@/pages/Auth/NewPassword'

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireNotAuth />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>

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
          <Route path="/plantations/edit/:id" element={<PlantationEdit />} />

          {/* Cultivos */}
          <Route path="/cultivations" element={<Cultivations />} />
          <Route path="/cultivations/create" element={<CultivationCreate />} />
          <Route path="/cultivations/edit/:id" element={<CultivationEdit />} />

          {/* mapas */}
          <Route path="/areas-map" element={<AreasMaps />} />
          <Route path="/areas-map/create" element={<AreaMapsCreate />} />
          <Route path="/areas-map/edit/:id" element={<AreaMapsEdit />} />
          <Route path="/areas-map/view/:id" element={<AreasMapView />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
