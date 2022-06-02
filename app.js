// Define Variables to Hold Seconds, Minutes and Hours Values.
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define Variables to Hold Display Values (00 : 00 : 00).
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define Variables to Hold setInterval Function.
let interval = null;

// Logic to Increment Time
function stopwatch() {
  seconds++;

  // Logic to Determine When to Start Incrementing Next Time Value (Seconds to Minutes to Hours).
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // If Seconds / Minutes / Hours is Only One Digit Add a Leading Zero.
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // Display Updated Time Values to UI.
  document.querySelector(".stopwatch-card").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// Logic for Start Button when "Clicked".
document.querySelector(".start-button").addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(stopwatch, 1000);
});

// Logic for Stop Button when "Clicked".
document.querySelector(".stop-button").addEventListener("click", () => {
  clearInterval(interval);
});

// Logic for Reset Button when "Clicked".
document.querySelector(".reset-button").addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".stopwatch-card").innerHTML = "00:00:00";
});
