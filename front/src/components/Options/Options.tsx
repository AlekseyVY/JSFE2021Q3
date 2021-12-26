import { useEffect, useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import {
  BackgroundStyle, Container, OptionsContainer, ToysContainer, TreeContainer, TreeStyle,
} from './Option.style';
import OptionSelect from '../OptionSelect/OptionSelect';
import { useAppSelector } from '../../hooks/hook';
import urlGenerator from '../../utils/urlGenerator';
import TreeToy from '../TreeToy/TreeToy';

const Options = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bg, setBg] = useState('');
  const [tree, setTree] = useState('');
  const options = useAppSelector((state) => state.options);
  const store = useAppSelector((state) => state.toys);

  const toysGenerator = () => {
    const data = store.filter((ele) => ele.favorite);
    if (data.length > 0) return data;
    return store.slice(0, 20);
  };

  useEffect(() => {
    setBg(urlGenerator(options.bg, true));
    setTree(urlGenerator(options.tree, false));
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
      <TreeContainer>
        <TreeStyle src={tree} alt={'christmas tree'} />
      </TreeContainer>
      <ToysContainer>
        {toysGenerator().map((ele) => (
          <div key={ele.num}>
            {TreeToy(ele)}
          </div>
        ))}
      </ToysContainer>
      <BackgroundStyle url={bg} />
    </>
  );
};

export default Options;
