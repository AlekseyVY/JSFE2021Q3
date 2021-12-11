import { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/hooks/hook';
import { setFilter } from 'src/stores/reducers/filterReducer';
import {
  Arrow, Container, Item, OptionContainer, Separator,
} from './CustomSelect.style';

interface IProps {
  state :string;
}
const CustomSelect = ({ state }: IProps) => {
  const [value, setValue] = useState(state);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setValue(state);
  }, [state]);
  const dispatch = useAppDispatch();
  const clickHandler = (data: string, name: string) => {
    setValue(data);
    dispatch(setFilter({ category: 'sort', name }));
    setIsOpen(!isOpen);
  };
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {value}
      {isOpen
            && (
            <OptionContainer>
              <Item onClick={() => clickHandler('Alphabet sort', 'alphabet')}>
                Alphabet sort
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('Alphabet sort (reverse)', 'alphabetReverse')}>
                Alphabet sort (reverse)
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('By amount (increase)', 'amountIncrease')}>
                By amount (increase)
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('By amount (decrease)', 'amountDecrease')}>
                By amount (decrease)
              </Item>
            </OptionContainer>
            )}
      <Arrow width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2" />
      </Arrow>
    </Container>
  );
};

export default CustomSelect;
