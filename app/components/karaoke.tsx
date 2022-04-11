export default function Karaoke() {
  return (
    <div className="relative bg-gray-800">
      <main className="lg:relative">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="karaoke.jpg"
            alt=""
          />
        </div>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-purple-500 sm:text-5xl md:text-9xl lg:text-9xl xl:text-9xl">
              Karaoke
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
