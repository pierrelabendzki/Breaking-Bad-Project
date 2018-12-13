fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/')
.then(response => response.json())
  .then(data => {const phrase = data[0].quote;
  const quote = document.getElementById("quote");
  quote.innerHTML = phrase;
  
  const pers = data[0].author;
  const selector = document.getElementById("selector");
  const guess = selector.options[selector.selectedIndex].value;
  /*const guess = selector.addEventListener('change',function(){selector.options[selector.selectedIndex].value;});	 
*/  console.log(guess);
  });