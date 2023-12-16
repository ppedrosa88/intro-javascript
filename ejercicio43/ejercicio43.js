/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
*/
function relojInfinito() {
  
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  
  setInterval(() => {
    let secondsString = "";
    let minutesString = "";
    let hoursString = "";
    seconds++;
    
    if(seconds < 10) {
      secondsString = "0" + seconds.toString();
    } else {
      secondsString = seconds.toString();
    }
    
    if(minutes < 10) {
      minutesString = "0" + minutes.toString();
    } else {
      minutesString = minutes.toString();
    }
    
    if(hours < 10) {
      hoursString = "0" + hours.toString();
    } else {
      hoursString = hours.toString();
    }

    if(seconds === 59) {
      seconds = -1;
      minutes++;
    }

    if(minutes === 59 && seconds === 0) {
      minutes = -1
      hours++
    }

    if(hours === 23 && minutes === 0) {
      hours = -1  
    }
    
    console.log(`${hoursString}:${minutesString}:${secondsString}`);
    
  }, 1000);
  
}

module.exports = { relojInfinito };
