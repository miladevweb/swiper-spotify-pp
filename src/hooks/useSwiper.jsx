import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'

export const useSwiper = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    register()
    const swiperContainer = swiperRef.current
    // Object with parameters
    const params = {
      // navigation: {
      //   enable: true,
      //   nextEl: 'next-el',
      //   prevEl: 'prev-el',
      // },
      pagination: {
        enable: true,
        clickable: true,
        dynamicBullets: true,
      },
      injectStyles: [
        `
        .swiper {
          padding: 0px 0px 50px 0px;
          mask: linear-gradient(to left, transparent, white 15%, white 85%, transparent);
        }
        `,
      ],
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },

      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      speed: 2000,
      spaceBetween: 30,
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        },

        // when window width is >= 800px
        800: {
          slidesPerView: 4,
        },

        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
        },
      },
    }

    // Assign it to swiper element
    Object.assign(swiperContainer, params)
    // initialize swiper
    swiperContainer.initialize()
  }, [])

  return [swiperRef]
}
