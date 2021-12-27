import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Option } from '../../assets/option.svg';
import {
  BackgroundStyle,
  Container, DragAreaContainer,
  DragContainer, LightsStyle, MainContainer,
  OptionsContainer, ToyImg,
  ToysContainer,
  TreeContainer, TreeStyle,
  TreeToyWrapper,
} from './Option.style';
import OptionSelect from '../OptionSelect/OptionSelect';
import { useAppSelector } from '../../hooks/hook';
import urlGenerator from '../../utils/urlGenerator';
import TreeToy from '../TreeToy/TreeToy';
import { lights } from '../../providers/lights';

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
  const [light, setLight] = useState(false);
  const options = useAppSelector((state) => state.options);
  const store = useAppSelector((state) => state.toys);
  const [dragToys, setDragToys] = useState(() => {
    const data = store.filter((ele) => ele.favorite);
    if (data.length > 0) return data;
    return store.slice(0, 20);
  });
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  const amountCb = (id: number, type: boolean) => {
    const data = dragToys.map((ele) => {
      let clone = { ...ele };
      if (clone.num === String(id)) {
        if (type) {
          clone.amount = String(Number(ele.amount) + 1);
        } else {
          clone.amount = String(Number(ele.amount) - 1);
        }
      }
      return clone;
    });
    setDragToys(data);
  };

  useEffect(() => {
    setBg(urlGenerator(options.bg, true));
    setTree(urlGenerator(options.tree, false));
    setLight(options.lights);
  }, [options]);
  const optionsHandler = () => {
    setIsActive(!isActive);
  };
  const treeRef = useRef<HTMLAreaElement>(null);
  const onDrop = (e: React.DragEvent<HTMLAreaElement>) => {
    e.preventDefault();
    const treeArea = treeRef.current?.getBoundingClientRect();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    if (treeArea) {
      const newArr = [...toys.filter((ele) => ele.id !== data.id), {
        num: data.name,
        id: data.id,
        x: ((e.pageX - treeArea.left - 25)),
        y: ((e.pageY - treeArea.top - 25)),
      }];
      setToys(newArr);
    }
    if (!data.tree) amountCb(data.name, false);
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = e.target as HTMLDivElement;
    amountCb(Number(element.className.split(' ')[2]), true);
    const calculated = toys.filter((ele) => {
      if (ele.id !== element.id) return ele;
      return false;
    });
    setToys(calculated);
  };
  return (
    <MainContainer>
      <Container>
        <Option onClick={() => optionsHandler()} />
      </Container>
      { isActive && <OptionsContainer><OptionSelect /></OptionsContainer> }
      <TreeContainer>
        <div>
          {toys.map((ele) => (
            <TreeToyWrapper
              draggable
              onDragEnd={(e) => dragEnd(e)}
              onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify({ name: ele.num, id: ele.id, tree: true }))}
              key={`${ele.num}_${ele.x}_${ele.y}`}
              x={ele.x}
              y={ele.y}
            >
              <ToyImg className={ele.num} id={ele.id} src={`./assets/toys/${ele.num}.webp`} alt={'tree toy'} />
            </TreeToyWrapper>
          ))}
        </div>
        {light && (
        <div>
          {lights.map((ele) => (
            <LightsStyle
              color={
              options.color === 'mix'
                ? colors[Math.floor(Math.random() * colors.length)]
                : options.color
            }
              key={`${ele.x}_${ele.y}`}
              x={ele.x}
              y={ele.y}
            />
          ))}
        </div>
        )}
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
        {dragToys.map((ele) => (
          <div key={ele.num}>
            {TreeToy(ele)}
          </div>
        ))}
      </ToysContainer>
      <BackgroundStyle url={bg} />
    </MainContainer>
  );
};

export default Options;
