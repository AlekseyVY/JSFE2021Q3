import Glide from "@glidejs/glide";
import video from "../data/video";
import cons from "./console";




const videoSlider = () => {
  const videoSlider = new Glide('.glide2',
    {
      type: 'carousel',
      focusAt: 'center',
      perView: 3
    })
  videoSlider.on('mount.before', (e) => {

    })
  videoSlider.mount();
}

export default videoSlider;