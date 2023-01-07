import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthenticationContextType {
  authenticated: boolean
  login: (userEmail: string, userPassword: string) => void
  logout: () => void
}

interface AuthenticationContextProviderProps {
  children: ReactNode
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextType,
)

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false)

  const navigate = useNavigate()

  const login = (userEmail: string, userPassword: string) => {
    if (userEmail === 'email@email.com' && userPassword === 'email@email.com') {
      setAuthenticated(true)
      navigate('/')
    }
  }

  const logout = () => {}

  useEffect(() => {
    console.log(authenticated)
  }, [authenticated])

  return (
    <AuthenticationContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
