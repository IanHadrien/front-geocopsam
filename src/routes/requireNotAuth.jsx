import { Navigate, Outlet } from 'react-router-dom'

export default function RequireNotAuth() {
  const token = localStorage.getItem('@GCSAuth:token')

  return !token ? <Outlet /> : <Navigate to="/maps" />
}
