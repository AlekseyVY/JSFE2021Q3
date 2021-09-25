const contactsContainer = {
  tag: 'section',
  className: 'contacts-container',
  id: 'contacts',
  content: [
    {
      tag: 'div',
      className: 'contacts-content-wrapper',
      content: [
        {
          tag: 'h2',
          className: 'contacts-content-logo',
          content: ['Contacts']
        },
        {
          tag: 'div',
          className: 'contacts-content-delimeter',
          content: []
        },
        {
          tag: 'div',
          className: 'contacts-content-inner-wrapper',
          content: [
            {
              tag: 'div',
              className: 'contacts-content-inner-list-wrapper',
              content: [
                {
                  tag: 'p',
                  className: 'contacts-content-inner-list-logo',
                  content: ['Palais Royal\n Musee du Louvre']
                },
                {
                  tag: 'p',
                  className: 'contacts-content-inner-list-adress',
                  content: ['address: 75001 Paris, France']
                },
                {
                  tag: 'p',
                  className: 'contacts-content-inner-list-phone',
                  content: ['phone: +33(0) 1 40 20 50 50']
                },
                {
                  tag: 'p',
                  className: 'contacts-content-inner-list-mail',
                  content: ['mail: info@louvre.fr']
                }
              ]
            },
            {
              tag: 'img',
              className: 'contacts-content-location',
              img: './assets/contacts/tmp.avif',
              alt: 'location',
              content: []
            }
          ]
        }
      ]
    }
  ]
}

export default contactsContainer;