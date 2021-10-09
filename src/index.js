import 'normalize.css';
import "./main.scss";
import "./components/scroll"
import videoSlider from "./components/videoSlider";
import Player from "./components/videoMainPlayer";
import comparison from "./components/comparison";
import ticketCount from "./components/ticketCount";
import mobileMenu from "./components/mobileMenu";
import datePicker from "./components/datePicker";
import timePicker from "./components/timePicker";
import modCount from "./components/modCount";
import exploreStyle from "./components/exploreStyle";
import videoControlsStyle from "./components/videoPlayer";
import modal from "./components/modal";
import rippleEffect from "./components/ripple";
import welcomeSlider from "./components/welcomeSlider";
import validation from "./components/validation";

videoControlsStyle();
modal();
rippleEffect();
exploreStyle();
modCount();
datePicker();
timePicker();
mobileMenu();
welcomeSlider();
comparison();
videoSlider();
new Player();
ticketCount();
validation();

(() => {
 const iData = Array.from(document.getElementsByClassName('video-content-videogallery-player'));
 const controlVideo = Array.from(document.getElementsByClassName('glide__arrows'))[1]
 const wrap = Array.from(document.getElementsByClassName('iframe-wrapper'))

 controlVideo.addEventListener('click', () => {
   stopVideo(null)
 })

 const stopVideo = (PlaySrc) => {
   iData.forEach((ele, id) => {
     ele.contentWindow.postMessage(
     '{"event":"command","func":"pauseVideo","args":""}',
     '*');
   })
 }
})()




