const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;

function changeLight() {
  lights.forEach(light => {
    light.classList.remove('active');
  });

  lights[currentLightIndex].classList.add('active');
  currentLightIndex = (currentLightIndex + 1) % lights.length;
}

function cycleLights() {
  setInterval(() => {
    changeLight();
  }, Math.floor(Math.random() * 3000) + 6000); // Random interval between 6 to 9 seconds
}

cycleLights();

