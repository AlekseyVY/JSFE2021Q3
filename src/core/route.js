/**
 * Router Class provides basic route functionality;
 * @module Router
 */
class Router {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    this.routes = dto.routes;
    this.root = document.querySelector('#root');
  }

  /**
   * renders provided route
   * @method render
   * @param {String} route route name
   */
  render(route) {
    this.routes[route].destroy('#root');
    window.location.hash = route;
    this.routes[route].render();
  }

  /**
   * method for store subscription
   * @method listen
   * @param {object} dto data transfer object
   */
  listen(dto) {
    this.render(dto.route);
  }
}

export default Router;
