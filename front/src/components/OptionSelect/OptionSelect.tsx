import { useEffect, useState } from 'react';
import { Container, LightsButton } from './OptionSelect.style';
import OptionCard from '../OptionCard/OptionCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import urlGenerator from '../../utils/urlGenerator';
import { setColor, setLights } from '../../stores/reducers/optionsReducer';

const OptionSelect = () => {
  const [selectorBg, setBgSelector] = useState(1);
  const [selectorTree, setTreeSelecor] = useState(1);
  const select = useAppSelector((state) => state.options);
  const bgData = [1, 2, 3, 4, 5, 6, 7, 8];
  const treeData = [1, 2, 3, 4];
  const dispatch = useAppDispatch();
  useEffect(() => {
    setBgSelector(select.bg);
    setTreeSelecor(select.tree);
  }, [select]);
  return (
    <Container>
      { bgData.map((ele) => (
        <div key={`_${Math.random() * 10000000}`}>
          <OptionCard bg state={selectorBg === ele} url={urlGenerator(ele, true)} num={ele} />
        </div>
      ))}
      { treeData.map((ele) => (
        <div key={`_${Math.random() * 10000000}`}>
          <OptionCard
            bg={false}
            state={selectorTree === ele}
            url={urlGenerator(ele, false)}
            num={ele}
          />
        </div>
      ))}
      <div>
        <LightsButton role={'presentation'} onClick={() => dispatch(setLights())}>Turn on lights</LightsButton>
        <LightsButton onClick={() => dispatch(setColor('blue'))}>blue</LightsButton>
        <LightsButton onClick={() => dispatch(setColor('red'))}>red</LightsButton>
        <LightsButton onClick={() => dispatch(setColor('green'))}>green</LightsButton>
        <LightsButton onClick={() => dispatch(setColor('yellow'))}>yellow</LightsButton>
      </div>

    </Container>
  );
};

export default OptionSelect;
