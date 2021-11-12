import state from '../state/state';
import generateQuestions from '../helpers/questionsGenerate';
/**
 * Web worker for Json fetching and setting up questions
 * @module Worker
 */
class JsonWorker {
  constructor() {
    this.worker = new Worker(new URL('json.worker.js', import.meta.url));
    this.worker.postMessage(true);
    this.data = null;
    this.worker.onmessage = (e) => {
      state.dispatch({ name: 'data', value: e.data });
      this.data = e.data;
      // TODO: Refactor this part, if time.
      const NUM_OF_QUESTION_CATEGORIES = 12;
      const NUM_OF_QUESTIONS = 10;
      state.dispatch({
        name: 'artistsObj',
        value: generateQuestions(this.data.slice(0, Math.floor(this.data.length / 2)),
          NUM_OF_QUESTION_CATEGORIES, NUM_OF_QUESTIONS),
      });
      state.dispatch({
        name: 'picturesObj',
        value: generateQuestions(this.data.slice(Math.floor(this.data.length / 2) + 1),
          NUM_OF_QUESTION_CATEGORIES, NUM_OF_QUESTIONS),
      });
    };
  }

  /**
   * Terminates web worker
  * @method terminate
  */
  terminate() {
    this.worker.terminate();
  }
}

export default JsonWorker;
