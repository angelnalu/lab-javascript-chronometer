var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var ol          = document.getElementsByClassName('ol');

// peguei 2 funcoes minutes e secondes;
function printTime() {
  let print = setInterval(()=> {
      printMinutes();
      printSeconds();
      printMilliseconds();
  },1000)
return print;
}

//mostro minutos na tela;
function printMinutes() {

  let minutes = chronometer.getMinutes();
  minutes = chronometer.twoDigitsNumber(minutes);
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}
//mostro segundos na tela;
function printSeconds() {

  let seconds = chronometer.getSeconds();
  seconds =  chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];

}


function printMilliseconds() {

  let milliSeconds = chronometer.getMilliseconds();
  milliSeconds = chronometer.twoDigitsNumber(milliSeconds);
  milUni.innerText = milliSeconds[1];
  milDec.innerText = milliSeconds[0];
}

//estou "printing" na tela minutos/ segundos e miliseconds -
function printSplit() {

  olElement = document.getElementById("splits");
  let inch = chronometer.getMinutes();
  let alla = chronometer.getSeconds();
  let millSec = chronometer.getMilliseconds();
  return (olElement.innerHTML += `<li>${chronometer.twoDigitsNumber(
    inch)} : ${chronometer.twoDigitsNumber(alla)} : ${chronometer.twoDigitsNumber(millSec)}</li>`);
}

function clearSplits() {

  chronometer.resetClick();
  olElement.innerHTML = "";
}

function setStopBtn() {

  btnLeft.classList.add('stop')
  btnLeft.classList.remove('start')
  btnLeft.innerHTML = 'STOP'
}


function setSplitBtn() {

  btnRight.classList.add('split')
  btnRight.classList.remove('reset')
  btnRight.innerHTML = 'SPLIT'
}


function setStartBtn() {

  btnLeft.classList.add('start')
  btnLeft.classList.remove('stop')
  btnLeft.innerHTML = 'START'
}

function setResetBtn() {

  btnRight.classList.add('reset')
  btnRight.classList.remove('split')
  btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (chronometer.currentTime === 0){
      setStopBtn()
      setSplitBtn()
      chronometer.startClick()
      chronometer.startClickMilliSecond()
    var id = setInterval(() => printTime(), 10)
      printTime()
  }else{
      setStartBtn()
      setResetBtn()
      chronometer.stopClick()
      printTime();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.className.includes("reset")) {
    clearSplits();
  } else {
    printSplit();
  }
});