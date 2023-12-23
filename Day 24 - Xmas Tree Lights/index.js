/**
 * 🎄 Challenge:
 * 1. The Christmas tree's lights should switch
 *    on and off every 800 miliseconds.
 *
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/

const allRedLights = document.querySelectorAll(".red");
const allBlueLights = document.querySelectorAll(".blue");
let isRedOn = false;
setInterval(() => {
  if (isRedOn) {
    isRedOn = false;
    allRedLights.forEach((light) => {
      light.classList.remove("lights-on");
    });
    allBlueLights.forEach((light) => {
      light.classList.add("lights-on");
    });
  } else {
    isRedOn = true;
    allRedLights.forEach((light) => {
      light.classList.add("lights-on");
    });
    allBlueLights.forEach((light) => {
      light.classList.remove("lights-on");
    });
  }
}, 800);
