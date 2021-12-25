import { useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import { Container, OptionsContainer } from './Option.style';

const Options = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log('options');
  const optionsHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Container>
        <Option onClick={() => optionsHandler()} />
      </Container>
      { isActive && <OptionsContainer><h1>Options Opened!!!</h1></OptionsContainer> }
    </>
  );
};

export default Options;
