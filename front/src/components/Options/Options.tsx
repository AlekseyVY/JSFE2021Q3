import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import {
  BackgroundStyle,
  Container, DragAreaContainer,
  DragContainer,
  OptionsContainer, ToyImg,
  ToysContainer,
  TreeContainer, TreeStyle,
  TreeToyWrapper,
} from './Option.style';
import OptionSelect from '../OptionSelect/OptionSelect';
import { useAppSelector } from '../../hooks/hook';
import urlGenerator from '../../utils/urlGenerator';
import TreeToy from '../TreeToy/TreeToy';

interface IToysCoords {
  num: string;
  id: string;
  x: number;
  y: number;
}

const Options = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bg, setBg] = useState('');
  const [tree, setTree] = useState('');
  const [toys, setToys] = useState<IToysCoords[]>([]);
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
  const treeRef = useRef<HTMLAreaElement>(null);
  const onDrop = (e: React.DragEvent<HTMLAreaElement>) => {
    e.preventDefault();
    const treeArea = treeRef.current?.getBoundingClientRect();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    console.log(data);
    if (treeArea) {
      const newArr = [...toys.filter((ele) => ele.id !== data.id), {
        num: data.name,
        id: data.id,
        x: ((e.pageX - treeArea.left - 25)),
        y: ((e.pageY - treeArea.top - 25)),
      }];
      setToys(newArr);
    }
  };
  console.log(toys);
  return (
    <>
      <Container>
        <Option onClick={() => optionsHandler()} />
      </Container>
      { isActive && <OptionsContainer><OptionSelect /></OptionsContainer> }
      <TreeContainer>
        <div>
          {toys.map((ele) => (
            <TreeToyWrapper draggable onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify({ name: ele.num, id: ele.id }))} key={`${ele.num}_${ele.x}_${ele.y}`} x={ele.x} y={ele.y}>
              <ToyImg src={`./assets/toys/${ele.num}.webp`} alt={'tree toy'} />
            </TreeToyWrapper>
          ))}
        </div>
        <DragContainer
          name="imagemap"
        >
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <DragAreaContainer
            ref={treeRef}
            onClick={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e)}
            coords="150,500, 300,0, 450,500, 150,500"
            shape="poly"
            alt={'area'}
          />
        </DragContainer>
        <TreeStyle useMap="#imagemap" src={tree} alt={'christmas tree'} />
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
