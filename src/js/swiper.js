import Swiper from 'swiper/swiper-bundle'

// const swiperService = new Swiper('.service__swiper', {
//   breakpoints: {
//     320: {
//       grid: {
//         fill: 'row',
//         rows: 1
//       },
//       slidesPerView: 'auto',
//       slidesPerGroup: 1,
//       spaceBetween: 16
//     },
//     480: {
//       grid: {
//         fill: 'row',
//         rows: 1
//       },
//       slidesPerView: 'auto',
//       slidesPerGroup: 1,
//       spaceBetween: 8
//     },
//     768: {
//       grid: {
//         fill: 'row',
//         rows: 1
//       },
//       slidesPerView: 'auto',
//       slidesPerGroup: 1,
//       spaceBetween: 4
//     },
//     1366: {
//       grid: {
//         fill: 'row',
//         rows: 2
//       },
//       slidesPerView: 'auto',
//       slidesPerGroup: 5,
//       spaceBetween: 0
//     }
//   }
// })

let swiperService = null
const swiperServiceCreate = () => {
  if (!swiperService) {
    swiperService = new Swiper('.service__swiper', {
      breakpoints: {
        320: {
          grid: {
            fill: 'row',
            rows: 1
          },
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 16
        },
        480: {
          grid: {
            fill: 'row',
            rows: 1
          },
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 8
        },
        768: {
          grid: {
            fill: 'row',
            rows: 1
          },
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 4
        }
      }
    })
  }
}
const swiperServiceDestroy = () => {
  if (swiperService) {
    swiperService.destroy()
    swiperService = null
  }
}
const resizeHandlerSlider = () => {
  if (document.body.clientWidth < 1366) swiperServiceCreate()
  else {
    swiperServiceDestroy()
  }
}
resizeHandlerSlider()
window.addEventListener('resize', resizeHandlerSlider)

const swiperBrands = new Swiper('.brands__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 1.25,
      slidesPerGroup: 1,
      spaceBetween: 16
    },
    480: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 8
    },
    768: {
      grid: {
        fill: 'row',
        rows: 100
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24
    },
    1366: {
      grid: {
        fill: 'row',
        rows: 100
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 32
    }
  }
})

const swiperTypes = new Swiper('.types__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 1.25,
      slidesPerGroup: 1,
      spaceBetween: 16
    },

    480: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 8
    },
    768: {
      grid: {
        fill: 'row',
        rows: 100
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24
    },
    1366: {
      grid: {
        fill: 'row',
        rows: 100
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 32
    }
  }
})

const swiperPrice = new Swiper('.price__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 16
    },
    480: {
      grid: {
        fill: 'row',
        rows: 1
      },
      slidesPerView: 1.75,
      slidesPerGroup: 1,
      spaceBetween: 8
    },
    768: {
      grid: {
        fill: 'row',
        rows: 100
      },
      slidesPerView: 1,
      slidesPerGroup: 5,
      spaceBetween: 0
    }
  }
})
