// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color = "red"
const EnRougeSuiteAClick = document.querySelector('#en-rouge-suite-a-click')
EnRougeSuiteAClick.addEventListener("click",(evt)=>{
        EnRougeSuiteAClick.style.color = 'red'
});

const lesh2 = document.querySelectorAll("h2");
lesh2.forEach((elem) => {
  elem.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});