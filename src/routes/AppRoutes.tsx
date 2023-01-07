import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { SignUp } from '../pages/SignUp'
import { Welcome } from '../pages/Welcome'

export const AppRoutes = () => {
  const { authenticated } = useContext(AuthenticationContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {authenticated && <Route path="/home" element={<Home />} />}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
