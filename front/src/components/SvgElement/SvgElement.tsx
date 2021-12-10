import { useState } from 'react';
import { FilterElementWrapper } from './SvgElement.style';
import { TActive } from './SvgElement.d';

const SvgElement = (Component: JSX.Element) => {
  const [active, setActive] = useState<TActive>(false);
  return (
    <FilterElementWrapper Fill={active} onClick={() => setActive(!active)}>
      {Component}
    </FilterElementWrapper>
  );
};

export default SvgElement;
