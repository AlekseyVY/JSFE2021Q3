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
        tag :'li',
        className: 'social-icon-list-wrapper',
        content: [
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
                lazy: true,
                content: []
              }
            ]
          }
        ]
      })
  })
})()

const footerContainer = {
  tag: 'footer',
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
              tag: 'ul',
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
                  tag: 'a',
                  className: 'footer-content-last-text',
                  link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  blank: true,
                  content: ['© 2021']
                },
                {
                  tag: 'a',
                  link: 'https://rollingscopes.com/',
                  blank: true,
                  className: 'footer-content-last-text',
                  content: ['The Rolling Scopes School']
                },
                {
                  tag: 'a',
                  link: 'https://github.com/AlekseyVY',
                  blank: true,
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