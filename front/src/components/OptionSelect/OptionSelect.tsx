import { useEffect, useState } from 'react';
import { Container } from './OptionSelect.style';
import OptionCard from '../OptionCard/OptionCard';
import bgUrlGenerator from '../../utils/bgUrlGenerator';
import { useAppSelector } from '../../hooks/hook';

const OptionSelect = () => {
  const [selector, setSelector] = useState(1);
  const select = useAppSelector((state) => state.options.bg);
  const bgData = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    setSelector(select);
  }, [select]);
  return (
    <Container>
      { bgData.map((ele) => (
        <div key={`_${Math.random() * 10000000}`}>
          <OptionCard state={selector === ele} url={bgUrlGenerator(ele)} num={ele} />
        </div>
      ))}
    </Container>
  );
};

export default OptionSelect;
