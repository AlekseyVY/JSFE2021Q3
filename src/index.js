import 'normalize.css';
import "./main.scss";
import CreateNode from './components/createNode';
import welcomeContainer from './data/welcome/welcome'
import visitingContainer from "./data/visiting";
import exploreContainer from "./data/explore";
import videoContainer from "./data/video";
import galleryContainer from "./data/gallery";
import ticketContainer from "./data/tickets";


const data = [welcomeContainer, visitingContainer, exploreContainer, videoContainer, galleryContainer, ticketContainer]
;

(() => {
  const rootNode = document.getElementById('root');
  data.map((ele) => CreateNode(ele, rootNode))
})();


