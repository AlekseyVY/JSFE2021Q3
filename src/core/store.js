class Store {
  constructor() {
    // here will be object with initial state of app;
    this.state = null;
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
    // action name is key of state object, action value is value of that property
    this.state[action.name] = action.value;
    this.notify();
  }
}

export default Store;
