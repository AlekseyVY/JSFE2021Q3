

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


  const phone = document.getElementsByClassName('modal-form-tel')[0];
  const phoneError = document.getElementsByClassName('phone-error')[0];
  phone.addEventListener('input', (e) => {
    const test = new RegExp(/^([0-9]{2,3})$|^([0-9]{2,3}([-]|[ ])[0-9]{2,3})$|^([0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3})$|^([0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3})$|^([0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3}([-]|[ ])[0-9]{2,3})$/, 'gim');
    const value = e.target.value
    const secTest = new RegExp(/^([0-9]{2,10})$/, 'igm');
    if((value.match(test) && (value.replaceAll('-','').length <= 10 || value.replaceAll(' ','').length <= 10 )) || value.match(secTest)) {
      phoneError.style.display = 'none';
      phone.style.borderColor = 'black'
      phone.style.outlineColor = 'black';
    } else {
      phoneError.style.display = 'block';
      phone.style.borderColor = 'red'
      phone.style.outlineColor = 'red';
    }
  })

}

export default validation;