
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//TODO: make function create adaptive column layout
const galleryData = shuffle(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']);
const masonryData = [galleryData.slice(0, 5), galleryData.slice(5, 10), galleryData.slice(10, 15)]
const masonryDTO =  masonryData.map((col) => {
  return {
    tag: 'div',
    className: 'gallery-columnn',
    content: [...col.map((ele) => {
        return {
          tag: 'img',
          className: 'gallery-card',
          img: `./assets/gallery/galery${ele}.jpg`,
          alt: `galery${ele} picture`,
          content: []
        }
      })
    ]
  }
})

const galleryContainer = {
  tag: 'section',
  className: 'gallery-section-container',
  id: 'gallery',
  content: [{
    tag: 'div',
    className: 'gallery-content-wrapper',
    content: [{
      tag: 'h2',
      className: 'gallery-content-logo',
      content: ['Art Gallery']
    },
      {
        tag: 'div',
        className: 'gallery-content-gallery',
        content: [...masonryDTO,
          {
            tag: 'div',
            className: 'gallery-content-overlay',
            content: []
          }]
      },
    ],
  }]
}

export default galleryContainer;