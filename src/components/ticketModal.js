


const ticketModal = (vObj) => {
  const bFPlus = document.getElementById('form-basic-plus');
  const bFMinus = document.getElementById('form-basic-minus');
  const bFTotal = document.getElementById('form-basic-total');

  const sFPlus = document.getElementById('form-senior-plus');
  const sFMinus = document.getElementById('form-senior-minus');
  const sFTotal = document.getElementById('form-senior-total');

  const totalTicket = document.getElementsByClassName('modal-right-calc-total-amount')[0];
  const ticketType = document.getElementsByClassName('modal-right-info-check-txt')[0];
  const ticketTextTotalBasic = document.getElementsByClassName('modal-right-calc-basic-value')[0];
  const ticketTextTotalSenior = document.getElementsByClassName('modal-right-calc-senior-value')[0];
  const ticketBPrice = document.getElementsByClassName('modal-right-calc-basic-text')[0];
  const ticketSPrice = document.getElementsByClassName('modal-right-calc-senior-text')[0];
  const formBText = document.getElementById('form-basic-text');
  const formSText = document.getElementById('form-senior-text');
  const selector = document.getElementsByClassName('modal-form-select')[0];
  const totalBPrice = document.getElementsByClassName('modal-right-calc-basic-amount')[0];
  const totalSPrice = document.getElementsByClassName('modal-right-calc-senior-amount')[0];

  const [ closeBtn ] = document.getElementsByClassName('modal-close');

  var today = new Date().toISOString().split('T')[0];
  document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
  const ticketDate = document.getElementsByClassName('modal-form-date')[0];
  const totalTicketDate = document.getElementsByClassName('modal-right-info-date-txt ')[0];
  const tTypeSelect = document.getElementsByClassName('modal-form-select')[0];
  const timeSelect = document.getElementsByClassName('modal-form-time')[0];
  const timeTicket = document.getElementsByClassName('modal-right-info-time-txt')[0];

  const update = () => {
    vObj['total'] = (Number(vObj['bTotal']) * vObj['cost']) + (Number(vObj['sTotal']) * (vObj['cost'] / 2));
    sFTotal.value = Number(vObj['sTotal']);
    bFTotal.value = Number(vObj['bTotal']);
    ticketType.innerText = vObj['tType'] === '40' ? 'Permanent Exhibition' : vObj['tType'] === '25' ? 'Temporary Exhibition' : 'Combined Admission';
    totalTicket.innerText = String(vObj['total']);
    ticketTextTotalBasic.innerText = String(vObj['bTotal']);
    ticketTextTotalSenior.innerText = String(vObj['sTotal']);
    ticketBPrice.innerText = `Basic (${vObj['tType']} €)`;
    ticketSPrice.innerText = `Senior (${String(Number(vObj['tType'] / 2))} €)`;
    formBText.innerText = `Basic 18+ (${vObj['tType']} €)`;
    formSText.innerText = `Senior 65+ (${String(Number(vObj['tType'] / 2))} €)`;
    selector.value=vObj['tType'];
    totalBPrice.innerText = `${Number(vObj['bTotal']) * vObj['cost']} €`;
    totalSPrice.innerText = `${Number(vObj['sTotal']) * (vObj['cost'] / 2)} €`;
  }

  let int = setInterval(() => {
      update()
    },0)

  timeSelect.addEventListener('change', (e) => {
    console.log(e.target.value)
    const time = String(e.target.value);
    timeTicket.textContent = `${time[0]}${time[1]} : ${time[3]}${time[4]}`;
  })

  tTypeSelect.addEventListener('change', (e) => {
    vObj['tType'] = e.target.value;
    vObj['cost'] = e.target.value;
    update();
  })

  ticketDate.addEventListener('change', (event) => {
    const [week, month, day] =  String(new Date(event.target.value)).split(' ');
    const dateObj = {
      'Sun': 'Sunday',
      'Mon': 'Monday',
      'Tue': 'Tuesday',
      'Wed': 'Wednesday',
      'Thu': 'Thursday',
      'Fri': 'Friday',
      'Sat': 'Saturday',

      'Jan': 'January',
      'Feb': 'February',
      'Mar': 'March',
      'Apr': 'April',
      'May': 'May',
      'Jun': 'June',
      'Jul': 'July',
      'Aug': 'August',
      'Sep': 'September',
      'Oct': 'October',
      'Nov': 'November',
      'Dec': 'December'
    }
    totalTicketDate.innerText = `${dateObj[week]}, ${dateObj[month]} ${day < 10 ? String(day)[1] : day}`;
  })

  closeBtn.addEventListener('click', () => {
    clearInterval(int)
  })

  sFPlus.addEventListener('click',(e) => {
    e.preventDefault()
    if(Number(vObj['sTotal']) < 20) {
      vObj['sTotal'] = Number(vObj['sTotal']) + 1;
      update()
    }
  })

  sFMinus.addEventListener('click',(e) => {
    e.preventDefault()
    if(Number(vObj['sTotal']) > 0) {
      vObj['sTotal'] = Number(vObj['sTotal']) - 1;
      update()
    }
  })

  bFPlus.addEventListener('click',(e) => {
    e.preventDefault()
    if(Number(vObj['bTotal']) < 20) {
      vObj['bTotal'] = Number(vObj['bTotal']) + 1;
      update()
    }
  })

  bFMinus.addEventListener('click',(e) => {
    e.preventDefault()
    if(Number(vObj['bTotal']) > 0) {
      vObj['bTotal'] = Number(vObj['bTotal']) - 1;
      update()
    }
  })
}

export default ticketModal;