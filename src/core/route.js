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
