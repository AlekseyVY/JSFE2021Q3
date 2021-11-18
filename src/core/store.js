/**
 * Store class implemented with Subscriber Observer pattern
 * @module Store
 */
class Store {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    this.state = dto;
    this.subsArray = [];
    this.init();
  }

  getState() {
    return this.state;
  }

  /**
   * Method for initializing store and notify all subscribed classes
   * @method init
   */
  init() {
    this.subsArray.forEach((component) => {
      component(this.state);
    });
  }

  /**
   * Method for handling subscriptions to store
   * @method subscribe
   * @param {function} component takes function and subscribes it
   */
  subscribe(component) {
    this.subsArray.push(component);
  }

  /**
   * Notifies all subscribers on state change
   * @method notify
   */
  notify() {
    this.init();
  }

  /**
   * Method for dispatching actions to store
   * @method dispatch
   * @param {object} action action object that mutates store
   */
  dispatch(action) {
    this.state[action.name] = action.value;
    this.notify();
    console.log(this.state);
  }
}

export default Store;
