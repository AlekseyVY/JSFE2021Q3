

const ticketCount = () => {
  const ticketType = document.getElementsByClassName('ticket-buy-radio-container')[0];
  const minus = Array.from(document.getElementsByClassName('ticket-selector-content-minus'));
  const mWrap = Array.from(document.getElementsByClassName('ticket-selector-content-minus-wrapper'));
  const plus = Array.from(document.getElementsByClassName('ticket-selector-content-plus'));
  const pWrap = Array.from(document.getElementsByClassName('ticket-selector-content-plus-wrapper'));
  const total = document.getElementsByClassName('ticket-buy-select-content-total')[0];

  let cost = 40;

  const valueObj = {
    'Permanent exhibition': 40,
    'Temporary exhibition': 25,
    'Combined Admission': 20
  }

  const calculate = () => {


    const ticketsAmount = document.getElementsByClassName('ticket-selector-content-amount');
    let basic = ticketsAmount[0].value;
    let senior = ticketsAmount[1].value;
    console.log(basic)
    console.log(senior)
    setTimeout(() => {
      total.innerHTML = String((Number(basic) + Number(senior)) * cost);
    }, 1)

  }

  plus.forEach((item, index) => {
    item.addEventListener('click', () => {
      calculate()
    })
  })

  pWrap.forEach((item) => {
    item.addEventListener('click', () => {
      calculate()
    })
  })

  mWrap.forEach((item) => {
    item.addEventListener('click', () => {
      calculate()
    })
  })

  minus.forEach((item, index) => {
    item.addEventListener('click', () => {
      calculate()
    })
  })


  ticketType.addEventListener('click', (e) => {
    cost = valueObj[e.target.textContent]
  })

}

export default ticketCount;