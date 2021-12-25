const urlGenerator = (num: number, state: boolean): string => {
  if (state) return `./assets/bg/bg_${num}.avif`;
  return `./assets/tree/tree_${num}.avif`;
};

export default urlGenerator;
