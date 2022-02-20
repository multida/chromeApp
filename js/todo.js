const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
// const toDos = [];
let toDos = [];

function saveToDos() {//toDos 배열 내용을 localStorage에 넣는 함수
  localStorage.setItem("toDos", JSON.stringify(toDos)) //JSON.stringify(): 어떤 코드든 string으로 만들어버림 
}

function deleteToDo(event) {// 투두리스트를 지워주는 함수
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo는 DB에 있는 요소 중 하나 (로컬스토리지에 있는 요소 중 하나 ) , 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다. 
  saveToDos();
}

function paintToDo(newToDo) { //todo를 나타내는 함수 (처음에는 나타나느게 없기 때문에 인자만 넣어준다 = newToDo)
  const li = document.createElement("li");
  li.id = newToDo.id; //각각의 id로 li item을 구별 (id 생성)
  const span = document.createElement("span");
  span.innerText = newToDo.text; //span에 내가 작성한 할일(텍스트) 넣기
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); //li안에 span넣기 ( 할일은 span안에 넣는다. 삭제 버튼도 만들어야 하기 때문에 span으로 감쌈)
  li.appendChild(button);//li안에 button넣기 (리스트 삭제)
  
  toDoList.appendChild(li); //ul안에 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; //value값이 newToDo에 저장됨 
  toDoInput.value = ""; // 기존에 있는 value를 지워라 (단, 위에 newToDo에는 지장 없음)
  const newToDobj = { //텍스트가 아닌 객체로 
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newToDobj); //toDos 배열에 하나씩 추가하여 넣는다
  paintToDo(newToDobj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos) //JSON.parse() : 텍스트였던 걸 배열로 바꾸어 줌 
  toDos = parsedToDos; //전에 있던 toDo 복원

  parsedToDos.forEach(paintToDo); 
  //forEach()는 array의 각 item에 대해 function을 실행해준다. 
}