import { Routes, Route } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Tree from './pages/Tree/Tree';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ToysHoc from './components/ToysHoc/ToysHoc';
import assesLog from './components/assesLog';
import { useAppSelector } from './hooks/hook';

const App = () => {
  const [snow, setSnow] = useState<boolean>(false);
  assesLog();
  const option = useAppSelector((state) => state.options.snow);
  useEffect(() => {
    setSnow(option);
  }, [option]);
  return (
    <>
      <Header />
      {snow && <Snowfall />}
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
