
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
        }]
    }
  ]
};

export default navigation;