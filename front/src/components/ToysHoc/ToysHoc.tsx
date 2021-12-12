import filterEntity from 'src/features/filterEntity';
import Toys from 'src/pages/Toys/Toys';

const ToysHoc = () => {
  filterEntity();
  return (
    <Toys />
  );
};

export default ToysHoc;
