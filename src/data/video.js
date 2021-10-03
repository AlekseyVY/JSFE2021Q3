
const videoContainer = {
  tag: 'section',
  className: 'video-section-container',
  id: 'video',
  content: [
    {
      tag: 'div',
      className: 'video-content-wrapper',
      content: [
        {
          tag: 'div',
          className: 'video-content-text-wrapper',
          content: [
            {
              tag: 'h2',
              className: 'video-content-text-logo',
              content: ['Video journey']
            },
            {
              tag: 'p',
              className: 'video-content-text-sec',
              content: ['Enter and visit one of the most famous museums in the world and enjoy \nmasterpieces such as Mona Lisa or Hammurabi\'s Code']
            }
          ]
        },
        {
          tag: 'div',
          className: 'video-content-main-player-wrapper',
          content: [
            {
              tag: 'button',
              className: 'video-content-main-player-big-play-button',
              content: [
                {
                tag: 'img',
                className: 'video-content-main-player-big-play',
                alt: 'main play button',
                  lazy: true,
                img: './assets/video/big_play.svg',
                content: []
              }]
            },
            {
              tag: 'img',
              className: 'video-content-main-player',
              alt: 'image of a player',
              lazy: true,
              img: './assets/video/placeholder_video.avif',
              content: []
            },
            {
              tag: 'img',
              className: 'video-content-main-player-1024',
              alt: 'image of a player',
              lazy: true,
              img: './assets/video/video_1024.avif',
              content: []
            },
            {
              tag: 'div',
              className: 'video-content-main-player-controls-wrapper',
              content: [
                {
                  tag: 'button',
                  className: 'video-content-main-player-controls-play-button',
                  content: [
                    {
                    tag: 'img',
                    className: 'video-content-main-player-controls-play',
                    img: './assets/video/play.svg',
                    alt: 'Play',
                      lazy: true,
                    content: []
                  }]
                },
                {
                  tag: 'input',
                  className: 'video-content-main-player-controls-length',
                  type: 'range',
                  content: []
                },
                {
                  tag: 'button',
                  className: 'video-content-main-player-controls-volume-button',
                  content: [
                    {
                      tag: 'img',
                      className: 'video-content-main-player-controls-volume',
                      img: './assets/video/volume.svg',
                      alt: 'Volume',
                      lazy: true,
                      content: []
                    }
                  ]
                },
                {
                  tag: 'input',
                  className: 'video-content-main-player-controls-volrange',
                  type: 'range',
                  content: []
                },
                {
                  tag: 'button',
                  className: 'video-content-main-player-controls-fullscreen-button',
                  content: [
                    {
                      tag: 'img',
                      className: 'video-content-main-player-controls-fullscreen',
                      img: './assets/video/fullscreen.svg',
                      alt: 'Fullscreen',
                      lazy: true,
                      content: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tag: 'div',
          className: 'video-content-videogallery-wrapper',
          content: [...['https://www.youtube.com/embed/aWmJ5DgyWPI',
              'https://www.youtube.com/embed/Vi5D6FKhRmo',
              'https://www.youtube.com/embed/NOhDysLnTvY' ].map((ele, idx) => {
              return {
                tag: 'iframe',
                className: 'video-content-videogallery-player',
                img: ele,
                lazy: true,
                content: []
              }
            })
            ,
            {
              tag: 'img',
              className: 'iframe-placeholder',
              img: './assets/video/pl_1.avif',
              lazy: true,
              alt: 'placeholder',
              content: []
            },
            {
              tag: 'img',
              className: 'iframe-placeholder',
              img: './assets/video/pl_1.avif',
              lazy: true,
              alt: 'placeholder',
              content: []
            }
          ]
        },
        {
          tag: 'div',
          className: 'video-content-videogallery-controls-wrapper',
          content: [
            {
              tag: 'button',
              className: 'video-content-videogallery-controls-left-button',
              content: [
                {
                  tag: 'img',
                  className: 'video-content-videogallery-controls-left',
                  img: './assets/video/left.svg',
                  alt: 'left arrow',
                  lazy: true,
                  content: []
                }
              ]
            },
            ...['1', '2', '3', '4', '5'].map((ele) => {
              return {
                tag: 'div',
                className: 'video-content-videogallery-controls-show',
                content: []
              }
            }),
            {
              tag: 'button',
              className: 'video-content-videogallery-controls-right-button',
              content: [
                {
                  tag: 'img',
                  className: 'video-content-videogallery-controls-right',
                  img: './assets/video/right.svg',
                  alt: 'right arrow',
                  lazy: true,
                  content: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default videoContainer;

