console.log(`Exercise for wall clock.`);

function updateClock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    let timeOfDay = (currentTime < 12) ? "AM" : "PM";
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    currentMinutes = (currentMinutes < 10) ? "0" : "" + currentMinutes;
    currentMinutes = (currentSeconds < 10) ? "0" : "" + currentSeconds;

    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;


    document.getElementById('clock').innerHTML = currentTimeStr;

}