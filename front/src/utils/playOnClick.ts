const playOnClick = (state: boolean) => {
  const onActive = new Audio('./assets/sounds/active_click.wav');
  const onInactive = new Audio('./assets/sounds/inactive_click.wav');
  state ? onActive.play() : onInactive.play();
};

export default playOnClick;
