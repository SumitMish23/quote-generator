showTime = () => {
  let time = document.getElementsByClassName("time")[0];

  setInterval(() => {
    let today = new Date();
    var timeNow =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    time.innerText = timeNow;
  }, 1000);
  if (time.getAttribute("class").includes("hidden")) {
    time.classList.remove("hidden");
  } else {
    time.classList.add("hidden");
  }
};
function changeQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      const random = Math.floor(Math.random() * data.length);
      document.getElementsByClassName("text-area")[0].innerText =
        ' " ' + data[random].text + ' " ';
      document.getElementsByClassName("person")[0].innerText =
        "- " + data[random].author;
    });
}
document.getElementsByClassName("time")[0].innerText=new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
document.getElementById("new-quote").addEventListener("click", changeQuote);
document.getElementById("clickButton").addEventListener("click", showTime);


// Accordion 

var text=document.getElementsByClassName('accordion-text')[0].innerText;
var change=true;
const showText=()=>{
if(change ==true){
  document.getElementsByClassName('accordion-text')[0].style.height='100px'
  // document.getElementsByClassName('accordion-text')[0].style.transition='2s'
  change=false;
}
else{
  document.getElementsByClassName('accordion-text')[0].style.height='20px'
  change=true
}
}
document.getElementById("clickButtonOfAccordion").addEventListener("click", showText);


// Timer 

let seconds=0;
let minutes=0;
var showTime=()=>{

  setInterval(()=>{
    seconds++;
    if(seconds >= 10){
      seconds=0;
      document.getElementById("timerText").innerText=minutes + ':'+ seconds;
    }

    document.getElementById("timerText").innerText=seconds;
    },1000)
}


document.getElementById("clickTimer").addEventListener("click", showTime);