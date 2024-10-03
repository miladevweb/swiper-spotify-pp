import { data } from './data'
import { useSwiper } from './hooks/useSwiper'

function App() {
  const [swiperRef] = useSwiper()

  return (
    <>
      <h1 className="text-[#1ed760] text-6xl font-bold -translate-y-5">Swiperfy</h1>
      <swiper-container
        ref={swiperRef}
        init="false"
      >
        {data.map((item, index) => (
          <swiper-slide key={index}>
            <section
              className="grid grid-rows-[74%_30%] content-between p-4 rounded-lg bg-[#181818] hover:bg-[#232323] transition-colors duration-300 size-full text-white cursor-pointer relative"
              id="container"
            >
              {/* Thumbnail */}
              <img
                src={item.url}
                alt={item.name}
                className="size-full object-cover rounded-md"
              />

              {/* Description */}
              <div className="grid grid-cols-1 mt-1">
                <h3 className="font-medium -mb-2">{item.title}</h3>
                <span className="text-sm leading-4 opacity-70">{item.description.slice(0, 45)} ....</span>
              </div>

              {/* Player */}
              <div
                className="absolute rounded-full bg-[#1ed760] size-11 grid place-items-center hover:scale-110 transition-all duration-500 ease-in-out opacity-0"
                id="player"
              >
                <Play />
              </div>
            </section>
          </swiper-slide>
        ))}
      </swiper-container>

      {/* <div className="grid grid-cols-2 place-items-center mx-auto size-60 ">
        <prev-el class="bg-red-500 size-20 grid place-items-center rounded-full">
          <Prev />
        </prev-el>

        <next-el class="bg-emerald-500 size-20 grid place-items-center rounded-full">
          <Next />
        </next-el>
      </div> */}
    </>
  )
}

export default App

export const Prev = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="w-10"
    >
      <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
    </svg>
  )
}

export const Next = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="w-10"
    >
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    </svg>
  )
}

export const Play = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="w-6 text-black"
    >
      <path d="M96 52v408l320-204L96 52z"></path>
    </svg>
  )
}
