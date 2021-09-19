import navigation from "./nav";

const welcomeContainer = {
  tag: 'section',
  className: 'welcome-section-container',
  id: null,
  img: null,
  link: null,
  content: [navigation,
    {
    tag: 'div',
    className: 'hero-container',
    id: null,
    img: null,
    link: null,
    content: [
      {
      tag: 'div',
      className: 'hero-content',
      id: null,
      img: null,
      link: null,
      content: [{
        tag: 'h1',
        className: 'hero-content-logo',
        id: null,
        img: null,
        link: null,
        content: ['Welcome\n to the Louvre']
      },
      {
        tag: 'p',
        className: 'hero-content-text',
        id: null,
        img: null,
        link: null,
        content: ['From the castle to the museum']
      },
        {
          tag: 'a',
          className: 'hero-content-button-link',
          id: null,
          img: null,
          blank: true,
          link: 'https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736',
          content: [{
            tag: 'div',
            className: 'hero-content-button',
            id: null,
            img: null,
            link: null,
            content: ['Discover the Louvre']
          }]
        }
        ]
      },
      {
        tag: 'div',
        className: 'hero-slider',
        id: null,
        img: null,
        link: null,
        content: [{
          tag: 'img',
          className: 'hero-slider_img',
          id: null,
          img: './assets/welcome/hero_slide_1.png',
          link: null,
          content: []
        },
        {
          tag: 'div',
          className: 'hero-slider-controls-wrapper',
          id: null,
          img: null,
          link: null,
          content: [{
            tag: 'div',
            className: 'hero-slider-controls-wrapper-counter-wrapper',
            id: null,
            img: null,
            link: null,
            content: [{
              tag: 'div',
              className: 'hero-slider-controls-wrapper-counter-count',
              id: null,
              img: null,
              link: null,
              content: ['01']
            },
              {
                tag: 'div',
                className: 'hero-slider-controls-wrapper-counter-delimeter',
                id: null,
                img: null,
                link: null,
                content: []
              },
              {
                tag: 'div',
                className: 'hero-slider-controls-wrapper-counter-total',
                id: null,
                img: null,
                link: null,
                content: ['05']
              }]
          },
          {
            tag: 'div',
            className: 'hero-slider-controls-wrapper-show-wrapper',
            id: null,
            img: null,
            link: null,
            content: [...(() => {
              return ['1', '2', '3', '4', '5'].map((ele) => {
                return {
                  tag: 'div',
                  className: `hero-slider-controls-wrapper-show-element`,
                  id: null,
                  img: null,
                  link: null,
                  content: []
                }
              })
            })()]
          },
          {
            tag: 'div',
            className: `hero-slider-controls-wrapper-slide-arrows-wrapper`,
            id: null,
            img: null,
            link: null,
            content: [{
              tag: 'img',
              className: `hero-slider-controls-wrapper-slide-arrows-left`,
              id: null,
              img: './assets/welcome/left.svg',
              link: null,
              content: []
            },
            {
              tag: 'img',
              className: `hero-slider-controls-wrapper-slide-arrows-right`,
              id: null,
              img: './assets/welcome/right.svg',
              link: null,
              content: []
            }]
          }
          ]
        }]
      }]
  }]
}

export default welcomeContainer;