


const modal = () => {

 const [ submitBtn ] = document.getElementsByClassName('ticket-buy-form-submit');
 const [ modal ] = document.getElementsByClassName('modal-content')
 const [ closeBtn ] = document.getElementsByClassName('modal-close');
 const [ overlay ] = document.getElementsByClassName('modal-container');

 submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.add('modal-active')
  modal.classList.add('modal-active');
 })

 closeBtn.addEventListener('click', () => {
  overlay.classList.remove('modal-active')
  modal.classList.remove('modal-active');
 })

 overlay.addEventListener('click', (e) => {
  overlay.classList.remove('modal-active')
  modal.classList.remove('modal-active');
 })
}

export default modal;