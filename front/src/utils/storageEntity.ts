import { IFilters } from 'src/types/globals';
import { IProps } from '../components/ToyCard/ToyCard.d';
import { IOptions } from '../providers/options';

const storageEntity = (type: string, key?: string, data?: IProps[] | IFilters | IOptions) => {
  let tmp;
  switch (type) {
    case 'set':
      if (key) localStorage.setItem(key, JSON.stringify(data));
      break;
    case 'get':
      if (key) tmp = localStorage.getItem(key);
      if (!tmp) {
        if (key) localStorage.setItem(key, JSON.stringify(data));
        if (key) tmp = localStorage.getItem(key);
      }
      break;
    case 'clear':
      localStorage.clear();
      break;
    default: break;
  }
  if (tmp) return JSON.parse(tmp);
  return data;
};

export default storageEntity;
