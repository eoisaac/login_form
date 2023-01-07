export const Home = () => {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div
        className="flex h-full w-full max-w-md flex-col justify-center gap-4
      rounded-md bg-white p-4 shadow-md sm:h-auto"
      >
        <header>
          <h1 className="text-2xl font-bold text-neutral-800">
            Successfully logged in!
          </h1>
        </header>

        <div className="flex items-center gap-4"></div>
      </div>
    </section>
  )
}
