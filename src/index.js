import router from './helpers/subscribe';

import('./main.scss');
import('normalize.css');

const preload = () => {
  const loader = document.createElement('img');
  loader.src = './assets/loader.gif';
  loader.alt = 'loader animation';
  loader.classList.add('preloader');
  const node = document.querySelector('body');
  node.append(loader);
  setTimeout(() => {
    const remNode = document.querySelector('.preloader');
    remNode.remove();
    router.render('welcome');
  }, 6700);
};

console.log(`
1 - Стартовая страница и навигация (+20)
2 - Настройки (+40)
3 - Страница категорий (+30)
4 - Страница с вопросами (+50)
5 - Страница с результатами (+50)
6 - Плавная смена изображений (+10)
7 - Анимация (+20) 
      а) сложная анимация нажатия и ховера кнопок (+5)
      б) сложная анимация переходов между категориями (+5)
      в) сложная анимация появления модального окна (+5)
      г) сложная анимация при наведении на раунд в категориях, с выделенным скалированием отдельных элементов (+5)
8 - Дополнительный функционал (+20)
      а) выстрел конфетти при правильном ответе (+3)
      б) анимация загрузки приложения (+2)
      в) туториал (+5)
      г) полная профессиональная документация на весь проект (+10)

Итого: 240/240 баллов
`);

preload();
