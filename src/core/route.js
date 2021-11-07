import state from './store';
import welcome from '../components/welcomeScreen';
import settings from '../components/settings';
import category from '../components/category';
import profile from '../components/profile';
/**
 * Router Class provides basic route functionality;
 * @param {object} dto - data transfer object;
 * @method render - renders selected route, takes string as parameter;
 * @method listen - metod for subscription to state observer, takes state object as parameter;
 */
class Router {
  constructor(dto) {
    this.routes = dto.routes;
    this.root = document.querySelector('#root');
  }

  render(route) {
    this.routes[route].destroy('#root');
    this.routes[route].render();
  }

  listen(dto) {
    this.render(dto.route);
  }
}

const router = new Router({
  routes: {
    welcome,
    settings,
    category,
    profile,
  },
});

state.subscribe((data) => router.listen(data));

export default router;
