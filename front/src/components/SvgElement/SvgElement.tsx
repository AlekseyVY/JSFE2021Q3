import { useState } from 'react';
import playOnClick from 'src/utils/playOnClick';
import { FilterElementWrapper } from './SvgElement.style';
import { TActive } from './SvgElement.d';

const SvgElement = (Component: JSX.Element) => {
  const [active, setActive] = useState<TActive>(false);
  const clickHandler = () => {
    playOnClick(active);
    setActive(!active);
  };
  return (
    <FilterElementWrapper Fill={active} onClick={() => clickHandler()}>
      {Component}
    </FilterElementWrapper>
  );
};

export default SvgElement;
