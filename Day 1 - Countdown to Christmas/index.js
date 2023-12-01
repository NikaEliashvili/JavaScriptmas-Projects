const countdownDisplay = document.getElementById("countdown-display")
const countdownHoursDisplay = document.getElementById("countdown-hours-display")
function renderCountdown(){

    // Calculate remaining time until Christmas
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // Month is 0-based (December is 11)
    const timeDifference = christmas - today;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    countdownDisplay.textContent = days
    countdownHoursDisplay.textContent = `${hours}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`
}

function formatWithLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}


 
setInterval(renderCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.