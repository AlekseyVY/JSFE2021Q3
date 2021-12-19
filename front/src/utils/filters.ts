import { IProps } from 'src/components/ToyCard/ToyCard.d';

const valueFilter = (array: IProps[], value: string | boolean, type: string) => array.filter(
  (ele) => ele[type] === value,
);

const rangeFilter = (array: IProps[], name: string, from: number, to: number) => array.filter(
  (ele) => (ele[name] >= from && ele[name] <= to),
);

const sortFilter = (array: IProps[], name: string) => {
  if (name === 'alphabetReverse') {
    return array.sort(
      (a, b) => b.name.localeCompare(a.name),
    );
  }
  if (name === 'amountIncrease') {
    return array.sort(
      (a, b) => Number(a.year) - Number(b.year),
    );
  }
  if (name === 'amountDecrease') {
    return array.sort(
      (a, b) => Number(b.year) - Number(a.year),
    );
  }
  return array.sort(
    (a, b) => a.name.localeCompare(b.name),
  );
};

export { valueFilter, rangeFilter, sortFilter };
