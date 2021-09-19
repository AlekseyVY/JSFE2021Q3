
const videoContainer = {
  tag: 'section',
  className: 'video-section-container',
  id: 'video',
  img: null,
  link: null,
  content: [
    {
      tag: 'div',
      className: 'video-content-wrapper',
      id: null,
      img: null,
      link: null,
      content: [
        {
          tag: 'div',
          className: 'video-content-text-wrapper',
          id: null,
          img: null,
          link: null,
          content: [
            {
              tag: 'h2',
              className: 'video-content-text-logo',
              id: null,
              img: null,
              link: null,
              content: ['Video journey']
            },
            {
              tag: 'p',
              className: 'video-content-text-sec',
              id: null,
              img: null,
              link: null,
              content: ['Enter and visit one of the most famous museums in the world and enjoy \nmasterpieces such as Mona Lisa or Hammurabi\'s Code']
            }
          ]
        },
        {
          tag: 'div',
          className: 'video-content-main-player-wrapper',
          id: null,
          img: null,
          link: null,
          content: [
            {
              tag: 'img',
              className: 'video-content-main-player-big-play',
              id: null,
              img: './assets/video/big_play.svg',
              link: null,
              content: []
            },
            {
              tag: 'img',
              className: 'video-content-main-player',
              id: null,
              img: './assets/video/placeholder_video.png',
              link: null,
              content: []
            },
            {
              tag: 'div',
              className: 'video-content-main-player-controls-wrapper',
              id: null,
              img: null,
              link: null,
              content: [
                {
                  tag: 'img',
                  className: 'video-content-main-player-controls-play',
                  id: null,
                  img: './assets/video/play.svg',
                  alt: 'Play',
                  link: null,
                  content: []
                },
                {
                  tag: 'input',
                  className: 'video-content-main-player-controls-length',
                  id: null,
                  type: 'range',
                  link: null,
                  content: []
                },
                {
                  tag: 'img',
                  className: 'video-content-main-player-controls-volume',
                  id: null,
                  img: './assets/video/volume.svg',
                  alt: 'Volume',
                  link: null,
                  content: []
                },
                {
                  tag: 'input',
                  className: 'video-content-main-player-controls-volrange',
                  id: null,
                  type: 'range',
                  link: null,
                  content: []
                },
                {
                  tag: 'img',
                  className: 'video-content-main-player-controls-fullscreen',
                  id: null,
                  img: './assets/video/fullscreen.svg',
                  alt: 'Fullscreen',
                  link: null,
                  content: []
                }
              ]
            }
          ]
        },
        {
          tag: 'div',
          className: 'video-content-videogallery-wrapper',
          id: null,
          img: null,
          link: null,
          content: [...['https://www.youtube.com/embed/zp1BXPX8jcU',
              'https://www.youtube.com/embed/Vi5D6FKhRmo',
              'https://www.youtube.com/embed/NOhDysLnTvY' ].map((ele, idx) => {
              return {
                tag: 'iframe',
                className: 'video-content-videogallery-player',
                id: null,
                img: ele,
                lazy: true,
                link: null,
                content: []
              }
            })
          ]
        },
        {
          tag: 'div',
          className: 'video-content-videogallery-controls-wrapper',
          id: null,
          img: null,
          link: null,
          content: [
            {
              tag: 'img',
              className: 'video-content-videogallery-controls-left',
              id: null,
              img: './assets/video/left.svg',
              alt: 'left arrow',
              link: null,
              content: []
            },
            ...['1', '2', '3', '4', '5'].map((ele) => {
              return {
                tag: 'div',
                className: 'video-content-videogallery-controls-show',
                id: null,
                img: null,
                link: null,
                content: []
              }
            }),
            {
              tag: 'img',
              className: 'video-content-videogallery-controls-right',
              id: null,
              img: './assets/video/right.svg',
              alt: 'right arrow',
              link: null,
              content: []
            }
          ]
        }
      ]
    }
  ]
}

export default videoContainer;

