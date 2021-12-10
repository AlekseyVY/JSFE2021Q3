import { useState } from 'react';
import { CheckedWrapper, ColorSelect } from './CustomCheck.style';
import { ReactComponent as Checked } from '../../assets/check.svg';

const CustomCheck = (color: string) => {
  const [active, setActive] = useState(false);
  return (
    <ColorSelect onClick={() => setActive(!active)} color={color}>
      {active && <CheckedWrapper><Checked /></CheckedWrapper>}
    </ColorSelect>
  );
};

export default CustomCheck;
