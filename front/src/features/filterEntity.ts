import { IProps } from 'src/components/ToyCard/ToyCard.d';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/hook';
import { IFilters } from 'src/types/globals';
import { rangeFilter, sortFilter, valueFilter } from 'src/utils/filters';
import { setFiltered } from 'src/stores/reducers/fileredToysReducer';

const filterEntity = () => {
  const [filters, setFilters] = useState<IFilters>();
  const filter = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();
  let dataArr = useAppSelector((state) => state.toys);
  if (filters && dataArr) {
    Object.entries(filters.value).forEach((ele) => {
      const tmp: IProps[] = [];
      Object.entries(ele[1]).forEach((item) => {
        if (item[1] === true && dataArr) {
          tmp.push(...valueFilter(dataArr, item[0], ele[0]));
        }
      });
      if (ele[0] === 'favorite' && ele[1] === true) {
        tmp.push(...valueFilter(dataArr, true, ele[0]));
      }
      if (tmp.length) dataArr = tmp;
    });
    Object.entries(filters.range).forEach((ele) => {
      const tmp: IProps[] = [];
      tmp.push(...rangeFilter(dataArr, ele[0], ele[1].from, ele[1].to));
      if (tmp.length) dataArr = tmp;
    });
    Object.entries(filters.sort).forEach((ele) => {
      const tmp: IProps[] = [];
      if (ele[1]) {
        tmp.push(...sortFilter(dataArr, ele[0]));
      }
      if (tmp.length) dataArr = tmp;
    });
  }
  dispatch(setFiltered(dataArr));
  useEffect(() => {
    setFilters(filter);
  }, [filter]);
};

export default filterEntity;
