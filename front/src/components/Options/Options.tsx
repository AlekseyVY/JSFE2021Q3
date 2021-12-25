import { useEffect, useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import { BackgroundStyle, Container, OptionsContainer } from './Option.style';
import OptionSelect from '../OptionSelect/OptionSelect';
import { useAppSelector } from '../../hooks/hook';
import bgUrlGenerator from '../../utils/bgUrlGenerator';

const Options = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bg, setBg] = useState('');
  const options = useAppSelector((state) => state.options);
  useEffect(() => {
    setBg(bgUrlGenerator(options.bg));
  }, [options]);
  const optionsHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Container>
        <Option onClick={() => optionsHandler()} />
      </Container>
      { isActive && <OptionsContainer><OptionSelect /></OptionsContainer> }
      <BackgroundStyle url={bg} />
    </>
  );
};

export default Options;
