import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthenticationContextType {
  authenticated: boolean
  signUp: (
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
  ) => void
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

  const signUp = (
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
  ) => {
    if (userEmail && userPassword === userConfirmPassword) {
      login(userEmail, userPassword)
    }
  }

  const login = (userEmail: string, userPassword: string) => {
    if (userEmail === 'email@email.com' && userPassword === 'email@email.com') {
      setAuthenticated(true)
      navigate('/')
    }
  }

  const logout = () => {
    setAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthenticationContext.Provider
      value={{ authenticated, signUp, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
