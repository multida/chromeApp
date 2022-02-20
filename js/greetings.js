const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {//인풋태그에서 받은 값을 저장해서 반환해서 화면에 보여준다.
  event.preventDefault(); //기본 브라우저의 기능을 막아준다 (여기서는 submin의 제출기능 - 새로고침을 막아준다.)
  loginForm.classList.add(HIDDEN_CLASSNAME); //기존에 있던 .hidden클래스를 추가해준다.  - 폼태그 삭제
	const username = loginInput.value; // 인풋태그에 적은 값이 username으로 치환 (저장)
  localStorage.setItem(USERNAME_KEY, username); //localStorage 는 미니 DB API이다. username을 설정해서 저장해준다. 
  paintGreetings(username); // paintGreetigns 함수 실행 ( username 이라는 인자를 받음? )
}

function paintGreetings(username) {//텍스트를 화면에 보여지게 하는 함수
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1에 .hiddne 클랙스 삭제 - h1태그 살아남
  greeting.innerText = `Hello ${username}`; //h1안에 있는 텍스트 나옴. (username의 값과 함께)
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //이 자바스립트의 첫 실행

if(savedUsername === null) { //만약에 savedUsername의 값이 null값이라면? 아래 실행
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); //.hidden 클래스 삭제 - 폼 보여짐
  loginForm.addEventListener("submit", onLoginSubmit); //폼태그의 제출기능의 함수 호출된다.  onLoginSubmit() 함수로 이동
  
} else { //그렇지 않고 savedUsername의 값이 있다?! 하면 아래 실행 
  //show the greeting
  paintGreetings(savedUsername); /// paintGreetigns 함수 실행 ( savedUsername 이라는 인자를 받음? )
}