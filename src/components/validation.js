

const validation = () => {
  const name = document.getElementsByClassName('modal-form-name')[0];
  const nameError = document.getElementsByClassName('name-error')[0];


  name.addEventListener('input', (e) => {
    const test = new RegExp(/^([A-Za-z][A-Za-z]{2,14}$)|^([а-яА-ЯёЁ][а-яА-ЯёЁ]{2,14}$)/, 'gimu');
    const value = e.target.value
    if(value.match(test)) {
      nameError.classList.add('none');
    } else {
      nameError.classList.remove('none');
    }

    // /^([A-Za-z][A-Za-z]{2,14}$)|^([а-яА-ЯёЁ][а-яА-ЯёЁ]{2,14}$)/gimu
  })
}

export default validation;