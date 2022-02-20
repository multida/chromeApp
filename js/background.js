const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //html 태그를 만들어낸다. 

bgImage.src = `images/${chosenImage}`;  //img 태그 경로 설정
document.body.appendChild(bgImage); //body안에 넣어준다.