import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
