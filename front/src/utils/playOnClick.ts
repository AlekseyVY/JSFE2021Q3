const playOnClick = (state: boolean) => {
  const onInactive = new Audio('./assets/sounds/active_click.wav');
  const onActive = new Audio('./assets/sounds/inactive_click.wav');
  state ? onActive.play() : onInactive.play();
};

export default playOnClick;
