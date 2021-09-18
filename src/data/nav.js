
const navElem = (() => {
  const data = ['visiting', 'explore', 'video', 'gallery', 'tickets', 'contacts'];
  return data.map((ele) => {
    return {
      tag: 'li',
      className: `nav-element-${ele}`,
      id: null,
      img: null,
      link: null,
      content: [{
        tag: 'a',
        className: `nav-link-element-${ele}`,
        id: null,
        img: null,
        link: `#${ele}`,
        content: [ele]}]
    }
  })
})()

const navMenu = {
  tag: 'ul',
  className: 'nav-menu',
  id: null,
  img: null,
  link: null,
  content: [...navElem]
}

const logo = {
  tag: 'img',
  className: 'nav-logo',
  id: null,
  img: './assets/logo.svg',
  link: null,
  content: []
}

const logoText = {
  tag: 'div',
  className: 'nav-logo-text',
  id: null,
  img: null,
  link: null,
  content: ['louvre']
}

const logoWrapper = {
  tag: 'div',
  className: 'nav-logo-wrapper',
  id: null,
  img: null,
  link: null,
  content: [logo, logoText]
}

const navigation = {
  tag: 'nav',
  className: 'nav-container',
  id: null,
  img: null,
  link: null,
  content: [logoWrapper, navMenu]
}

export default navigation;