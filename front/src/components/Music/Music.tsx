import { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { ReactComponent as On } from '../../assets/sound_on.svg';
import { Container } from './Music.style';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setMusic } from '../../stores/reducers/optionsReducer';

const Music = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [play, setPlay] = useState(false);
  const options = useAppSelector((state) => state.options.music);
  const dispatch = useAppDispatch();
  fromEvent(audio, 'ended').subscribe(
    () => {
      setPlay(false);
      dispatch(setMusic(false));
    },
  );
  useEffect(
    () => {
      if (options) document.addEventListener('click', () => audio.play());
      if (play) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    },
    [play, options],
  );
  return (
    <Container onClick={() => {
      if (audio.paused) {
        dispatch(setMusic(true));
        setPlay(true);
      } else {
        dispatch(setMusic(false));
        setPlay(false);
      }
    }}
    >
      <On />
    </Container>
  );
};

export default Music;
