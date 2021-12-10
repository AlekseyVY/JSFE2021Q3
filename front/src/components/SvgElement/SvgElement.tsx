import { useState } from 'react';
import { FilterElementWrapper } from './SvgElement.style';

type TActive = boolean;

const SvgElement = (Component: JSX.Element) => {
  const [active, setActive] = useState<TActive>(false);
  return (
    <FilterElementWrapper fill={active} onClick={() => setActive(!active)}>
      {Component}
    </FilterElementWrapper>
  );
};

export default SvgElement;
