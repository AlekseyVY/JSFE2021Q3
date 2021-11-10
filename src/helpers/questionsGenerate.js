/**
 * Generates questions
 * @module QuestionsGen
 * @param {Array} arr array of questions
 * @param {Number} len length of question array
 * @param {Number} numOfQuestions Number of questions per array
 * @returns {Array} array of question objects
 */
const generateQuestions = (arr, len, numOfQuestions) => {
  const baseArr = Array.from({ length: len }, (v, i) => i);
  return baseArr.map((ele, idx) => {
    let num = 0;
    const tmp = [];
    while (num < numOfQuestions) {
      num += 1;
      tmp.push(arr.shift());
    }
    return {
      id: idx,
      status: false,
      data: tmp,
      result: 0,
    };
  });
};

export default generateQuestions;
