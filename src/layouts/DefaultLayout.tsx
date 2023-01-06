import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen max-w-[100vw] overflow-y-auto">
      <Outlet />
    </div>
  )
}
