import { Navigate, Outlet } from 'react-router-dom'
import TopBar from '@/components/Sidebar/TopBar'
import axios from 'axios'

export default function AuthenticatedLayout() {
  const token = localStorage.getItem('@GCSAuth:token')

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  // console.log('Authenticated', token)

  if (!token) return <Navigate to="/" />
  return (
    <div className="flex w-full bg-branco-50" style={{ marginBottom: '-8px' }}>
      <TopBar />

      <div className="flex flex-col w-full h-[100vh]">
        <main className="bg-branco-50 mt-[2.8rem] flex-grow-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
