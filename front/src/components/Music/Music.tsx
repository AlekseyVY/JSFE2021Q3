import { useEffect, useState } from 'react';
import { ReactComponent as On } from '../../assets/sound_on.svg';
import { ReactComponent as Off } from '../../assets/sound_off.svg';
import { Container } from './Music.style';

const Music = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [state, setState] = useState(false);
  useEffect(
    () => {
      if (state) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    },
    [state],
  );
  return (
    <Container onClick={() => setState(!state)}>
      {state ? <Off /> : <On />}
    </Container>
  );
};

export default Music;
