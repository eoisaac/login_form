import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import './styles/main.css'

export const App = () => {
  return (
    <div className="bg-b-100 flex min-h-screen max-w-[100vw] overflow-y-auto">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
