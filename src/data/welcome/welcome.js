
const welcomeContainer = {
  tag: 'section',
  className: 'welcome-section-container',
  content: [
    {
    tag: 'div',
    className: 'hero-container',
    content: [
      {
      tag: 'div',
      className: 'hero-content',
      content: [{
        tag: 'h1',
        className: 'hero-content-logo',
        content: ['Welcome\n to the Louvre']
      },
      {
        tag: 'h2',
        className: 'hero-content-text',
        content: ['From the castle to the museum']
      },
        {
          tag: 'a',
          className: 'hero-content-button-link',
          blank: true,
          link: 'tours/tour_0.html',
          content: [{
            tag: 'div',
            className: 'hero-content-button',
            content: ['Discover the Louvre']
          }]
        }
        ]
      },
      {
        tag: 'div',
        className: 'hero-slider',
        content: [{
          tag: 'img',
          className: 'hero-slider_img',
          alt: 'mona lisa',
          lazy: true,
          img: './assets/welcome/hero_slide_1.avif',
          content: []
        },
        {
          tag: 'div',
          className: 'hero-slider-controls-wrapper',
          content: [{
            tag: 'div',
            className: 'hero-slider-controls-wrapper-counter-wrapper',
            content: [{
              tag: 'div',
              className: 'hero-slider-controls-wrapper-counter-count',
              content: ['01']
            },
              {
                tag: 'div',
                className: 'hero-slider-controls-wrapper-counter-delimeter',
                content: []
              },
              {
                tag: 'div',
                className: 'hero-slider-controls-wrapper-counter-total',
                content: ['05']
              }]
          },
          {
            tag: 'div',
            className: 'hero-slider-controls-wrapper-show-wrapper',
            content: [...await ( async () => {
              return ['1', '2', '3', '4', '5'].map((ele) => {
                return {
                  tag: 'div',
                  className: `hero-slider-controls-wrapper-show-element`,
                  content: []
                }
              })
            })()]
          },
          {
            tag: 'div',
            className: `hero-slider-controls-wrapper-slide-arrows-wrapper`,
            content: [
              {
                tag: 'button',
                className :'slide-arrows-left-button',
                content: [{
                  tag: 'img',
                  className: `hero-slider-controls-wrapper-slide-arrows-left`,
                  img: './assets/welcome/left.svg',
                  alt: 'slider left arrow',
                  lazy: true,
                  content: []
                }]
              },
              {
                tag: 'button',
                className :'slide-arrows-right-button',
                content: [
                  {
                    tag: 'img',
                    className: `hero-slider-controls-wrapper-slide-arrows-right`,
                    img: './assets/welcome/right.svg',
                    alt: 'slider right arrow',
                    lazy: true,
                    content: []
                  }
                ]
              }
              ]
          }
          ]
        }]
      }]
  }]
}

export default welcomeContainer;