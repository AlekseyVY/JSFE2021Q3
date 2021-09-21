
const radioGroup = (() => {
  return ['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'].map((ele) => {
    return {
      tag: 'label',
      className: 'ticket-buy-radio-wrapper',
      content: [
        {
          tag: 'input',
          type: 'radio',
          name: 'buy',
          content: []
        },
        {
          tag: 'p',
          className: 'ticket-buy-radio-p',
          content: [ele]
        },
      ]
    }
  })
})();

const amountSelector = (() => {
  return ['Basic 18+', 'Senior 65+'].map((ele) => {
    return {
      tag: 'div',
      className: 'ticket-selector-wrapper',
      content: [
        {
          tag: 'p',
          className: `ticket-selector-logo`,
          content: [ele]
        },
        {
          tag: 'div',
          className: 'ticket-selector-content-wrapper',
          content: [
            {
              tag: 'img',
              className: 'ticket-selector-content-minus',
              img: './assets/tickets/minus.svg',
              alt: 'minus',
              content: ['-']
            },
            {
              tag: 'p',
              className: 'ticket-selector-content-amount',
              content: ['1']
            },
            {
              tag: 'img',
              className: 'ticket-selector-content-plus',
              img: './assets/tickets/plus.svg',
              alt: 'plus',
              content: ['+']
            }
          ]
        }
      ]
    }
  })
})();

const ticketContainer = {
  tag: 'section',
  className: 'ticket-section-container',
  id: 'tickets',
  content: [
    {
      tag: 'div',
      className: 'ticket-content-wrapper',
      content: [
        {
          tag: 'h2',
          className: 'ticket-content-logo',
          content: ['BUY TICKETS']
        },
        {
          tag: 'div',
          className: 'ticket-content-delimeter',
          content: []
        },
        {
          tag: 'div',
          className: 'ticket-content-buy-wrapper',
          content: [
            {
              tag: 'img',
              className: 'ticket-content-buy-pic',
              img: './assets/tickets/tickets.png',
              alt: 'tickets pic',
              content: []
            },
            {
              tag: 'form',
              className: 'ticket-buy-wrapper',
              content: [
                {
                  tag: 'div',
                  className: 'ticket-buy-type-wrapper',
                  content: [
                    {
                      tag: 'p',
                      className: 'ticket-buy-type-logo',
                      content: 'Ticket Type'
                    },
                    {
                      tag: 'div',
                      className: 'ticket-buy-radio-container',
                      content: [...radioGroup]
                    }
                  ]
                },
                {
                  tag: 'div',
                  className: 'ticket-buy-select-wrapper',
                  content: [
                    {
                      tag: 'div',
                      className: 'ticket-buy-select-content-wrapper',
                      content: [
                        {
                          tag: 'p',
                          className: 'ticket-buy-select-content-logo',
                          content: ['Amount']
                        },
                        ...amountSelector,
                        {
                          tag: 'div',
                          className: 'ticket-buy-select-content-total-wrapper',
                          content: [
                            {
                              tag: 'p',
                              className: 'ticket-buy-select-content-total-logo',
                              content: ['Total €']
                            },
                            {
                              tag: 'p',
                              className: 'ticket-buy-select-content-total',
                              content: ['220']
                            }
                          ]
                        },
                      ]
                    },
                    {
                      tag: 'button',
                      className: 'ticket-buy-form-submit',
                      type: 'submit',
                      content: ['Buy Now']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default ticketContainer;