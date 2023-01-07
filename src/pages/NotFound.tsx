import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div
        className="flex h-full w-full max-w-md flex-col justify-center gap-4
      rounded-md bg-white p-4 shadow-md sm:h-auto"
      >
        <header>
          <h1 className="text-2xl font-bold text-neutral-800">
            Page not found!
          </h1>
        </header>

        <div className="flex items-center gap-4">
          <Link to="/welcome" className="text-violet-500">
            Return to start
          </Link>
        </div>
      </div>
    </section>
  )
}
