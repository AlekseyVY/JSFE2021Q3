class Sound {
  constructor(dto) {
    this.dto = dto;
    this.game = './assets/sounds/game.mp3';
    this.win = './assets/sounds/won.mp3';
    this.lose = './assets/sounds/lose.mp3';
    this.data = null;
  }

  gameSound() {
    this.playSound(this.game);
  }

  winSound() {
    this.playSound(this.win);
  }

  loseSound() {
    this.playSound(this.lose);
  }

  playSound(data) {
    this.data = data;
    const audio = new Audio(this.data);
    audio.play();
  }
}

const sound = new Sound({});

export default sound;
