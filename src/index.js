import Button from './components/button';

import('./main.scss');
import('normalize.css');

const btn = new Button({
  selector: '#root',
  tag: 'div',
  html: `<h2>Working ${12}</h2>`,
});

btn.render();
