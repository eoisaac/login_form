import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'

export const AppRoutes = () => {
  const { authenticated } = useContext(AuthenticationContext)
  console.log(authenticated)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
