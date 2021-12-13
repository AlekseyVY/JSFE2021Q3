import { IProps } from '../components/ToyCard/ToyCard.d';

const userSearch = (data: IProps[], search: string): IProps[] => {
  if (!search.length) return data;
  return data.filter((ele) => {
    const calculated = ele.name.toLowerCase();
    if (calculated.includes(search)) {
      return ele;
    }
    return false;
  });
};

export default userSearch;
