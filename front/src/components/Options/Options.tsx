import { useEffect, useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import {
  BackgroundStyle, Container, OptionsContainer, TreeContainer, TreeStyle,
} from './Option.style';
import OptionSelect from '../OptionSelect/OptionSelect';
import { useAppSelector } from '../../hooks/hook';
import urlGenerator from '../../utils/urlGenerator';

const Options = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bg, setBg] = useState('');
  const [tree, setTree] = useState('');
  const options = useAppSelector((state) => state.options);
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
      <BackgroundStyle url={bg} />
    </>
  );
};

export default Options;
