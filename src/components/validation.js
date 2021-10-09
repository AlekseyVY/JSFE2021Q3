

const validation = () => {
  const name = document.getElementsByClassName('modal-form-name')[0];
  const nameError = document.getElementsByClassName('name-error')[0];
  name.addEventListener('input', (e) => {
    const test = new RegExp(/^([A-Za-z][A-Za-z]{2,14}$)|^([а-яА-ЯёЁ][а-яА-ЯёЁ]{2,14}$)/, 'gimu');
    const value = e.target.value
    if(value.match(test)) {
      nameError.style.display = 'none';
      name.style.outlineColor = 'black';
      name.style.borderColor = 'black'
    } else {
      name.style.borderColor = 'red'
      name.style.outlineColor = 'red';
      nameError.style.display = 'block';
    }
  })

  const mail = document.getElementsByClassName('modal-form-email')[0];
  const mailError = document.getElementsByClassName('email-error')[0];
  mail.addEventListener('input', (e) => {

    const test = new RegExp(/^([A-z-0-9_]{3,15}@[A-z]{4,15}.[A-z]{2,})$/, 'gim');
    const value = e.target.value
    if(value.match(test)) {
      mailError.style.display = 'none';
      mail.style.borderColor = 'black'
      mail.style.outlineColor = 'black';
    } else {
      mailError.style.display = 'block';
      mail.style.borderColor = 'red'
      mail.style.outlineColor = 'red';
    }
  })

}

export default validation;