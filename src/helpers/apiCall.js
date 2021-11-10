/**
 * class for fetching data
 * @module ApiCall
 */
class ApiCall {
  /**
   * @param {string} url path to data
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * Asynchronous method that calls fetch on provided url
   * @method getData
   * @returns {json} data
   */
  async getData() {
    try {
      const data = await fetch(this.url);
      return data.json();
    } catch (e) {
      return e;
    }
  }
}

export default ApiCall;
