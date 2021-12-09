import { useState } from 'react';
import {
  Arrow, Container, Item, OptionContainer, Separator,
} from './CustomSelect.style';

const CustomSelect = () => {
  const [value, setValue] = useState('Alphabet sort');
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (data: string) => {
    setValue(data);
    setIsOpen(!isOpen);
  };
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {value}
      {isOpen
            && (
            <OptionContainer>
              <Item onClick={() => clickHandler('Alphabet sort')}>
                Alphabet sort
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('Alphabet sort (reverse)')}>
                Alphabet sort (reverse)
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('By amount (increase)')}>
                By amount (increase)
              </Item>
              <Separator />
              <Item onClick={() => clickHandler('By amount (decrease)')}>
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
