import {playList} from "./playlist";


export class Player {
  constructor(dto) {
    this.state = false
    this.playBtn = document.querySelector('.play');
    this.duration = document.querySelector('.song-duration');
    this.currVolume = document.querySelector('#volume-output');
    this.volume = document.querySelector('.volume');
    this.audio = document.querySelector('.player');
    this.playlist = document.querySelector('.playlist');
    this.next = document.querySelector('.forward');
    this.prev = document.querySelector('.rewind');
    this.songDuration = document.querySelector('.song-dur');
    this.currTime = document.querySelector('.song-curr-time');
    this.songsArray = playList;
    this.trackName = document.querySelector('.track-name');
    this.soundBtn = document.querySelector('.volume-btn');
    this.secPlay = document.querySelector('.sec-play');
    this.curr = 0;
    this.mute = true;
    this.tmp = null;

    this.volume.addEventListener('input', (e) => {
      this.audio.volume = e.currentTarget.value / 100;
      this.currVolume.textContent = `${e.currentTarget.value}%`;
    })

    this.audio.addEventListener('timeupdate', () => {
      this.duration.value = Math.floor(this.audio.currentTime);
      this.currTime.textContent = this.calculateTime(Math.floor((100 / this.audio.duration) * this.audio.currentTime) || 0);
      if(Math.floor(this.audio.currentTime) === Math.floor(this.audio.duration)) {
        this.curr >= this.songsArray.length - 1 ? this.curr = 0 : this.curr += 1
        this.audio.src = this.songsArray[this.curr].src
        this.active(this.curr);
        this.showDuration()
        this.audio.play()
      }
    });

    this.duration.addEventListener('input', () => {
      this.currTime.textContent = this.calculateTime(this.duration.value);
    });

    this.soundBtn.addEventListener('click', (e) => {
      if(!this.tmp) this.tmp = this.audio.volume
      this.mute = !this.mute;
      if(this.mute) {
        this.soundBtn.innerHTML = `<svg class="volume-svg" width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.48,47.39a2.46,2.46,0,0,1-1.82-.81L11.77,31.5H10.5A7.5,7.5,0,0,1,3,23.77a7.71,7.71,0,0,1,7.79-7.27h1L25.66,1.43A2.5,2.5,0,0,1,30,3.12V44.88a2.45,2.45,0,0,1-1.59,2.33A2.55,2.55,0,0,1,27.48,47.39ZM10.79,17.5A6.7,6.7,0,0,0,4,23.8a6.5,6.5,0,0,0,6.5,6.7H12a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23a0.5,0.5,0,0,1-.37.16H10.79Z"/>
            <path d="M35,34a0.5,0.5,0,0,1,0-1,9,9,0,0,0,0-18,0.5,0.5,0,0,1,0-1A10,10,0,0,1,35,34Z"/>
            <path d="M35,28.5a0.5,0.5,0,0,1,0-1,3.5,3.5,0,0,0,0-7,0.5,0.5,0,0,1,0-1A4.5,4.5,0,0,1,35,28.5Z"/>
            <rect width="30" height="30" fill="none"/>
          </svg>`
        this.audio.volume = this.tmp
        this.volume.value = this.tmp * 100
        this.currVolume.textContent = `${this.tmp * 100}%`
        this.tmp = null;
      } else {
        this.soundBtn.innerHTML = `<svg class="volume-svg" width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M26.93,47.39a2.46,2.46,0,0,1-1.82-.81L11.22,31.5H10a7.5,7.5,0,0,1-7.5-7.73,7.71,7.71,0,0,1,7.79-7.27h1L25.11,1.43a2.5,2.5,0,0,1,4.34,1.69V44.88a2.45,2.45,0,0,1-1.59,2.33A2.56,2.56,0,0,1,26.93,47.39ZM10.25,17.5a6.7,6.7,0,0,0-6.79,6.3A6.5,6.5,0,0,0,10,30.5h1.49a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23a0.5,0.5,0,0,1-.37.16H10.25Z"/>
<path d="M35.86,29.1a0.5,0.5,0,0,1-.35-0.85l9.19-9.19a0.5,0.5,0,0,1,.71.71l-9.19,9.19A0.5,0.5,0,0,1,35.86,29.1Z"/>
<path d="M45,29.1a0.5,0.5,0,0,1-.35-0.15L35.5,19.76a0.5,0.5,0,0,1,.71-0.71l9.19,9.19A0.5,0.5,0,0,1,45,29.1Z"/>
<rect width="30" height="30" fill="none"/></svg>`
        this.audio.volume = 0
        this.volume.value = 0
        this.currVolume.textContent = `${0}%`
      }
    })

    this.duration.addEventListener('change', () => {
      this.audio.currentTime = this.duration.value;
    });


    this.playlist.addEventListener('click', (e) => {
      const [song, num] = e.target.classList;
      console.log(e.target)
      this.curr = Number(num)
      this.audio.src = this.songsArray[this.curr].src
      this.state = !this.state;
      console.log(this.state)
      this.active(this.curr);
      e.target.classList.add('song-active');
        this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
</svg>`
      e.target.children[0].innerHTML =
        `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 64 64">
          <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
        </svg>`
      console.log(e.target.children[0])
      this.showDuration()
      this.audio.play()
    })

    this.songsArray.forEach((song, idx) => {
      const elem = document.createElement('li');
      if(idx === 0) elem.classList.add('song-active')
      elem.innerHTML = `<div class="sec-play">
<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 64 64">
            <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32
             58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM24 18l24 14-24 14z">
            </path>
          </svg>
</div> ${song.title} (${song.duration})`;
      elem.classList.add('song');
      elem.classList.add(`${idx}`);
      this.playlist.append(elem);
    })

    this.playBtn.addEventListener('click', (e) => {
      this.play()
    })

    this.next.addEventListener('click', (e) => {
      this.curr >= this.songsArray.length - 1 ? this.curr = 0 : this.curr += 1
      this.audio.src = this.songsArray[this.curr].src
      this.state = !this.state;
      this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
</svg>`
      this.active(this.curr);
      this.showDuration()
      this.audio.play()
    })

    this.prev.addEventListener('click', (e) => {
      this.curr <= 0 ? this.curr = this.songsArray.length - 1 : this.curr -= 1
      this.audio.src = this.songsArray[this.curr].src
      this.state = !this.state;
      this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
</svg>`
      this.active(this.curr)
      this.showDuration()
      this.audio.play()
    })
  }

  play = () => {
    this.state = !this.state;
    this.state === true ? this.audio.play() : this.audio.pause()
    if(!this.state) {
      this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
            <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32
             58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM24 18l24 14-24 14z">
            </path>
          </svg>`
    } else {
      this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
</svg>`
    }
  }

  active = (curr) => {
     const arr = Array.from(this.playlist.getElementsByClassName('song'));
     arr.forEach((ele) => {
       ele.classList.remove('song-active');
       ele.children[0].innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 64 64">
            <path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32
             58c-14.359 0-26-11.641-26-26s11.641-26 26-26 26 11.641 26 26-11.641 26-26 26zM24 18l24 14-24 14z">
            </path>
          </svg>`
     })
    this.fromStart()
    this.trackName.textContent = this.songsArray[curr].title
    arr[curr].classList.add('song-active');
  }

  calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }

  displayDuration = () => {
    this.songDuration.textContent = this.calculateTime(this.audio.duration);
  }

  showDuration = () => {
    if (this.audio.readyState > 0) {
      this.displayDuration();
      this.setMax();
    } else {
      this.audio.addEventListener('loadedmetadata', () => {
        this.displayDuration();
        this.setMax();
      });
    }
    }

  setMax = () => {
    this.duration.max = Math.floor(this.audio.duration);
  }

  fromStart = () => {
    this.duration.value = 0
    this.currTime.textContent = this.calculateTime(this.duration.value);
  }
}