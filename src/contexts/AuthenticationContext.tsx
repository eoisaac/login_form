import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RegisteredUsers, Session } from '../@types/app'
import { useLocalStorage, useSessionStorage } from '../hooks/useStorage'

interface AuthenticationContextType {
  authenticated: boolean
  session: Session | null
  signUp: (
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
  ) => void
  login: (userEmail: string, userPassword: string, isNew?: boolean) => boolean
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
  const [session, setSession] = useSessionStorage<Session | null>(
    'session',
    null,
  )

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

    login(userEmail, userPassword, true)
  }

  const login = (userEmail: string, userPassword: string, isNew?: boolean) => {
    const registered = registeredUsers[userEmail]

    if ((registered && registered.password === userPassword) || isNew) {
      setAuthenticated(true)

      setSession({
        date: new Date(),
        user: {
          email: userEmail,
          password: userPassword,
        },
      })
      navigate('/home')
      toast.info('Welcome!')
    } else {
      toast.error("We couldn't find an account matching the email and password")
    }
    return authenticated
  }

  const logout = () => {
    setAuthenticated(false)
    setSession(null)
    toast.info('Bye!')
    navigate('/welcome')
  }

  return (
    <AuthenticationContext.Provider
      value={{ authenticated, session, signUp, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
