
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
          // className: 'video-content-videogallery-wrapper',
          className: 'glide2',
          content: [
            {
              tag: 'div',
              className: 'glide__track',
              data_glide_el: "track",
              content: [
                {
                  tag: 'ul',
                  className: 'glide__slides',
                  content: [...['https://www.youtube.com/embed/zp1BXPX8jcU?enablejsapi=1',
                    'https://www.youtube.com/embed/2OR0OCr6uRE?enablejsapi=1',
                    'https://www.youtube.com/embed/aWmJ5DgyWPI?enablejsapi=1',
                    'https://www.youtube.com/embed/Vi5D6FKhRmo?enablejsapi=1',
                    'https://www.youtube.com/embed/NOhDysLnTvY?enablejsapi=1' ].map((ele, idx) => {
                    return {
                      tag: 'li',
                      className: 'glide__slide',
                      content: [
                        {
                          tag: 'iframe',
                          className: 'video-content-videogallery-player',
                          img: ele,
                          content: []
                        }
                      ]
                    }
                  })
                  ]
                }
              ]
            },
            {
              tag: 'div',
              // className: 'video-content-videogallery-controls-wrapper',
              className: 'glide__arrows',
              data_glide_el: "controls",
              content: [
                {
                  tag: 'button',
                  // className: 'video-content-videogallery-controls-left-button',
                  className: 'glide__arrow glide__arrow--left',
                  data_glide_dir: "<",
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
                {
                  tag: 'div',
                  className: 'glide__bullets',
                  data_glide_el: "controls[nav]",
                  content: [
                    ...['1', '2', '3', '4', '5'].map((ele, idx) => {
                      return {
                        tag: 'div',
                        className: 'glide__bullet',
                        data_glide_dir: `=${idx}`,
                        content: []
                      }
                    })
                  ]
                },
                {
                  tag: 'button',
                  // className: 'video-content-videogallery-controls-right-button',
                  className: 'glide__arrow glide__arrow--right',
                  data_glide_dir: ">",
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
          ],
        },

      ]
    }
  ]
}

export default videoContainer;

