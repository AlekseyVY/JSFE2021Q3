/**
 * Class represents single global state;
 * @param {object} state - state object;
 * @param {array} subArray - array that contains all subscribers;
 * @method init - initialize app;
 * @method subscribe - subscribe component to watch for state changes;
 * @method notify - notifyes all subscribers;
 * @method dispatch - dispatches action that changes state object,
 * and notifies subscribers;
 */
class Store {
  constructor(dto) {
    this.state = dto;
    this.subsArray = [];
    this.init();
  }

  init() {
    this.subsArray.forEach((component) => {
      component(this.state);
    });
  }

  subscribe(component) {
    this.subsArray.push(component);
  }

  notify() {
    this.subsArray.forEach((component) => {
      component(this.state);
    });
  }

  dispatch(action) {
    this.state[action.name] = action.value;
    this.notify();
  }
}

export default Store;
