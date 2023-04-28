const LABEL = document.querySelector("label");
const CLEAR = document.querySelector('.clear');
const LOGGER = document.querySelector('.log');
const BACKLOG = document.querySelector('.backlog');

const LOG = [];
let current;

const PRINT_OUT = position => {
  const {
    accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    latitude,
    longitude,
    speed } =
  position.coords;

  LABEL.innerText = JSON.stringify(
  {
    accuracy,
    altitude,
    altitudeAccuracy,
    latitude,
    heading,
    longitude,
    speed },

  undefined,
  2);

  current = LABEL.innerText;
};

let watcherID;
if ("geolocation" in navigator) {
  // Do cool things!
  navigator.geolocation.getCurrentPosition(PRINT_OUT, () => {}, {
    enableHighAccuracy: true });

  watcherID = navigator.geolocation.watchPosition(PRINT_OUT, () => {}, {
    enableHighAccuracy: true });

}

const LOG_IT = () => {
  // Take the current
  LOG.push(current);
  BACKLOG.innerHTML = '';
  for (const entry of LOG) {
    const ENTRY = document.createElement('li');
    ENTRY.innerText = entry;
    BACKLOG.appendChild(ENTRY);
  }
};

const LOG_OFF = () => {
  LOG.length = 0;
  BACKLOG.innerHTML = '';
};


LOGGER.addEventListener('click', LOG_IT);
CLEAR.addEventListener('click', LOG_OFF);