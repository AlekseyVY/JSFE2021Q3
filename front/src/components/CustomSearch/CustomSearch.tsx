import { useAppDispatch } from 'src/hooks/hook';
import { setSearch } from 'src/stores/reducers/searchReducer';
import { Container } from './CustomSearch.style';

const CustomSearch = () => {
  const dispatch = useAppDispatch();
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.currentTarget.value));
  };
  return (
    <Container onInput={(e) => changeHandler(e)} type="text" autoFocus />
  );
};

export default CustomSearch;
