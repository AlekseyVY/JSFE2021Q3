


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
          lazy: true,
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
                      lazy: true,
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
                              tag: 'div',
                              className: 'modal-form-date-wrapper',
                              content: [
                                {
                                  tag: 'img',
                                  className: 'modal-form-date-img',
                                  img: './assets/modal/inputs/calendar.svg',
                                  alt: 'Calendar',
                                  lazy: true,
                                  content: []
                                },
                                {
                                  tag: 'p',
                                  className: 'modal-form-date-img-placeholder',
                                  content: ['Date']
                                },
                                {
                                  tag: 'img',
                                  className: 'modal-form-date-arrow',
                                  img: './assets/modal/inputs/arrow.svg',
                                  alt: 'arrow',
                                  lazy: true,
                                  content: []
                                },
                                {
                                  tag: 'input',
                                  type: 'date',
                                  placeholder: 'Date',
                                  className: 'modal-form-date',
                                  content: []
                                }
                              ]
                            },
                            {
                              tag: 'div',
                              className: 'modal-form-time-wrapper',
                              content: [
                                {
                                  tag: 'img',
                                  className: 'modal-form-time-img',
                                  img: './assets/modal/inputs/time.svg',
                                  alt: 'time',
                                  lazy: true,
                                  content: []
                                },
                                {
                                  tag: 'img',
                                  className: 'modal-form-time-arrow',
                                  img: './assets/modal/inputs/arrow.svg',
                                  alt: 'arrow',
                                  lazy: true,
                                  content: []
                                },
                                {
                                  tag: 'p',
                                  className: 'modal-form-time-text',
                                  content: ['Time']
                                },
                                {
                                  tag: 'input',
                                  type: 'time',
                                  className: 'modal-form-time',
                                  content: []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          tag: 'div',
                          className: 'modal-form-name-wrapper',
                          content: [
                            {
                              tag: 'img',
                              className: 'modal-form-name-img',
                              img: './assets/modal/inputs/name.svg',
                              alt: 'name',
                              lazy: true,
                              content: []
                            },
                            {
                              tag: 'input',
                              type: 'text',
                              placeholder: 'Name',
                              className: 'modal-form-name',
                              content: []
                            }
                          ]
                        },
                        {
                          tag: 'div',
                          className: 'modal-form-email-wrapper',
                          content: [
                            {
                              tag: 'img',
                              className: 'modal-form-email-img',
                              img: './assets/modal/inputs/mail.svg',
                              alt: 'mail',
                              lazy: true,
                              content: []
                            },
                            {
                              tag: 'input',
                              type: 'email',
                              placeholder: 'E-mail',
                              className: 'modal-form-email',
                              content: []
                            }
                          ]
                        },
                        {
                          tag: 'div',
                          className: 'modal-form-tel-wrapper',
                          content: [
                            {
                              tag: 'img',
                              className: 'modal-form-tel-img',
                              img: './assets/modal/inputs/phone.svg',
                              alt: 'phone',
                              lazy: true,
                              content: []
                            },
                            {
                              tag: 'input',
                              type: 'tel',
                              placeholder: 'Phone',
                              className: 'modal-form-tel',
                              content: []
                            }
                          ]
                        },
                        {
                          tag: 'div',
                          className: 'modal-form-custom-select',
                          content: [
                            {
                              tag: 'img',
                              className: 'modal-form-select-img',
                              img: './assets/modal/inputs/check.svg',
                              alt: 'select',
                              lazy: true,
                              content: []
                            },
                            {
                              tag: 'img',
                              className: 'modal-form-select-img-arrow',
                              img: './assets/modal/inputs/arrow.svg',
                              alt: 'arrow',
                              lazy: true,
                              content: []
                            },
                            {
                              tag: 'select',
                              className: 'modal-form-select',
                              content: [
                                {
                                  tag: 'option',
                                  className: 'modal-form-select-option',
                                  value: '',
                                  selected: true,
                                  disabled: true,
                                  hidden :true,
                                  content: ['Ticket Type']
                                },
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
                      lazy: true,
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
                          lazy: true,
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
                          lazy: true,
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
                          lazy: true,
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
                          lazy: true,
                          content: []
                        },
                        {
                          tag: 'img',
                          className: 'card-master-img',
                          img: './assets/modal/mastercard.svg',
                          alt: 'master logo',
                          lazy: true,
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
                              tag: 'div',
                              className: 'card-number-left-wrapper',
                              content: [
                                {
                                  tag: 'img',
                                  className: 'card-number-left-img',
                                  img: './assets/modal/inputs/card_arrow.svg',
                                  lazy: true,
                                  alt: 'card arrows',
                                  content: []
                                },
                                {
                                  tag: 'input',
                                  type: 'number',
                                  value: '03',
                                  className: 'card-date-input',
                                  content: []
                                }
                              ]
                            },
                            {
                              tag: 'div',
                              className: 'card-number-left-wrapper',
                              content: [
                                {
                                  tag: 'img',
                                  className: 'card-number-left-img',
                                  img: './assets/modal/inputs/card_arrow.svg',
                                  lazy: true,
                                  alt: 'card arrows',
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
                            },
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