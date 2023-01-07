import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RegisteredUsers } from '../@types/app'
import { useLocalStorage } from '../hooks/useStorage'

interface AuthenticationContextType {
  authenticated: boolean
  signUp: (
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
  ) => void
  login: (userEmail: string, userPassword: string) => boolean
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

  const [registeredUsers, setRegisteredUsers] =
    useLocalStorage<RegisteredUsers>('registeredUsers', {})

  const navigate = useNavigate()

  const signUp = (
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
  ) => {
    setRegisteredUsers((prevState) => ({
      ...prevState,
      [userEmail]: {
        email: userEmail,
        password: userPassword,
      },
    }))

    setAuthenticated(true)
    navigate('/')
  }

  const login = (userEmail: string, userPassword: string) => {
    const registered = registeredUsers[userEmail]

    if (registered && registered.password === userPassword) {
      setAuthenticated(true)
      navigate('/')
    } else {
      toast.error(
        "We couldn't find an account matching the email and password ",
      )
    }
    return authenticated
  }

  const logout = () => {
    setAuthenticated(false)
    navigate('/welcome')
  }

  return (
    <AuthenticationContext.Provider
      value={{ authenticated, signUp, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
