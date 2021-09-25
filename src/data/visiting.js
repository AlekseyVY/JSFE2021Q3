
const cardsGenerator = async () => {
  const data = [{
    name: 'royal palace',
    img: './assets/visiting/royal_palace.avif',
    link: 'tours/tour_1.html'
  },
  {
    name: 'denon wing',
    img: './assets/visiting/denon_wing.avif',
    link: 'tours/tour_2.html'
  },
    {
      name: 'colonnade perrault',
      img: './assets/visiting/collonade.avif',
      link: 'tours/tour_3.html'
    },
    {
      name: 'greek hall',
      img: './assets/visiting/greek_hall.avif',
      link: 'tours/tour_4.html'
    },
    {
      name: 'mona lisa',
      img: './assets/visiting/mona_lisa.avif',
      link: 'tours/tour_5.html'
    },
    {
      name: 'night palace',
      img: './assets/visiting/night_palace.avif',
      link: 'tours/tour_6.html'
    }]

  return data.map((ele, idx) => {
    return {
      tag: 'a',
      className: 'visiting-card-wraper',
      blank: true,
      link: ele.link,
      content: [{
        tag: 'img',
        className: 'visiting-card-img',
        alt: ele.name,
        img: ele.img,
        content: []
      },
        {
          tag: 'h3',
          className: 'visiting-card-logo',
          content: [ele.name]
      },
        {
          tag: 'div',
          className: 'visiting-card-delimeter',
          content: []
        },
        {
          tag: 'p',
          className: 'visiting-card-sec-text',
          content: ['360° Virtual Tour']
        },
        {
          tag: 'p',
          className: 'visiting-card-third-text',
          content: ['Google Street Panorama View']
        }]
    }
  });
}


const visitingContainer = {
  tag: 'section',
  className: 'visiting-section-container',
  id: 'visiting',
  content: [{
    tag: 'div',
    className: 'visiting-content-wrapper',
    content: [{
      tag: 'h2',
      className: 'visiting-content-logo',
      content: ['virtual tour']
    },
    {
      tag: 'div',
      className: 'visiting-content-delimeter',
      content: []
    },
    {
      tag: 'div',
      className: 'visiting-content-cards-wrapper',
      content: [...await cardsGenerator()]
    }
    ]
  }]
}

export default visitingContainer;