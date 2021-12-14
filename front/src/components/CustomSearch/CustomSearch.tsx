import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { clearSearch, setSearch } from '../../stores/reducers/searchReducer';
import { Container, CrossWrapper, Wrapper } from './CustomSearch.style';
import { ReactComponent as Cross } from '../../assets/cross.svg';

const CustomSearch = () => {
  const [data, setData] = useState('');
  const dto = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSearch(data));
  }, [data]);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setData(e.currentTarget.value);
  };
  return (
    <Wrapper>
      <Container value={dto} onInput={(e) => changeHandler(e)} autoComplete="off" type="text" autoFocus placeholder="search for toys" />
      <CrossWrapper>
        <Cross onClick={() => dispatch(clearSearch())} />
      </CrossWrapper>
    </Wrapper>
  );
};

export default CustomSearch;
