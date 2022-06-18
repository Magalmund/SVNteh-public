/*PORTFOLIO*/
let portfolio = document.getElementById('portfolio');
let h2_portfolio = Array.from(portfolio.querySelectorAll('h2'));
let h3_portfolio = Array.from(portfolio.querySelectorAll('h3'));
let p_portfolio = Array.from(portfolio.querySelectorAll('p'));
let array1 = h2_portfolio.concat(h3_portfolio, p_portfolio);

for(let item of array1){
	item.setAttribute("data-aos", "fade-left");
}
/*PORTFOLIO-END*/



/*ABOUT*/
let about = document.getElementById('about');
let h2_about = Array.from(about.querySelectorAll('h2'));
let h3_about = Array.from(about.querySelectorAll('h3'));
let p_about = Array.from(about.querySelectorAll('p'));
let array2 = h2_about.concat(h3_about, p_about);

for(let item of array2){
	item.setAttribute("data-aos", "fade-right");
}

/*ABOUT-END*/

/*CONTACT*/
let contact = document.getElementById('contact');
let contact_header = contact.querySelector('.contact-header');
let contact_footer = contact.querySelector('.contact-footer');

let h2_contact = Array.from(contact_header.querySelectorAll('h2'));
let p_contact = Array.from(contact_header.querySelectorAll('p'));
let a_contact = Array.from(contact_footer.querySelectorAll('a'));
let array3 = h2_contact.concat(p_contact, a_contact);

for(let item of array3){
	item.setAttribute("data-aos", "fade-right");
}

let contact_form = contact.querySelector('.wpcf7');
let p_form = Array.from(contact_form.querySelectorAll('p'));
let footer_form = Array.from(contact.querySelectorAll('footer'));
let array4 = p_form.concat(footer_form);

for(let item of array4){
	item.setAttribute("data-aos", "fade-left");
}




/*CONTACT-END*/




AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});