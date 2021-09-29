
const navElem = await (async () => {
  const data = ['visiting', 'explore', 'video', 'gallery', 'tickets', 'contacts'];
  return data.map((ele) => {
    return {
      tag: 'li',
      className: `nav-element-${ele}`,
      content: [{
        tag: 'a',
        className: `nav-link-element-${ele}`,
        link: `#${ele}`,
        content: [ele]}]
    }
  })
})();


const mobileNav = await (async () => {
  const data = ['visiting', 'explore', 'video', 'gallery', 'tickets', 'contacts'];
  return data.map((ele) => {
    return {
      tag: 'li',
      className: `mobile-nav-element-${ele}`,
      content: [{
        tag: 'a',
        className: `mobile-nav-link-element-${ele}`,
        link: `#${ele}`,
        content: [
          {
            tag: 'p',
            className: 'mobile-nav-link-element-text',
            content: [ele]
          }
        ]},
        {
          tag: 'img',
          className: 'mobile-nav-arrow',
          img: './assets/nav_arrow.svg',
          alt: 'nav arrow',
          content: []
        }]
    }
  })
})();


const navigation = {
  tag: 'div',
  className: 'nav-container-wrapper',
  content: [
    {
      tag: 'nav',
      className: 'nav-container',
      content: [{
        tag: 'div',
        className: 'nav-logo-wrapper',
        content: [{
          tag: 'img',
          className: 'nav-logo',
          alt: 'logo',
          lazy: true,
          img: './assets/welcome/logo.svg',
          content: []
        },
          {
            tag: 'div',
            className: 'nav-logo-text',
            content: ['louvre']
          }]
      },
        {
          tag: 'ul',
          className: 'nav-menu',
          content: [...navElem]
        },
        {
          tag: 'div',
          className: 'mobile-menu-wrapper',
          content: [
            {
              tag: 'div',
              className: 'mobile-menu-top',
              content: []
            },
            {
              tag: 'div',
              className: 'mobile-menu-mid',
              content: []
            },
            {
              tag: 'div',
              className: 'mobile-menu-bot',
              content: []
            },
          ]
        },
        {
          tag: 'img',
          className: 'mobile-menu-close',
          img: './assets/close.svg',
          alt: '',
          content: []
        },
        {
          tag: 'div',
          className: 'mobile-nav-wrapper',
          content: [
            {
              tag: 'ul',
              className: 'mobile-nav-list',
              content: [
                ...mobileNav
              ]
            }
          ]
        }
        ]
    },

  ]
};

export default navigation;