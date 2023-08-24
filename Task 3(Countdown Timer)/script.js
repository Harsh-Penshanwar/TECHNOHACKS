const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

let countdownInterval;
let initialTime = 10; // Set your desired initial countdown time in seconds
let remainingTime = initialTime;
let isRunning = false;

function updateDisplay(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timeDisplay.textContent = formattedTime;
}

function startCountdown() {
  countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay(remainingTime);
    } else {
      remainingTime = initialTime;
      updateDisplay(remainingTime);
    }
  }, 1000);
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startCountdown();
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  remainingTime = initialTime;
  updateDisplay(remainingTime);
});
