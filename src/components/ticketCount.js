

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


  let  valueObj;
    valueObj = JSON.parse(localStorage.getItem('valueObj'));
  if(valueObj) {
    console.log(valueObj)
    totalT.innerText = String(valueObj['total']);
    sTotal.value = valueObj['sTotal'];
    bTotal.value = valueObj['bTotal'];
    document.getElementById(valueObj['tType']).children[0].checked = true;
  } else {
    valueObj = {
      'cost': 40,
      'sTotal': 0,
      'bTotal': 0,
      'tType': '40',
      'total': 0
    }
  }


  forty.addEventListener('click',(e) => {
    valueObj['cost'] = 40;
    valueObj['tType'] = '40';
    calculate()
  })
  twentyFive.addEventListener('click',(e) => {
    valueObj['cost'] = 25;
    valueObj['tType'] = '25';
    calculate()
  })
  twenty.addEventListener('click',(e) => {
    valueObj['cost'] = 20;
    valueObj['tType'] = '20';
    calculate()
  })

  const calculate = () => {
    const data = (Number(bTotal.value) * valueObj['cost']) + (Number(sTotal.value) * (valueObj['cost'] / 2));
    valueObj['total'] = data;
    localStorage.setItem('valueObj', JSON.stringify(valueObj));
    totalTicket.innerText = String(data)
  }

  sPlus.addEventListener('click',(e) => {
    if(Number(sTotal.value) < 20) sTotal.value = Number(sTotal.value) + 1;
    valueObj['sTotal'] = sTotal.value;
    calculate()
  })

  sMinus.addEventListener('click',(e) => {
    if(Number(sTotal.value) > 0) sTotal.value = Number(sTotal.value) - 1;
    valueObj['sTotal'] = sTotal.value;
    calculate()
  })

  bPlus.addEventListener('click',(e) => {
    if(Number(bTotal.value) < 20) bTotal.value = Number(bTotal.value) + 1;
    valueObj['bTotal'] = bTotal.value;
    calculate()
  })

  bMinus.addEventListener('click',(e) => {
    if(Number(bTotal.value) > 0) bTotal.value = Number(bTotal.value) - 1;
    valueObj['bTotal'] = bTotal.value;
    calculate()
  })
}

export default ticketCount;