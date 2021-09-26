

const timePicker = () => {
  const dateField = document.getElementsByClassName('modal-form-time')[0];
  const clearField = document.getElementsByClassName('modal-form-time-text')[0];
  dateField.addEventListener('change', (event) => {
    dateField.classList.add('has-value');
    clearField.classList.remove('modal-form-time-text');
    clearField.classList.add('none');
  })
}

export default timePicker;