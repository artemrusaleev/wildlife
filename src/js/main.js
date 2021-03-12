document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider__list")
  const arrow = document.querySelectorAll(".slider__arrow a")
  const maxSlide = slides.length
  const burgerButton = document.querySelector('#burger__icon')
  const headerMenu = document.querySelector('.header__nav')
  const toTop = document.getElementById('toTop');
  let currentSlide = 0
  arrow.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault()
      console.log(e.target)
      if (e.target.parentElement.classList.contains("arrow__next")) {
        if (currentSlide === maxSlide - 1) {
          slides[currentSlide].classList.remove("active")
          currentSlide = 0
          slides[currentSlide].classList.add("active")
          return currentSlide
        }
        slides[currentSlide].classList.remove("active")
        currentSlide += 1
        slides[currentSlide].classList.add("active")
        return currentSlide
      } else {
        if (currentSlide === 0) {
          slides[currentSlide].classList.remove("active")
          currentSlide = maxSlide - 1
          slides[currentSlide].classList.add("active")
          return currentSlide
        }
        slides[currentSlide].classList.remove("active")
        currentSlide -= 1
        slides[currentSlide].classList.add("active")
        return currentSlide
      }
    })
  })
  burgerButton.addEventListener('click',(e)=>{
    e.preventDefault();
    burgerButton.classList.toggle('open')
    headerMenu.classList.toggle('burger__open')
    document.querySelector('.header').classList.toggle('before')
  })
  toTop.addEventListener('click',(e)=>{
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
})
document.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let parentScroll = document.body.scrollHeight - document.body.clientHeight;
    let toTop = document.getElementById('toTop')
    if (Math.round((scroll / parentScroll) * 100) > 30) {
        toTop.classList.add('show')
    } else {
        toTop.classList.remove('show')
    }
});
