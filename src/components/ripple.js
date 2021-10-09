


const rippleEffect = () => {
  const button = document.getElementsByClassName('modal-submit-btn')[0]
  button.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'
    button.appendChild(circle)
    setTimeout(() => circle.remove(), 1000)
  })
}

export default rippleEffect;