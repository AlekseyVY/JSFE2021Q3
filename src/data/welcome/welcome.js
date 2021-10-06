
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
        className: 'glideContainer',
        content: [
          {
            tag: 'div',
            className: 'welcome-content-overlay',
            content: []
          },
          {
            tag: 'div',
            className: 'glide',
            content: [
              {
                tag: 'div',
                className: 'glide__track',
                data_glide_el: "track",
                content: [
                  {
                    tag: 'ul',
                    className: 'glide__slides',
                    content: [
                      {
                        tag: 'li',
                        className: 'glide__slide',
                        content: [
                          {
                            tag: 'img',
                            className: 'hero-slider_img',
                            alt: 'mona lisa',
                            lazy: true,
                            id: '1',
                            img: './assets/welcome/1.avif',
                            content: []
                          },
                        ]
                      },
                      {
                        tag: 'li',
                        className: 'glide__slide',
                        content: [
                          {
                            tag: 'img',
                            className: 'hero-slider_img',
                            alt: 'liberty',
                            lazy: true,
                            id: '2',
                            img: './assets/welcome/2.avif',
                            content: []
                          },
                        ]
                      },
                      {
                        tag: 'li',
                        className: 'glide__slide',
                        content: [
                          {
                            tag: 'img',
                            className: 'hero-slider_img',
                            alt: 'woman',
                            lazy: true,
                            id: '3',
                            img: './assets/welcome/3.avif',
                            content: []
                          },
                        ]
                      },
                      {
                        tag: 'li',
                        className: 'glide__slide',
                        content: [
                          {
                            tag: 'img',
                            className: 'hero-slider_img',
                            alt: 'mona lisa',
                            lazy: true,
                            id: '4',
                            img: './assets/welcome/4.avif',
                            content: []
                          },
                        ]
                      },
                      {
                        tag: 'li',
                        className: 'glide__slide',
                        content: [
                          {
                            tag: 'img',
                            className: 'hero-slider_img',
                            alt: 'mona lisa',
                            lazy: true,
                            id: '5',
                            img: './assets/welcome/5.avif',
                            content: []
                          },
                        ]
                      }
                    ]
                  }
                ]
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
                    // className: 'hero-slider-controls-wrapper-show-wrapper',
                    className: 'glide__bullets',
                    data_glide_el: "controls[nav]",
                    content: [...await ( async () => {
                      return ['1', '2', '3', '4', '5'].map((ele, idx) => {
                        return {
                          tag: 'button',
                          // className: `hero-slider-controls-wrapper-show-element`,
                          className: 'glide__bullet',
                          data_glide_dir: `=${idx}`,
                          content: []
                        }
                      })
                    })()]
                  },
                  {
                    tag: 'div',
                    className: 'glide__arrows',
                    data_glide_el: "controls",
                    content: [
                      {
                        tag: 'button',
                        // className :'slide-arrows-left-button',
                        className: 'glide__arrow glide__arrow--left',
                        data_glide_dir: "<",
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
                        className: 'glide__arrow glide__arrow--right',
                        data_glide_dir: ">",
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
          }
        ]
      }]
  }]
}

export default welcomeContainer;