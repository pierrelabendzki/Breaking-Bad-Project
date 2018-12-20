
const select = document.querySelector('#selector');


fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/')
.then(response => response.json())
  .then(data => {
  
  const phrase = data[0].quote;
  const quote = document.getElementById("quote");
  quote.innerHTML = phrase;
  
  let pers = data[0].author;
  const selector = document.getElementById("selector");
  let guess = selector.options[selector.selectedIndex].innerHTML;
   
  console.log(pers);
  
  selector.addEventListener('change',function(){
  guess = selector.options[selector.selectedIndex].innerHTML;
  console.log(guess);

  });
  
  
  const submit = document.getElementById("inputSubmit");
  submit.addEventListener('click',function(event){
  event.preventDefault();
  if(guess!="--select a character--"){
  document.getElementById("masque-opaque").style.display="block";
  
  const variable = Math.floor(Math.random() * 4);
  if (pers==guess){
  document.getElementById("result").innerHTML="Congratulations !";
  document.querySelector('#gifWin'+`${variable}`).classList.add('gif-active');
  }
  else{
  document.getElementById("result").innerHTML="Fail...";
  document.querySelector('#gifLoose'+`${variable}`).classList.add('gif-active');
  document.getElementById("soluce").innerHTML="A real fan may know that " + pers + " said that...";
  }	
  } 
  });  
  });
  
  
const changeImage = e =>{
	const value = e.target.value;
	const activePicture = 
		document.querySelector('.picture-active');
	activePicture.classList.remove('picture-active');
	const chosenPicture = 
		document.querySelector(`#${value}`);
	chosenPicture.classList.add('picture-active');
}

select.addEventListener(
  'change',
  changeImage
);
