/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-comment-textnodes */
import ToyCard from 'src/components/ToyCard/ToyCard';
import { useAppSelector } from '../../hooks/hook';

const Toys = () => {
  const value = useAppSelector((state) => state.toys);
  console.log(value);
  return (
    <div>
      {value.map((ele, idx) => (
        <div key={`a_${idx}`}>
          <ToyCard {...ele} />
        </div>
      ))}
    </div>
  );
};

export default Toys;
