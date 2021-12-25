export interface IFilters {
  [key: string]: any
  value: {
    form: {
      ball: boolean,
      bell: boolean,
      cone: boolean,
      star: boolean,
      toy: boolean,
    },
    color: {
      white: boolean,
      yellow: boolean,
      red: boolean,
      blue: boolean,
      green: boolean,
    },
    size: {
      large: boolean,
      medium: boolean,
      small: boolean,
    },
    favorite: boolean,
  },
  range: {
    [key: string]: any
    amount: {
      from: number,
      to: number,
    },
    year: {
      from: number,
      to: number,
    },
  },
  sort: {
    alphabet: boolean,
    alphabetReverse: boolean,
    amountIncrease: boolean,
    amountDecrease: boolean,
  },
}

export interface IValue {
  category: string,
  subCategory?: string,
  name?: string,
  fromValue?: number,
  toValue?: number,
  type?: string,
}
