const swiperPortfolio = new Swiper('.swiper-portfolio', {
				// Optional parameters
				loop: true,
				spaceBetween: 30,
				grabCursor: true,
				speed: 1500,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});

const swiperServices = new Swiper('.swiper-services', {
				// Optional parameters
				breakpoints: {
					// when window width is >= 320px
					1: {
						loop: true,
						slidesPerView: 1,
						spaceBetween: 30,
						speed: 1500,
					},
					// when window width is >= 480px
					1024: {
						loop: true,
						spaceBetween: 30,
						grabCursor: true,
						slidesPerView: 2,
						speed: 1500,
						
					},
					// when window width is >= 640px
					1600: {
						slidesPerView: 4,
						grabCursor: false,
						allowTouchMove: false,
						spaceBetween: 30
					}

				},
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});