const quotes = [
  {
    quote: "사람은 어떻게 죽느냐가 문제가 아니라 어떻게 사느냐가 문제다.",
    author: "S.존슨(영국의 문학자)",
  },
  {
    quote: "우리의 미래는 현재 우리가 어떤 것을 하는가에 달려 있다.",
    author: "간디",
  },
  {
    quote: "친구와 사귀는 일은 서로 익숙하게 되면 예의를 잃게 되기 쉽다. 오래 되어도 서로 상대방을 존경하는 사이가 되어야 한다.",
    author: "논어",
  },
  {
    quote: "사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라. ",
    author: "벤자민 프랭클린",
  },
  {
    quote: "무엇이든 생각했을 때 작은 일부터 시작해야 한다.",
    author: "빌게이츠",
  },
  {
    quote: "일을 즐기면 일의 완성도가 높아진다.",
    author: "아리스토텔레스",
  },
  {
    quote: "실패를 두려워한다면, 아마도 당신은 실패 할 것이다.",
    author: "코비 브라이언트",
  },
  {
    quote: "밤이 더 깜깜할때 더 많은 것을 본다. ",
    author: "에디슨",
  },
  {
    quote: "어떤 일을 하기에 앞서 스스로 그 일에 대한 기대를 가져야 한다.",
    author: "마이클 조던",
  },
  {
    quote: "겁쟁이는 사랑을 드러낼 능력이 없다. 사랑은 용기 있는 자의 특권이다. ",
    author: "마하트마 간디",
  },
  {
    quote: "당신의 삶은 영원하지 않다. 그러니 타인의 삶을 살면서 시간을 낭비하지 마라. ",
    author: "스티브잡스",
  },
  {
    quote: "돈은 유일한 해답은 아니지만 차이를 만들어낸다. ",
    author: "버락 오바마",
  },
  {
    quote: "가장 불만에 가득 찬 고객은 가장 위대한 배움의 원천이다. ",
    author: "빌게이츠",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;