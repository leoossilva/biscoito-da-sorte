const btnPlay = document.querySelector("#open")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const lucky = document.querySelector(".lucky")
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

btnPlay.addEventListener('click', handleLuckyClick)
btnAgain.addEventListener('click', handleResetClick)

function handleLuckyClick(event) {
  event.preventDefault();
    
  switch (randomNumber) { 
  case 1: 
   lucky.innerText = `Confiar em deus e ter certeza de que dará tudo certo. `;
   toggleScreen();
   break;
  case 2: 
   lucky.innerText = `Quanto maior o seu esforço, maior o seu sucesso.`;
  toggleScreen();
   break;
  case 3:
   lucky.innerText = `Ter uma melhora constante é melhor do que a perfeição adiada.`;
   toggleScreen();
   break;  
  case 4:
    lucky.innerText = `A unica vez que voce falha é quando você cai e fica no chão.`;
    toggleScreen();
    break;
  case 5:
    lucky.innerText = `Pessoas com metas triunfam porque sabem exatamente pra onde vão.`;
    toggleScreen();
    break;
  case 6:
    lucky.innerText = `Nunca deixe a tristeza do passado e o medo do futuro atrapalharem na felicidade do seu persente.`;
    toggleScreen();
    break;
  case 7:
    lucky.innerText = `Tudo é possivel desde que voce continue lutando por isso.`;
    toggleScreen();
    break;
  case 8:
    lucky.innerText = `Um dia sem estudar é um dia a mais entre você e seu objetivo.`;
    toggleScreen();
    break;   
  case 9:
    lucky.innerText = `Uma vida não basta ser vivida ela precisa ser sonhada.`;
    toggleScreen();
    break;
    default:
      toggleScreen();
  } 
}

function handleResetClick(event) {
  event.preventDefault();
  toggleScreen()

  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}