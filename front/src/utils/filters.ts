import { IProps } from 'src/components/ToyCard/ToyCard.d';

const valueFilter = (array: IProps[], value: string | boolean, type: string) => array.filter(
  (ele) => ele[type] === value,
);

const rangeFilter = (array: IProps[], name: string, from: number, to: number) => array.filter(
  (ele) => (ele[name] >= from && ele[name] <= to),
);

const sortFilter = (array: IProps[], name: string) => {
  if (name === 'alphabet') {
    return array.sort(
      (a, b) => a.name.localeCompare(b.name),
    );
  }
  if (name === 'alphabetReverse') {
    return array.sort(
      (a, b) => b.name.localeCompare(a.name),
    );
  }
  if (name === 'amountIncrease') {
    return array.sort(
      (a, b) => Number(a.amount) - Number(b.amount),
    );
  }
  if (name === 'amountDecrease') {
    return array.sort(
      (a, b) => Number(b.amount) - Number(a.amount),
    );
  }
  return [];
};

export { valueFilter, rangeFilter, sortFilter };
