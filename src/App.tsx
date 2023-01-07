import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AuthenticationContextProvider } from './contexts/AuthenticationContext'
import { AppRoutes } from './routes/AppRoutes'
import './styles/main.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthenticationContextProvider>
          <AppRoutes />
        </AuthenticationContextProvider>
      </BrowserRouter>
      <ToastContainer position="top-right" pauseOnHover={false} />
    </>
  )
}
