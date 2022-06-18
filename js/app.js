window.onload = function (){

			/*AOS*/
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false){
				let imgHTML = document.querySelectorAll('.img');
				let prevBtn = document.querySelectorAll('.swiper-button-prev')
				let nextBtn = document.querySelectorAll('.swiper-button-next')

				for (prev of prevBtn){
					prev.style.display = "none"
				}

				for (next of nextBtn) {
					next.style.display = "none"
				}

				for (img of imgHTML){
					VanillaTilt.init(img, {
						max: 10,
						speed: 700,
						transition: true
					});
				}
			}
			/*AOS-END*/
			
			/*GSAP*/
			const tl = gsap.timeline({defaults: {ease: "power1.out"}})
			tl.to('.slider', {y:"-100%", duration: 1.25, delay: 1.5});
			tl.to(".preloader", {y:"-100%", duration: 1}, '-=1');
			//tl.fromTo(".intro", {opacity:0}, {opacity:1, duration:2})
			/*GSAP-END*/

      let introAnimation = document.getElementById('intro');
			let navAnimation = document.getElementById('navbar');
			let bottomButtonAnimation = document.getElementById('bottom-button');
			let upButtonAnimation = document.getElementById('up-button');

			navAnimation.classList.add('js-enter');
			introAnimation.classList.add('js-enter');
			bottomButtonAnimation.classList.add('js-enter');
			upButtonAnimation.classList.add('js-enter');
			/*HAMBURGER*/
			let open = document.getElementById('open');
			let close = document.getElementById('close');
			let mnav = document.getElementById('mnav');
			let fader = document.getElementById('fader');
			let body = document.getElementById('SVN');
			let barsOpen = Array.from(open.getElementsByTagName('div'));
			let barsClose = Array.from(close.getElementsByTagName('div'));
			let barsArr = barsOpen.concat(barsClose);
			function hamburgerMenu (){
				for (let bar of barsArr){
					bar.classList.toggle('clicked')
				}
				// body.classList.toggle('no-scroll');
				mnav.classList.toggle('mnav');
				fader.classList.toggle('active');
				close.classList.toggle('active');
				open.classList.toggle('active');
			}
			open.addEventListener('click', hamburgerMenu);
			close.addEventListener('click', hamburgerMenu);

			fader.addEventListener('click', function(){
				for (let bar of barsArr){
					bar.classList.remove('clicked')
				}
				// body.classList.remove('no-scroll');
				mnav.classList.remove('mnav');
				fader.classList.remove('active');
				close.classList.remove('active');
				open.classList.remove('active');
			})
			
			/*HAMBURGER-END*/


			/*SMOOTH-SCROLL*/
			// bottomButtonAnimation.addEventListener('click', function(e) {
			// 	e.preventDefault();

			// 			let href = this.getAttribute('href').substring(1);

			// 			const scrollTarget = document.getElementById(href);

			// 			const topOffset = document.querySelector('.scrollby').offsetHeight;
			// 			// const topOffset = 0; // если не нужен отступ сверху 
			// 			const elementPosition = scrollTarget.getBoundingClientRect().top;
			// 			const offsetPosition = elementPosition;

			// 			window.scrollBy({
			// 					top: offsetPosition,
			// 					behavior: 'smooth'
			// 			});
			// 	});

				document.querySelectorAll('a[href^="#"]').forEach(link => {
					link.addEventListener('click', function(e) {
						e.preventDefault();
		
								let href = this.getAttribute('href').substring(1);
		
								const scrollTarget = document.getElementById(href);
		
								const topOffset = document.querySelector('.scrollby').offsetHeight;
								// const topOffset = 0; // если не нужен отступ сверху 
								const elementPosition = scrollTarget.getBoundingClientRect().top;
								const offsetPosition = elementPosition;
		
								window.scrollBy({
										top: offsetPosition,
										behavior: 'smooth'
								});
						});
				})



			// 	$(function(){

			// 		// if we have anchor on the url (calling from other page)
			// 		if(window.location.hash){
			// 				// smooth scroll to the anchor id
			// 				let href = window.location.hash.substring(1);
			
			// 				const scrollTarget = document.getElementById(href);
			
			// 				const topOffset = document.querySelector('.scrollby').offsetHeight;
			// 						// const topOffset = 0; // если не нужен отступ сверху 
			// 				const elementPosition = scrollTarget.getBoundingClientRect().top;
			// 				const offsetPosition = elementPosition - 2 * topOffset;
							
			// 				setTimeout(function() {
			// 						$('html,body').animate({
			// 						scrollTop: offsetPosition
			// 						},1000,'swing');
			// 				}, 1500);
			// 		} 
			// });
			
			// document.querySelectorAll('a[href^="#"]').forEach(link => {

			// 	link.addEventListener('click', function(e) {
			// 			e.preventDefault();

			// 			let href = this.getAttribute('href').substring(1);

			// 			const scrollTarget = document.getElementById(href);

			// 			const topOffset = document.querySelector('.scrollby').offsetHeight;
			// 			// const topOffset = 0; // если не нужен отступ сверху 
			// 			const elementPosition = scrollTarget.getBoundingClientRect().top;
			// 			const offsetPosition = elementPosition - topOffset;

			// 			window.scrollBy({
			// 					top: offsetPosition,
			// 					behavior: 'smooth'
			// 			});
			// 	});
			// });
			/*SMOOTH-SCROLL-END*/
				
				
			/*DROPDOWN*/
			/*for (let i = 0; i < ulList.length; i++) {
				if (ulList[i].classList.contains('menu-item-has-children')){ 
					ulList[i].addEventListener("click", function () {
						ulList[i].classList.add("active");
						ulList[i].parentNode.classList.add("disable");
						button.classList.remove("disable");
					})
				}
			}*/
				
			/*button.addEventListener("click", function (){
				let last = activeNav[activeNav.length-1];
				for (let i = 0; i < ulList.length; i++) {
					if (activeNav.length === 0){
						button.classList.add("disable");
					}else{
						last.classList.remove("active");
						last.parentNode.classList.remove("disable");
					}
				} 
				})*/
				/*DROPDOWN-END*/



      /*
      let perspectiveHTML = document.querySelectorAll('.perspective');
      let preserveHTML = document.querySelectorAll('.preserve');
      let titleHTML = document.querySelectorAll('.title');

      for (let perspective of perspectiveHTML){
        perspective.addEventListener('mousemove', (e) => {
          console.log(e.pageX, e.pageY)
          let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
          let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
          for (let preserve of preserveHTML){
            preserve.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
          }
        });
      }
        
      for (let perspective of perspectiveHTML){
        //Moving animation event
        perspective.addEventListener('mousemove', (e) => {
        //console.log(e.pageX, e.pageY)
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        for (let preserve of preserveHTML){
          preserve.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
      });
      }
      
      for (let perspective of perspectiveHTML){
        //Animate In
        perspective.addEventListener('mouseenter', e =>{
        for (let preserve of preserveHTML){
          preser ve.style.transition = 'none'
        } 
        //Popout
        for (let title of titleHTML){
          title.style.transform = 'translateZ(50px)';
        }
      });
      }

      for (let perspective of perspectiveHTML){
        //Animate Out
        perspective.addEventListener('mouseleave', e => {
        for (let preserve of preserveHTML){
          preserve.style.transition = 'all 0.5s ease'
          preserve.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
        //Popback
        for (let title of titleHTML){
          title.style.transform = 'translateZ(0px)';
        }
      });
      }*/
      /*SLIDER*/

				/*
				let slider = document.querySelector('.slider');
				let innerSlider = document.querySelector('.slider-inner');

				let pressed = false;
				let startx;
				let x;

				slider.addEventListener('mousedown', (e)=>{
					pressed = true;
					startx = e.offsetX - innerSlider.offsetLeft;
					slider.style.cursor = 'grabbing'
				});
				slider.addEventListener('mouseenter', (e)=>{
					slider.style.cursor = 'grab'
				});

				slider.addEventListener('mouseup', (e)=>{
					slider.style.cursor = 'grab'
				});
				window.addEventListener('mouseup', (e)=>{
					pressed = false;
				});

				slider.addEventListener('mousemove', (e)=>{
					if (!pressed) return;
					e.preventDefault();

					x = e.offsetX;
					innerSlider.style.left = `${x - startx}px`
					checkboundary();
				})

				function checkboundary(){
					let outer = slider.getBoundingClientRect();
					let inner = innerSlider.getBoundingClientRect();

					if (parseInt(innerSlider.style.left) > 0){
						innerSlider.style.left = '0px';
					}else if(inner.right < outer.right){
						innerSlider.style.left = `-${inner.width - outer.width}px`
					}
				}*/
      /*SLIDER-END*/

				/*
			const slider = document.querySelector('.slider-container'),
			slides = Array.from(document.querySelectorAll('.slide'))

			let isDragging = false,
				startPos = 0,
				currentTranslate = 0,
				prevTranslate = 0,
				animationID = 0,
				currentIndex = 0

				slides.forEach ((slide, index) => {
					const slideImage = slide.querySelector('.portfolio-img')
					slideImage.addEventListener('dragstart', (e) => e.preventDefault())

					//Touch events
					slide.addEventListener('touchstart', touchStart(index))
					slide.addEventListener('touchend', touchEnd)
					slide.addEventListener('touchmove', touchMove)
					//Touch events
					slide.addEventListener('mousedown', touchStart(index))
					slide.addEventListener('mouseup', touchEnd)
					slide.addEventListener('mouseleave', touchEnd)
					slide.addEventListener('mousemove', touchMove)
				})
				//Disable contect menu
				
				window.oncontextmenu = function (event) {
					event.preventDefault()
					event.stopPropagation()
					return false
				}

				function touchStart(index){
					return function(event) {
					currentIndex = index
					startPos = getPositionX(event)
					isDragging = true

					animationID = requestAnimationFrame(animation)
					slider.classList.add('grabbing')
					}
				}

				function touchEnd() {
					isDragging = false
					cancelAnimationFrame(animationID)
					slider.classList.remove('grabbing')
				}

				function touchMove(event){
					if (isDragging){
						const currentPosition = getPositionX(event)
						currentTranslate = prevTranslate  + currentPosition - startPos
					}
				}

				function getPositionX(event) {
					return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
				}

				function animation() {
					setSliderPosition()
					if(isDragging) requestAnimationFrame(animation)
				}

				function setSliderPosition(){
					slider.style.transform = `translateX(${currentTranslate}px)`
				}*/
}