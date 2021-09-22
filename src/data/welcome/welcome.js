import navigation from "./nav";

const welcomeContainer = {
  tag: 'section',
  className: 'welcome-section-container',
  content: [
    {
      tag: 'header',
      className: 'header-wrapper',
      content: [navigation]
    },
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
          link: 'https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736',
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
          img: './assets/welcome/hero_slide_1.png',
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