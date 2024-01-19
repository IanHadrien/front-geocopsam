import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Maps from "../pages/Maps/Index";
import AuthenticatedLayout from "../layouts/AuthenticatedLayates";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<AuthenticatedLayout />}>
          <Route path="/maps" element={<Maps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}