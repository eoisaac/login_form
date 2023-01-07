import { BrowserRouter } from 'react-router-dom'
import { AuthenticationContextProvider } from './contexts/AuthenticationContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/main.css'

export const App = () => {
  return (
    <div
      className="flex min-h-screen max-w-[100vw] overflow-y-auto 
  bg-neutral-100"
    >
      <BrowserRouter>
        <AuthenticationContextProvider>
          <AppRoutes />
        </AuthenticationContextProvider>
      </BrowserRouter>
    </div>
  )
}
