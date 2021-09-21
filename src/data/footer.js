import navigation from "./welcome/nav";

const socialGenerator = (() => {
  return [
    {name: 'youtube', link: 'https://www.youtube.com/user/louvre'},
    {name: 'insta', link: 'https://www.instagram.com/museelouvre/'},
    {name: 'fb', link: 'https://www.facebook.com/museedulouvre'},
    {name: 'twitter', link: 'http://twitter.com/museelouvre'},
    {name: 'pinterest', link: 'https://www.pinterest.fr/museedulouvre/'}]
    .map((ele) => {
    return (
        {
          tag: 'a',
          className: 'social-icon-wrapper',
          link: ele.link,
          blank: true,
          content: [
            {
              tag: 'img',
              className: `social-icon`,
              img: `./assets/footer/socials/${ele.name}.svg`,
              alt: `${ele.name}`,
              content: []
            }
      ]
    })
  })
})()
console.log(socialGenerator)

const footerContainer = {
  tag: 'section',
  className: 'footer-section-container',
  content: [
    {
      tag: 'div',
      className: 'footer-content-delimeter',
      content: []
    },
    {
      tag: 'div',
      className: 'footer-content-wrapper',
      content: [
        {
          tag: 'div',
          className: 'footer-content-top-wrapper',
          content: [
            navigation,
            {
              tag: 'div',
              className: 'footer-content-social-wrapper',
              content: [...socialGenerator]
            }
          ]
        },
        {
          tag: 'div',
          className: 'footer-content-bot-wrapper',
          content: [
            {
              tag: 'div',
              className: 'footer-content-bot-last-wrapper',
              content: [
                {
                  tag: 'p',
                  className: 'footer-content-last-text',
                  content: ['© 2021']
                },
                {
                  tag: 'p',
                  className: 'footer-content-last-text',
                  content: ['The Rolling Scopes School']
                },
                {
                  tag: 'p',
                  className: 'footer-content-last-text',
                  content: ['AlekseyVY']
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default footerContainer;