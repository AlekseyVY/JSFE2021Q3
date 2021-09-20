
const exploreContainer = {
  tag: 'section',
  className: 'explore-section-container',
  id: 'explore',
  content: [{
    tag: 'div',
    className: 'explore-content-wrapper',
    content: [{
      tag: 'div',
      className: 'explore-content-text-wrapper',
      content: [{
        tag: 'h2',
        className: 'explore-content-text-logo',
        content: ['picture explore']
      },
        {
          tag: 'div',
          className: 'explore-content-text-delimeter',
          content: []
        },
        {
          tag: 'p',
          className: 'explore-content-text-sec-text',
          content: ['Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.']
        },
        {
          tag: 'p',
          className: 'explore-content-text-sec-text',
          content: ['It was cleaned in 1984 to remove a "yellow veil" of dust that had gathered since the previous restoration in the 19th century.']
        },
        {
          tag: 'p',
          className: 'explore-content-text-sec-text',
          content: ['The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.']
        }
      ]
    },
      {
        tag: 'img',
        className: 'explore-content-img',
        img: './assets/explore/explore.png',
        alt: 'explore',
        content: []
      }]
  }]
}

export default exploreContainer;