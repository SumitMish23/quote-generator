
 function changeQuote(){
 fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
  const random =Math.floor(Math.random()*data.length);
  document.getElementsByClassName('text-area')[0].innerText=' " ' + data[random].text+' " ';
  document.getElementsByClassName('person')[0].innerText='- '+data[random].author;
  }
  );
}


document.getElementById('new-quote').addEventListener('click',changeQuote)