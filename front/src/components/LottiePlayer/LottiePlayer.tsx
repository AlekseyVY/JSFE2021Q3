import { useEffect } from 'react';
import lottie from 'lottie-web';

interface IlottieData {
  data: string;
  name: string;
}

const LottiePlayer = ({ data, name }: IlottieData) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#lottieRef_${name}`) as HTMLElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: data,
      rendererSettings: {
        progressiveLoad: true,
      },
    });
  }, [data, name]);

  return (
    <div id={`lottieRef_${name}`} />
  );
};

export default LottiePlayer;
