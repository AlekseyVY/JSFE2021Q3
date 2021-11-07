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

  listen(state) {
    this.render(state.route);
  }
}

export default Router;
