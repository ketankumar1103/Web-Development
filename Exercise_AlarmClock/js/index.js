console.log(`Exercise for making an Alarm Clock using pure Js.`);

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// function ringBell() {
//     audio.play();
// }

// const alarmSubmit = document.getElementById('alarmSubmit');
// alarmSubmit.addEventListener('click', setAlarm);
// function setAlarm(e) {
//     e.preventDefault();
//     const alarm = document.getElementById('alarm');
//     let alarmDate = new Date(alarm.value);
//     console.log(`setting alarm for ${alarmDate}...`);
//     let now = new Date();
//     console.log(`Current time ${now}...`);
//     let timeToAlarm = alarmDate - now;
//     if (timeToAlarm >= 0) {
//         setTimeout(() => {
//             ringBell();
//         }, timeToAlarm);
//     } else {
//         console.log(`Enter a valid time to set an alarm.`);
//     }
// }

const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
