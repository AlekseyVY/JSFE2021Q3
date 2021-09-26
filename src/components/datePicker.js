


const datePicker = () => {
  const dateField = document.getElementsByClassName('modal-form-date')[0];
  const clearField = document.getElementsByClassName('modal-form-date-img-placeholder')[0];
  dateField.addEventListener('change', (event) => {
    dateField.classList.add('has-value');
    clearField.classList.remove('modal-form-date-img-placeholder');
    clearField.classList.add('none');
    console.log(event)
  })
}

export default datePicker;