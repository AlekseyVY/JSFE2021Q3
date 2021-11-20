import settingsState from '../state/settingsState';

/**
 * Sound module
 * @module Sound
 */
class Sound {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    this.dto = dto;
    this.game = './assets/sounds/game.mp3';
    this.win = './assets/sounds/won.mp3';
    this.lose = './assets/sounds/lose.mp3';
    this.data = null;
  }

  /**
   * Plays sound for winning round
   * @method gameSound
   */
  gameSound() {
    this.playSound(this.game);
  }

  /**
   * plays sound for correct answer.
   * @method winSound
   */
  winSound() {
    this.playSound(this.win);
  }

  /**
   * plays sound for wrong answer.
   * @method loseSound
   */
  loseSound() {
    this.playSound(this.lose);
  }

  /**
   * Handler for playing sound logic.
   * @method playSound
   * @param {strinf} data url .mp3 file
   */
  playSound(data) {
    this.data = data;
    const audio = new Audio(this.data);
    audio.volume = Number(settingsState.state.volume) / 100;
    audio.play();
  }
}

const sound = new Sound({});

export default sound;
