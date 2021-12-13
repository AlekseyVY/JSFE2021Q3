import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/hook';
import { setSearch } from 'src/stores/reducers/searchReducer';
import { Container } from './CustomSearch.style';

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
    <Container value={dto} onInput={(e) => changeHandler(e)} type="text" autoFocus />
  );
};

export default CustomSearch;
