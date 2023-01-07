import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <main className="flex min-h-screen max-w-[100vw] overflow-y-auto">
      <Outlet />
    </main>
  )
}
