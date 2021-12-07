import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Toys from './pages/Toys/Toys';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="toys" element={<Toys />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>

);

export default App;
