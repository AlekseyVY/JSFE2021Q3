import 'normalize.css';
import "./main.scss";
import videoSlider from "./components/videoSlider";
import Player from "./components/videoMainPlayer";
import injectPlayer from "./components/injectPlayer";
import comparison from "./components/comparison";
import ticketCount from "./components/ticketCount";
import {stat} from "copy-webpack-plugin/dist/utils/promisify";
const footerContainer = await import(/* webpackChunkName: "footerContainer" */ "./data/footer");
const mobileMenu = await import(/* webpackChunkName: "mobileMenu" */ "./components/mobileMenu");
const cons = await import(/* webpackChunkName: "console" */ "./components/console");
const datePicker = await import(/* webpackChunkName: "datePicker" */ "./components/datePicker");
const timePicker = await import(/* webpackChunkName: "timePicker" */ "./components/timePicker");
const modCount = await import(/* webpackChunkName: "modalCounter" */ "./components/modCount");
const ticketCounter = await import(/* webpackChunkName: "ticketCounter" */ "./components/ticketCounter");
const exploreStyle = await import(/* webpackChunkName: "exploreStyle" */ "./components/exploreStyle");
const exploreContainer = await import(/* webpackChunkName: "exploreContainer" */ "./data/explore");
const CreateNode = await import(/* webpackChunkName: "createNode" */ './components/createNode');
const welcomeContainer = await import(/* webpackChunkName: "welcomeContainer" */ './data/welcome/welcome');
const visitingContainer = await import(/* webpackChunkName: "visitingContainer" */ "./data/visiting");
const videoContainer = await import(/* webpackChunkName: "videoContainer" */ "./data/video");
const galleryContainer = await import(/* webpackChunkName: "galleryContainer" */ "./data/gallery");
const ticketContainer = await import(/* webpackChunkName: "ticketContainer" */ "./data/tickets");
const parallaxContainer = await import(/* webpackChunkName: "parallaxContainer" */ "./data/parallax");
const contactsContainer = await import(/* webpackChunkName: "contactsContainer" */ "./data/contacts");
const buyTicketContainer = await import(/* webpackChunkName: "buyTicketContainer" */ "./data/buyTicket");
const videoControlsStyle = await import(/* webpackChunkName: "videoControlsStyle" */ "./components/videoPlayer");
const modal = await import(/* webpackChunkName: "modal" */ "./components/modal");
const rippleEffect = await import(/* webpackChunkName: "ripple" */ "./components/ripple");
const navigation = await import(/* webpackChunkName: "navigation" */ "./data/welcome/nav");
const welcomeSlider = await import(/* webpackChunkName: "welcomeSlider" */ "./components/welcomeSlider");




const data = [
  welcomeContainer.default,
  visitingContainer.default,
  exploreContainer.default,
  videoContainer.default,
  galleryContainer.default,
  ticketContainer.default,
  parallaxContainer.default,
  contactsContainer.default,
  buyTicketContainer.default
  ];




 (() => {
  const rootNode = document.getElementById('root');
  const header = document.createElement('header');
  rootNode.appendChild(header);
  CreateNode.default(navigation.default, header);
  const main = document.createElement('main');

  rootNode.appendChild(main);
  CreateNode.default(footerContainer.default, rootNode);
  data.map((ele) => CreateNode.default(ele, main));
   videoControlsStyle.default();
   modal.default();
   rippleEffect.default();
   exploreStyle.default();
   ticketCounter.default();
   modCount.default();
   datePicker.default();
   timePicker.default();
   mobileMenu.default();
   welcomeSlider.default();
   injectPlayer();
   comparison();
   videoSlider();
   new Player();
   ticketCount();




   const iData = Array.from(document.getElementsByClassName('video-content-videogallery-player'));
   const controlVideo = Array.from(document.getElementsByClassName('glide__arrows'))[1]
   const wrap = Array.from(document.getElementsByClassName('iframe-wrapper'))

   controlVideo.addEventListener('click', () => {
       stopVideo(null)
     })

   const stateObj = {}
   wrap.forEach((ele) => {
     stateObj[ele.getElementsByTagName('iframe')[0].src] = false;
     ele.addEventListener('click', (e) => {
       const PlaySrc = e.currentTarget.getElementsByTagName('iframe')[0].src
       stopVideo(PlaySrc)
       if(stateObj[PlaySrc]) {
         e.currentTarget.getElementsByTagName('iframe')[0].contentWindow.postMessage(
           '{"event":"command","func":"pauseVideo","args":""}',
           '*');
         stateObj[PlaySrc] = false;
       } else {
         e.currentTarget.getElementsByTagName('iframe')[0].contentWindow.postMessage(
           '{"event":"command","func":"playVideo","args":""}',
           '*');
         stateObj[PlaySrc] = true;
       }
     })
   })

   const stopVideo = (PlaySrc) => {
     iData.forEach((ele, id) => {
       if(PlaySrc !== ele.src) {
         ele.contentWindow.postMessage(
           '{"event":"command","func":"pauseVideo","args":""}',
           '*');
       }
     })
   }
})();
