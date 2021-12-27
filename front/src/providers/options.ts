import { IToysCoords } from '../components/Options/Options';
import { IProps } from '../components/ToyCard/ToyCard.d';

export const options = {
  bg: 6,
  tree: 3,
  snow: true,
  music: true,
  lights: true,
  color: 'mix',
  treeToys: [],
  dragToys: [],
};

export interface IOptions {
  bg: number;
  tree: number;
  snow: boolean;
  music: boolean;
  lights: boolean;
  color: string;
  treeToys: IToysCoords[];
  dragToys: IProps[];
}
