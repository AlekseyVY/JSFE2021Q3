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
 const controlVideo = Array.from(document.getElementsByClassName('glide__arrows'))[1];
 const mainVideoSrc = document.getElementById('main-player-source');
 const mainPlayer = document.getElementsByClassName('video_player')[0];
 const leftVideo = controlVideo.children[0];
 const rightVideo = controlVideo.children[2];
 const bulletControl = controlVideo.children[1];


 let idx = 0;
 const lolObject = {
   '0': 'video2.mp4',
   '1': 'video0.mp4',
   '2': 'video4.mp4',
   '3': 'video3.mp4',
   '4': 'video1.mp4'
 }

  Array.from(bulletControl.children).forEach((ele) => {
    ele.addEventListener('click', (e) => {
      idx = Number(Array.from(e.target.id)[1]);
      mainVideoSrc.src = `./assets/video/${videoArray[idx]}`;
      mainPlayer.poster = `./assets/video/${posterArray[idx]}`
      mainPlayer.load()
    })
  })



 const videoArray = ['video2.mp4', 'video0.mp4', 'video4.mp4', 'video3.mp4', 'video1.mp4'];
 const posterArray = ['poster2.jpg', 'poster0.jpg', 'poster4.jpg', 'poster3.jpg', 'poster1.jpg'];

 rightVideo.addEventListener('click', () => {
   if(idx >= videoArray.length - 1) {
     idx = 0;
   } else {
     idx++;
   }
   mainVideoSrc.src = `./assets/video/${videoArray[idx]}`;
   mainPlayer.poster = `./assets/video/${posterArray[idx]}`
   mainPlayer.load()
 })

  leftVideo.addEventListener('click', () => {
    if(idx <= 0) {
      idx = videoArray.length - 1;
    } else {
      idx--;
    }
    mainVideoSrc.src = `./assets/video/${videoArray[idx]}`;
    mainPlayer.poster = `./assets/video/${posterArray[idx]}`
    mainPlayer.load()
  })

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




