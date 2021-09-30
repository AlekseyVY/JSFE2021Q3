
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


export default socialGenerator;