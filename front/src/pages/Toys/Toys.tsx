import { useAppSelector } from '../../hooks/hook';

const Toys = () => {
  const value = useAppSelector((state) => state.toys);
  console.log(value);
  return (
    <div>Toys</div>
  );
};

export default Toys;
