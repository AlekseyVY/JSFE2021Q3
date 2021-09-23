


const videoControlsStyle = async () => {
  const a = Array.from(document.querySelectorAll('input[type="range"]')).map((ele) => {
    ele.style.background = `linear-gradient(to right, #710707 0%, #710707 ${ele.value}%, #C4C4C4 ${ele.value}%, #C4C4C4 100%)`
    ele.addEventListener('input', function() {
      const value = this.value;
      this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    })
  })
}

export default videoControlsStyle;