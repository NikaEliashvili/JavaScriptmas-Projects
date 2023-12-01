const countdownHeader = document.getElementById("countdown-header");
const inputHeader = document.getElementById("input-header");
const inputDate = document.getElementById("input-date");
const submitBtn = document.getElementById("submit-btn");
const countdownDisplay = document.getElementById("countdown-display");
const countdownHoursDisplay = document.getElementById(
  "countdown-hours-display"
);

let intervalId;

function getInputValues() {
  const userDate = inputDate.value;
  const defaultChristmasDate = new Date(new Date().getFullYear(), 11, 25);

  // Change Header Dynamically
  countdownHeader.textContent = inputHeader.value || "Christmas Countdown 🎄";

  // Clear previous interval if any
  clearInterval(intervalId);

  if (userDate) {
    // If user provided a date, use it
    renderCountdown(new Date(userDate));
  } else {
    // If no date provided, default to Christmas
    renderCountdown(defaultChristmasDate);
  }

  // Set interval to update the countdown every second
  intervalId = setInterval(function () {
    if (userDate) {
      renderCountdown(new Date(userDate));
    } else {
      renderCountdown(defaultChristmasDate);
    }
  }, 1000);
}

function renderCountdown(tillSomeDay) {
  const today = new Date();

  const timeDifference = tillSomeDay - today;

  if (timeDifference < 0) {
    // Handle case where selected date is in the past
    countdownDisplay.textContent = 0;
    countdownHoursDisplay.textContent = "00:00:00";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownDisplay.textContent = `${days}`;
  countdownHoursDisplay.textContent = `${formatWithLeadingZero(
    hours
  )}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`;
}

function formatWithLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

submitBtn.addEventListener("click", getInputValues);

// Initialize with default Christmas countdown
getInputValues();
