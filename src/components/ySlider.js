import Glide from "@glidejs/glide";



const tSlider = () => {
  const videoSlider = new Glide('.glide3',
    {
      type: 'carousel',
      autoplay: 3000,
      gap: 0,
    })
  videoSlider.mount();
}

export default tSlider;