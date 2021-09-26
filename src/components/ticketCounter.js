

const ticketCounter = () => {
  const btnBlock = document.getElementsByClassName('ticket-selector-content-wrapper');
  for(let ele of btnBlock) {
    const data = ele.getElementsByClassName('ticket-selector-content-amount')[0];
    ele.addEventListener('click', (e) => {
      e.preventDefault()
      if(e.target.classList.value === 'ticket-selector-content-minus-wrapper' || e.target.classList.value === 'ticket-selector-content-minus'){
        data.value = Number(data.value) >= 1 ? Number(data.value) - 1 : 0;
      }
      if(e.target.classList.value === 'ticket-selector-content-plus-wrapper' || e.target.classList.value === 'ticket-selector-content-plus'){
        data.value = Number(data.value) < 20 ? Number(data.value) + 1 : 20;
      }
    })
  }
}

export default ticketCounter;