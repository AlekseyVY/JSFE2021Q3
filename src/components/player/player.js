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
    this.curr = 0;

    this.volume.addEventListener('input', (e) => {
      this.audio.volume = e.currentTarget.value / 100;
      this.currVolume.textContent = `${e.currentTarget.value}%`;
    })

    this.audio.addEventListener('timeupdate', () => {
      this.duration.value = Math.floor(this.audio.currentTime);
      this.currTime.textContent = this.calculateTime(Math.floor((100 / this.audio.duration) * this.audio.currentTime) || 0);
    });

    this.duration.addEventListener('input', () => {
      this.currTime.textContent = this.calculateTime(this.duration.value);
    });


    this.duration.addEventListener('change', () => {
      this.audio.currentTime = this.duration.value;
    });


    this.playlist.addEventListener('click', (e) => {
      const [song, num] = e.target.classList;
      this.curr = Number(num)
      this.audio.src = this.songsArray[this.curr].src
      this.state = !this.state;
      this.active(this.curr);
      e.target.classList.add('song-active');
        this.playBtn.innerHTML = `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM32 58c-14.359 0-26-11.641-26-26s11.641-26 
26-26 26 11.641 26 26-11.641 26-26 26zM20 20h8v24h-8zM36 20h8v24h-8z"></path>
</svg>`
      this.showDuration()
      this.audio.play()
    })

    this.songsArray.forEach((song, idx) => {
      const elem = document.createElement('li');
      if(idx === 0) elem.classList.add('song-active')
      elem.innerText = `${idx + 1} - ${song.title} (${song.duration})`;
      elem.classList.add('song');
      elem.classList.add(`${idx}`)
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
     })
    this.fromStart()
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