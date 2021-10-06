import Glide from "@glidejs/glide";



const welcomeSlider = () => {
  const glide = new Glide('.glide',
    {
      type: 'carousel',
      // autoplay: 3000,
    })
  glide.on('run.after', (e) => {
    const elem = document.getElementsByClassName('glide__slide--active')[0].children[0];
    const number = document.getElementsByClassName('hero-slider-controls-wrapper-counter-count')[0];
    console.log(elem)
    number.textContent = `0${Number(elem.id)}`;
  })
  glide.mount();
}

export default welcomeSlider;