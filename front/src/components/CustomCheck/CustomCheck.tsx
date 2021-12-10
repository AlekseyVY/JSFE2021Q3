import { useState } from 'react';
import playOnClick from 'src/utils/playOnClick';
import { CheckedWrapper, ColorSelect } from './CustomCheck.style';
import { ReactComponent as Checked } from '../../assets/check.svg';

const CustomCheck = (color: string) => {
  const [active, setActive] = useState(false);
  const clickHandler = () => {
    playOnClick(active);
    setActive(!active);
  };
  return (
    <ColorSelect onClick={() => clickHandler()} color={color}>
      {active && <CheckedWrapper><Checked /></CheckedWrapper>}
    </ColorSelect>
  );
};

export default CustomCheck;
