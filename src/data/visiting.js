
const cardsGenerator = async () => {
  const data = [{
    name: 'royal palace',
    img: './assets/visiting/royal_palace.png',
    link: 'https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815'
  },
  {
    name: 'denon wing',
    img: './assets/visiting/denon_wing.png',
    link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500'
  },
    {
      name: 'colonnade perrault',
      img: './assets/visiting/collonade.png',
      link: 'https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120'
    },
    {
      name: 'greek hall',
      img: './assets/visiting/greek_hall.png',
      link: 'https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'
    },
    {
      name: 'mona lisa',
      img: './assets/visiting/mona_lisa.png',
      link: 'https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120'
    },
    {
      name: 'night palace',
      img: './assets/visiting/night_palace.png',
      link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652'
    }]

  return data.map((ele, idx) => {
    return {
      tag: 'a',
      className: 'visiting-card-wraper',
      id: null,
      img: null,
      blank: true,
      link: ele.link,
      content: [{
        tag: 'img',
        className: 'visiting-card-img',
        id: null,
        alt: ele.name,
        img: ele.img,
        link: null,
        content: []
      },
        {
          tag: 'h3',
          className: 'visiting-card-logo',
          id: null,
          img: null,
          link: null,
          content: [ele.name]
      },
        {
          tag: 'div',
          className: 'visiting-card-delimeter',
          id: null,
          img: null,
          link: null,
          content: []
        },
        {
          tag: 'p',
          className: 'visiting-card-sec-text',
          id: null,
          img: null,
          link: null,
          content: ['360° Virtual Tour']
        },
        {
          tag: 'p',
          className: 'visiting-card-third-text',
          id: null,
          img: null,
          link: null,
          content: ['Google Street Panorama View']
        }]
    }
  });
}


const visitingContainer = {
  tag: 'section',
  className: 'visiting-section-container',
  id: 'visiting',
  img: null,
  link: null,
  content: [{
    tag: 'div',
    className: 'visiting-content-wrapper',
    id: null,
    img: null,
    link: null,
    content: [{
      tag: 'h2',
      className: 'visiting-content-logo',
      id: null,
      img: null,
      link: null,
      content: ['virtual tour']
    },
    {
      tag: 'div',
      className: 'visiting-content-delimeter',
      id: null,
      img: null,
      link: null,
      content: []
    },
    {
      tag: 'div',
      className: 'visiting-content-cards-wrapper',
      id: null,
      img: null,
      link: null,
      content: [...await cardsGenerator()]
    }
    ]
  }]
}

export default visitingContainer;