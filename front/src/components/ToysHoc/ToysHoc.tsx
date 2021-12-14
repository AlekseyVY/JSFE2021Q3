import filterEntity from '../../features/filterEntity';
import Toys from '../../pages/Toys/Toys';

const ToysHoc = () => {
  filterEntity();
  return (
    <Toys />
  );
};

export default ToysHoc;
