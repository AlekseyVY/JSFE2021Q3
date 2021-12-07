import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Tree from './pages/Tree/Tree';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Toys from './pages/Toys/Toys';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="toys" element={<Toys />} />
      <Route path="tree" element={<Tree />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>

);

export default App;
