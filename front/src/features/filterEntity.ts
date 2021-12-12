import { useState, useEffect } from 'react';
import { IProps } from 'src/components/ToyCard/ToyCard.d';
import { useAppDispatch, useAppSelector } from 'src/hooks/hook';
import { setFiltered } from 'src/stores/reducers/toysReducer';
import { IFilters } from 'src/types/globals';
import data from '../providers/data';

const filterEntity = () => {
  const [filters, setFilters] = useState<IFilters>();
  const filter = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const valueFilter = (array: IProps[], value: string | boolean, type: string) => array.filter(
    (ele) => ele[type] === value,
  );

  let dataArr = data;
  if (filters && dataArr) {
    Object.entries(filters.value).forEach((ele) => {
      const tmp: any = [];
      console.log(ele);
      Object.entries(ele[1]).forEach((item) => {
        if (item[1] === true && dataArr) {
          tmp.push(...valueFilter(dataArr, item[0], ele[0]));
        }
      });
      if (ele[0] === 'favorite' && ele[1] === true) tmp.push(...valueFilter(dataArr, true, ele[0]));
      if (tmp.length > 0) dataArr = tmp;
    });
  }
  console.log(dataArr);
  dispatch(setFiltered(dataArr));

  /**
   * {
    num: '1',
    name: 'large ball with paint',
    count: '2',
    year: '1960',
    shape: 'ball',
    color: 'yellow',
    size: 'large',
    favorite: false,
  },
   */

  useEffect(() => {
    setFilters(filter);
  }, [filter]);
};

export default filterEntity;
