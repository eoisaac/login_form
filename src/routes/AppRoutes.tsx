import { Route, Routes } from 'react-router-dom'
import { AuthenticationContextProvider } from '../contexts/AuthenticationContext'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const AppRoutes = () => {
  return (
    <AuthenticationContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthenticationContextProvider>
  )
}
