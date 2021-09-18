import 'normalize.css';
import "./main.scss";
import CreateNode from './components/createNode';
import welcomeContainer from './data/welcome'


const data = [welcomeContainer]
;

(() => {
  const rootNode = document.getElementById('root');
  data.map((ele) => CreateNode(ele, rootNode))
})();


