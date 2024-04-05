const timeDOM = document.querySelector(".timerDisplay");
const start = document.getElementById("startTimer");
const stopDOM = document.getElementById("stopTimer")
const fixDOM = document.getElementById("fixTimer")

const resetDOM = document.getElementById("resetTimer")
const fixedDOM = document.getElementById("fixTimer")
const timeList = document.getElementById("timelist")

let [milisec, sec, min, hours] = [0, 0, 0, 0];

let timerID;
start.addEventListener("click", () => {
    timerID = setInterval(displayTimer, 10);
});


stopDOM.addEventListener("click", () => {
    clearInterval(timerID);
});

let fixedTime = [];
fixDOM.addEventListener("click", () => {
    const newTime = timeDOM.textContent;
    fixedTime.push(newTime);
    showTime();
});

const showTime = () => {
    timeList.innerHTML = "";
    fixedTime.forEach((t, i) => {
        let newFixedTime = document.createElement("li");
        newFixedTime.className = "list-group-item";
        newFixedTime.textContent = `${i + 1} ${t}`;
        timeList.appendChild(newFixedTime);
    })
}

resetDOM.addEventListener("click", () => {
    clearInterval(timerID);
    timeDOM.innerHTML = "00 : 00 : 00 : 000";
    // istrinti li elementus
    timeList.innerHTML = "";
});

function displayTimer() {
    milisec += 10;
    if (milisec == 1000) {
        milisec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hours++;
            }
        }
    }
    timeDOM.innerHTML = `${String(hours).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(milisec).padStart(2, '0')}`;
}



