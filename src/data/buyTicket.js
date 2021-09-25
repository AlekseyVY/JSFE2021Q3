


const buyTicketContainer = {
  tag: 'div',
  className: 'modal-container-wrapper',
  content: [
    {
      tag: 'div',
      className: 'modal-container',
      content: []
    },
    {
      tag: 'div',
      className: 'modal-content',
      content: [
        {
          tag: 'img',
          className: 'modal-close',
          img: './assets/modal/close.svg',
          alt: 'Close modal',
          content: []
        },
        {
          tag: 'div',
          className: 'modal-content-inner-wrapper',
          content: [
            {
              tag: 'div',
              className: 'modal-inner-left-wrapper',
              content: [
                {
                  tag: 'div',
                  className: 'modal-inner-left-logo-wrapper',
                  content: [
                    {
                      tag: 'img',
                      className: 'modal-inner-left-logo-img',
                      img: './assets/modal/logo.svg',
                      alt: 'Logo',
                      content: []
                    },
                    {
                      tag: 'p',
                      className: 'modal-inner-left-logo-text',
                      content: ['Booking tickets']
                    },
                    {
                     tag: 'p',
                     className: 'modal-inner-left-logo-sec-text',
                     content: ['Tour to Louvre']
                    },
                    {
                      tag: 'div',
                      className: 'modal-inner-left-logo-delimeter',
                      content: []
                    },
                    {
                      tag: 'form',
                      className: 'modal-left-form',
                      content: [
                        {
                          tag: 'div',
                          className: 'modal-left-form-date-time-wrapper',
                          content: [
                            {
                              tag: 'input',
                              type: 'date',
                              className: 'modal-form-date',
                              content: []
                            },
                            {
                              tag: 'input',
                              type: 'time',
                              className: 'modal-form-time',
                              content: []
                            }
                          ]
                        },
                        {
                          tag: 'input',
                          type: 'text',
                          className: 'modal-form-name',
                          content: []
                        },
                        {
                          tag: 'input',
                          type: 'email',
                          className: 'modal-form-email',
                          content: []
                        },
                        {
                          tag: 'input',
                          type: 'tel',
                          className: 'modal-form-tel',
                          content: []
                        },
                        {
                          tag: 'div',
                          className: 'modal-form-custom-select',
                          content: [
                            {
                              tag: 'select',
                              className: 'modal-form-select',
                              content: [
                                {
                                  tag: 'option',
                                  className: 'modal-form-select-option',
                                  value: 1,
                                  content: ['Permanent exhibition']
                                },
                                {
                                  tag: 'option',
                                  className: 'modal-form-select-option',
                                  value: 2,
                                  content: ['Temporary exhibition']
                                },                                {
                                  tag: 'option',
                                  className: 'modal-form-select-option',
                                  value: 3,
                                  content: ['Combined Admission']
                                }
                              ]
                            }
                          ]
                        },
                        {
                          tag: "div",
                          className: 'form-ticket-amount-wrapper',
                          content: [
                            {
                              tag: 'p',
                              className: 'form-ticket-amount-logo',
                              content: ['Entry ticket']
                            },
                            {
                              tag: 'div',
                              className: 'form-ticket-amount-delimeter',
                              content: []
                            },
                            {
                              tag: 'div',
                              className: 'form-ticket-amount-basic-wrapper',
                              content: [
                                {
                                  tag: 'p',
                                  className: 'form-ticket-amount-basic-text',
                                  content: ['Basic 18+ (20 €)']
                                },
                                {
                                  tag: 'div',
                                  className: 'form-ticket-amount-wrapper-inner',
                                  content: [
                                    {
                                      tag: 'button',
                                      className: 'form-ticket-amount-minus-button',
                                      content: ['-']
                                    },
                                    {
                                      tag: 'input',
                                      type: 'number',
                                      value: 2,
                                      className: 'form-ticket-amount-value',
                                      content: []
                                    },
                                    {
                                      tag: 'button',
                                      className: 'form-ticket-amount-minus-button',
                                      content: ['+']
                                    },
                                  ]
                                },
                              ]
                            },
                            {
                              tag: 'div',
                              className: 'form-ticket-amount-senior-wrapper',
                              content: [
                                {
                                  tag: 'p',
                                  className: 'form-ticket-amount-senior-text',
                                  content: ['Senior 65+ (10 €)']
                                },
                                {
                                  tag: 'div',
                                  className: 'form-ticket-amount-wrapper-inner',
                                  content: [
                                    {
                                      tag: 'button',
                                      className: 'form-ticket-amount-minus-button',
                                      content: ['-']
                                    },
                                    {
                                      tag: 'input',
                                      type: 'number',
                                      value: 2,
                                      className: 'form-ticket-amount-value',
                                      content: []
                                    },
                                    {
                                      tag: 'button',
                                      className: 'form-ticket-amount-minus-button',
                                      content: ['+']
                                    },
                                  ]
                                },
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              tag: 'div',
              className: 'modal-inner-right-wrapper',
              content: [
                {
                  tag: 'div',
                  className: 'modal-inner-right-info-wrapper',
                  content: [
                    {
                      tag: 'img',
                      className: 'modal-right-info-luvre',
                      img: './assets/modal/luvre.avif',
                      alt: 'luvre',
                      content: []
                    },
                    {
                      tag: 'p',
                      className: 'modal-right-info-logo',
                      content: ['Overview']
                    },
                    {
                      tag: 'p',
                      className: 'modal-right-info-sec',
                      content: ['Tour to Louvre']
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-info-date',
                      content: [
                        {
                          tag: 'img',
                          className: 'modal-right-info-date-img',
                          img: './assets/modal/date.svg',
                          alt: 'date',
                          content: []
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-info-date-txt',
                          content: ['Friday, August 19']
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-info-time',
                      content: [
                        {
                          tag: 'img',
                          className: 'modal-right-info-time-img',
                          img: './assets/modal/time.svg',
                          alt: 'time',
                          content: []
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-info-time-txt',
                          content: ['16 : 30']
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-info-check',
                      content: [
                        {
                          tag: 'img',
                          className: 'modal-right-info-check-img',
                          img: './assets/modal/check.svg',
                          alt: 'check',
                          content: []
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-info-check-txt',
                          content: ['Temporary exhibition']
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'div',
                  className: 'modal-right-calc-wrapper',
                  content: [
                    {
                      tag: 'div',
                      className :'modal-right-calc-basic-wrapper',
                      content: [
                        {
                          tag: 'div',
                          className: 'modal-right-calc-basic-value',
                          content: ['2']
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-calc-basic-text',
                          content: ['Basic (20 €)']
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-calc-basic-amount',
                          content: ['40 €']
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-calc-senior-wrapper',
                      content: [
                        {
                          tag: 'div',
                          className: 'modal-right-calc-senior-value',
                          content: ['2']
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-calc-senior-text',
                          content: ['Senior (10 €)']
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-calc-senior-amount',
                          content: ['20 €']
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-calc-delimeter',
                      content: []
                    },
                    {
                      tag: 'div',
                      className: 'modal-right-calc-total-wrapper',
                      content: [
                        {
                          tag: 'p',
                          className: 'modal-right-calc-total-text',
                          content: ['Total:']
                        },
                        {
                          tag: 'p',
                          className: 'modal-right-calc-total-amount',
                          content: ['60 €']
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'div',
                  className: 'card-wrapper',
                  content: [
                    {
                      tag: "div",
                      className: 'card-img-wrapper',
                      content: [
                        {
                          tag: 'img',
                          className: 'card-visa-img',
                          img: './assets/modal/visa.svg',
                          alt: 'visa logo',
                          content: []
                        },
                        {
                          tag: 'img',
                          className: 'card-master-img',
                          img: './assets/modal/mastercard.svg',
                          alt: 'master logo',
                          content: []
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'card-number-wrapper',
                      content: [
                        {
                          tag: 'p',
                          className: 'card-number-text',
                          content: ['Card number']
                        },
                        {
                          tag: 'input',
                          type: 'text',
                          className: 'card-number-input',
                          content: []
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'card-date-wrapper',
                      content: [
                        {
                          tag: 'p',
                          className: 'card-date-text',
                          content: ['Expiration date']
                        },
                        {
                          tag: 'div',
                          className: 'card-date-input-wrapper',
                          content: [
                            {
                              tag: 'input',
                              type: 'number',
                              value: 3,
                              className: 'card-date-input',
                              content: []
                            },
                            {
                              tag: 'input',
                              type: 'number',
                              value: 2024,
                              className: 'card-date-input',
                              content: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      className: 'card-name-wrapper',
                      content: [
                        {
                          tag: 'p',
                          className: 'card-name-text',
                          content: ['Cardholder name'],
                        },
                        {
                          tag: 'input',
                          type: 'text',
                          className: 'card-name-input',
                          content: []
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'div',
                  className: 'cardback-wrapper',
                  content: [
                    {
                      tag: 'div',
                      className: 'cardback-delimeter',
                      content: []
                    },
                    {
                      tag: 'p',
                      className: 'cardback-cvv-text',
                      content: ['CVC/CVV']
                    },
                    {
                      tag: 'input',
                      className: 'cardback-input',
                      type: 'text',
                      content: []
                    },
                    {
                      tag: 'p',
                      className: 'cardback-sec-text',
                      content: ['The last \n' +
                      '3 or 4 digits\n' +
                      'on back\n' +
                      'of the card']
                    }
                  ]
                },
                {
                  tag: 'button',
                  className: 'modal-submit-btn',
                  content: ['Book']
                }
              ]
            }
          ]
        }
      ]
    },
  ]
}

export default buyTicketContainer;