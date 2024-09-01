let starttime = 0;
let elapsedtime = 0;
let timerinterval;
const display = document.getElementById('display');
const startstopbutton = document.getElementById('startstopbutton');
const lapbutton = document.getElementById('lapbutton');
const resetbutton = document.getElementById('resetbutton');
const laps = document.getElementById('laps');

function timetostring(time) {
    let differenceinhrs = time / 3600000;
    let hrs = Math.floor(differenceinhrs);

    let differenceinmin = (differenceinhrs - hrs) * 60;
    let min = Math.floor(differenceinmin);

    let differenceinsec = (differenceinmin - min) * 60;
    let sec = Math.floor(differenceinsec);

    let differenceinms = (differenceinsec - sec) * 100;
    let ms = Math.floor(differenceinms);

    let formattedHRS = hrs.toString().padStart(2, "0");
    let formattedMIN = min.toString().padStart(2, "0");
    let formattedSEC = sec.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedHRS}:${formattedMIN}:${formattedSEC}.${formattedMS}`;
}
function startstop() {
    if (startstopbutton.textContent === "Start") {
        starttime = Date.now() - elapsedtime;
        timerinterval = setInterval(function printTime() {
            elapsedtime = Date.now() - starttime;
            display.textContent = timetostring(elapsedtime);
        }, 10);
        startstopbutton.textContent = "Stop";
        lapbutton.disabled = false;
        resetbutton.disabled = false;
    } else {
        clearInterval(timerinterval);
        startstopbutton.textContent = "Start";
    }
}
function reset() {
    clearInterval(timerinterval);
    display.textContent = "00:00:00.00";
    startstopbutton.textContent = "Start";
    elapsedtime = 0;
    laps.innerHTML = "";
    lapbutton.disabled = true;
    resetbutton.disabled = true;
}
function lap() {
    const li = document.createElement("li");
    li.textContent = timetostring(elapsedtime);
    laps.appendChild(li);
}
startstopbutton.addEventListener("click", startstop);
resetbutton.addEventListener("click", reset);
lapbutton.addEventListener("click", lap);
