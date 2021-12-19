import { Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import Header from './components/Header/Header';
import Tree from './pages/Tree/Tree';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ToysHoc from './components/ToysHoc/ToysHoc';
import assesLog from './components/assesLog';

const App = () => {
  assesLog();
  return (
    <>
      <Snowfall />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="toys" element={<ToysHoc />} />
        <Route path="tree" element={<Tree />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
