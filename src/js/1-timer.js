import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const dataTime = document.querySelector("#datetime-picker");
const startBt = document.querySelector("button[data-start]");

const dataDays = document.querySelector('.value[data-days]')
const dataHours = document.querySelector('.value[data-hours]')
const dataMinuts = document.querySelector('.value[data-minutes]')
const dataSeconds = document.querySelector('.value[data-seconds]')

console.log(startBt.disabled);

let userSelectedDate = 0;
let timerInterval;

startBt.disabled = true;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
        iziToast.warning({
    title: 'Please choose a date in the future', });
    } else {
      startBt.classList.add('active-button');
          userSelectedDate = selectedDates[0];
      startBt.disabled = false;
      }
  },
};

flatpickr(dataTime, options);

startBt.addEventListener('click', startTimer)


function startTimer() {
  if (startBt.disabled) {
    return;
  } else {
    startBt.classList.remove('active-button')
    timerInterval = setInterval(() => {
      const currentTime = new Date();
      const deltaTime = userSelectedDate - currentTime;

      if (deltaTime <= 0) {
        clearInterval(timerInterval);
        return;
      }
        const time = convertMs(deltaTime);
        updateClock(time);
      }, 1000);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, "0")
}

function updateClock({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinuts.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}