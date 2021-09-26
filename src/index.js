import 'normalize.css';
import "./main.scss";
const CreateNode = await import(/* webpackChunkName: "createNode" */ './components/createNode');
const welcomeContainer = await import(/* webpackChunkName: "welcomeContainer" */ './data/welcome/welcome');
const visitingContainer = await import(/* webpackChunkName: "visitingContainer" */ "./data/visiting");
const exploreContainer = await import(/* webpackChunkName: "exploreContainer" */ "./data/explore");
const videoContainer = await import(/* webpackChunkName: "videoContainer" */ "./data/video");
const galleryContainer = await import(/* webpackChunkName: "galleryContainer" */ "./data/gallery");
const ticketContainer = await import(/* webpackChunkName: "ticketContainer" */ "./data/tickets");
const parallaxContainer = await import(/* webpackChunkName: "parallaxContainer" */ "./data/parallax");
const contactsContainer = await import(/* webpackChunkName: "contactsContainer" */ "./data/contacts");
const footerContainer = await import(/* webpackChunkName: "footerContainer" */ "./data/footer");
const buyTicketContainer = await import(/* webpackChunkName: "buyTicketContainer" */ "./data/buyTicket");
const videoControlsStyle = await import(/* webpackChunkName: "videoControlsStyle" */ "./components/videoPlayer");
const modal = await import(/* webpackChunkName: "modal" */ "./components/modal");
const rippleEffect = await import(/* webpackChunkName: "ripple" */ "./components/ripple");


const data = [
  welcomeContainer.default,
  visitingContainer.default,
  exploreContainer.default,
  videoContainer.default,
  galleryContainer.default,
  ticketContainer.default,
  parallaxContainer.default,
  contactsContainer.default,
  footerContainer.default,
  buyTicketContainer.default
  ];



await (async () => {
  const rootNode = document.getElementById('root');
  data.map((ele) => CreateNode.default(ele, rootNode))
  await videoControlsStyle.default()
  await modal.default();
  await rippleEffect.default();

  // window.addEventListener('resize', () => {
  //   console.log(window.matchMedia('(max-width: 1440px)'))
  // });
})();



// this is temporary  T_T
await( async() => {
  // tmp welcome selector style
  const welcomeSelected = document.getElementsByClassName('hero-slider-controls-wrapper-show-element');
  welcomeSelected[0].classList.add('welcome-selector-active');
  // tmp video selector style
  const videoSelected = document.getElementsByClassName('video-content-videogallery-controls-show');
  videoSelected[0].classList.add('video-selector-active');
  // tmp ticket selection style
  const ticketTypeSelected = document.getElementsByClassName('ticket-buy-type-select');
  ticketTypeSelected[0].checked = true;
})()



