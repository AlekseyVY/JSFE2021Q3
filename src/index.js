import 'normalize.css';
import "./main.scss";
import CreateNode from './components/createNode';
import welcomeContainer from './data/welcome/welcome'
import visitingContainer from "./data/visiting";
import exploreContainer from "./data/explore";
import videoContainer from "./data/video";
import galleryContainer from "./data/gallery";
import ticketContainer from "./data/tickets";
import parallaxContainer from "./data/parallax";
import contactsContainer from "./data/contacts";
import footerContainer from "./data/footer";
import videoControlsStyle from "./components/videoPlayer";
import buyTicketContainer from "./data/buyTicket";
import modal from "./components/modal";


const data = [
  welcomeContainer,
  visitingContainer,
  exploreContainer,
  videoContainer,
  galleryContainer,
  ticketContainer,
  parallaxContainer,
  contactsContainer,
  footerContainer,
  buyTicketContainer
  ];

await (async () => {
  const rootNode = document.getElementById('root');
  data.map((ele) => CreateNode(ele, rootNode))
  await videoControlsStyle()
  modal();
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


