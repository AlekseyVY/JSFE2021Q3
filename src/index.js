import 'normalize.css';
import "./main.scss";
import CreateNode from './components/createNode';
import welcomeContainer from './data/welcome'
import visitingContainer from "./data/visiting";
import exploreContainer from "./data/explore";
import videoContainer from "./data/video";
import galleryContainer from "./data/gallery";


const data = [welcomeContainer, visitingContainer, exploreContainer, videoContainer, galleryContainer]
;

(() => {
  const rootNode = document.getElementById('root');
  data.map((ele) => CreateNode(ele, rootNode))
})();


