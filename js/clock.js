const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); 
  const minites = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minites}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);//매 5초마다 실행
