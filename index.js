function handleFetchTime() {
  const timeElement = document.querySelector(".time");
  const now = new Date();
  const utcTime = now.toISOString().split("T")[1].split(".")[0];
  timeElement.textContent = utcTime;
}

handleFetchTime();
setInterval(handleFetchTime, 1000);
