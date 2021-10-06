import 'normalize.css';
import "./main.scss";
import Glide from "@glidejs/glide";
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
  CreateNode.default(navigation.default, header)
  const main = document.createElement('main');

  rootNode.appendChild(main)
  CreateNode.default(footerContainer.default, rootNode)
  data.map((ele) => CreateNode.default(ele, main))
   videoControlsStyle.default()
   modal.default();
   rippleEffect.default();
   exploreStyle.default()
   ticketCounter.default();
   modCount.default();
   datePicker.default()
   timePicker.default()
   mobileMenu.default()
   welcomeSlider.default();


})();

// this is temporary  T_T
(() => {



  const players = document.getElementsByClassName('video-content-videogallery-player');
  const stop = () => {
    console.log(players)
    players.forEach((player) => player.stopVideo());
  }

  const buttons = document.getElementsByClassName('glide__arrow');
  buttons[2].addEventListener('click', () => {
    stop()
  })
  buttons[3].addEventListener('click', () => {
    stop()
  })
  const videoSlider = new Glide('.glide2',
    {
      type: 'carousel',
      // autoplay: 3000,
      focusAt: 'center',
      perView: 3
    })
  videoSlider.on('run.after', (e) => {
  })
  videoSlider.mount();



  // tmp ticket selection style
  const ticketTypeSelected = document.getElementsByClassName('ticket-buy-type-select');
  ticketTypeSelected[0].checked = true;
})()


