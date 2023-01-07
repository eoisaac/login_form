import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'
import { Welcome } from '../pages/Welcome'

export const AppRoutes = () => {
  const { authenticated } = useContext(AuthenticationContext)

  return (
    <Routes>
      {authenticated && <Route path="/home" element={<Home />} />}

      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
