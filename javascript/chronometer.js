class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.running = false;
    this.currentTimeMilliSecond = 0;
    this.intervalIdMilliSecond = 0;
  }

  addMilliSecond = () => {
    this.currentTimeMilliSecond++
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
    }, 1000);
  }


  startClickMilliSecond() {
    this.intervalIdMilliSecond = setInterval(this.addMilliSecond, 10)
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return Math.floor(this.currentTimeMilliSecond - this.getSeconds() * 100) % 60;
  }


  twoDigitsNumber(a) {
    return a < 10 ? a = "0" + a : a += "";

    // if (a < 10){
    //   a = "0" + a;
    // } else {
    //   a += '';
    // }
    // return a;
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliSecond)
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilliSecond = 0
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + " "
    + this.twoDigitsNumber(this.getSeconds()) + " "
    + this.twoDigitsNumber(this.getMilliSeconds())
  }


}