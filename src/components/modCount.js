const modCounte = () => {
  const btnBlock = document.getElementsByClassName('form-ticket-amount-wrapper-inner');
  for(let ele of btnBlock) {
    const data = ele.getElementsByClassName('form-ticket-amount-value')[0];
    ele.addEventListener('click', (e) => {
      e.preventDefault()
      if(e.target.classList.value === 'form-ticket-amount-minus-button'){
        data.value = Number(data.value) >= 1 ? Number(data.value) - 1 : 0;
      }
      if(e.target.classList.value === 'form-ticket-amount-plus-button'){
        data.value = Number(data.value) < 20 ? Number(data.value) + 1 : 20;
      }
    })
  }
}

export default modCounte;