import ticketModal from "./ticketModal";


const ticketCount = () => {
  const totalTicket = document.getElementById('tickets-total');

  const forty = document.getElementById('40');
  const twentyFive = document.getElementById('25');
  const twenty = document.getElementById('20');

  const bMinus = document.getElementById('basic-minus');
  const bPlus = document.getElementById('basic-plus');
  const bTotal = document.getElementById('basic-total');

  const sMinus = document.getElementById('senior-minus');
  const sPlus = document.getElementById('senior-plus');
  const sTotal = document.getElementById('senior-total');

  const totalT = document.getElementById('tickets-total');

  const pushUpdate = document.getElementsByClassName('ticket-buy-form-submit')[0];

  let  vObj;
    vObj = JSON.parse(localStorage.getItem('vObj'));
  if(vObj) {
    totalT.innerText = String(vObj['total']);
    sTotal.value = vObj['sTotal'];
    bTotal.value = vObj['bTotal'];
    document.getElementById(vObj['tType']).children[0].checked = true;
  } else {
    vObj = {
      'cost': 40,
      'sTotal': 0,
      'bTotal': 0,
      'tType': '40',
      'total': 0
    }
    localStorage.setItem('vObj', JSON.stringify(vObj));
  }

  forty.addEventListener('click',(e) => {
    vObj['cost'] = 40;
    vObj['tType'] = '40';
    calculate()
  })

  twentyFive.addEventListener('click',(e) => {
    vObj['cost'] = 25;
    vObj['tType'] = '25';
    calculate()
  })

  twenty.addEventListener('click',(e) => {
    vObj['cost'] = 20;
    vObj['tType'] = '20';
    calculate()
  })

  const calculate = () => {
    const data = (Number(bTotal.value) * vObj['cost']) + (Number(sTotal.value) * (vObj['cost'] / 2));
    vObj['total'] = data;
    localStorage.setItem('vObj', JSON.stringify(vObj));
    totalTicket.innerText = String(data)
    console.log(vObj)
  }

  sPlus.addEventListener('click',(e) => {
    if(Number(sTotal.value) < 20) sTotal.value = Number(sTotal.value) + 1;
    vObj['sTotal'] = sTotal.value;
    calculate()
  })

  sMinus.addEventListener('click',(e) => {
    if(Number(sTotal.value) > 0) sTotal.value = Number(sTotal.value) - 1;
    vObj['sTotal'] = sTotal.value;
    calculate()
  })

  bPlus.addEventListener('click',(e) => {
    if(Number(bTotal.value) < 20) bTotal.value = Number(bTotal.value) + 1;
    vObj['bTotal'] = bTotal.value;
    calculate()
  })

  bMinus.addEventListener('click',(e) => {
    if(Number(bTotal.value) > 0) bTotal.value = Number(bTotal.value) - 1;
    vObj['bTotal'] = bTotal.value;
    calculate()
  })


  pushUpdate.addEventListener('click', (e) => {
    ticketModal(vObj)
  })
}

export default ticketCount;