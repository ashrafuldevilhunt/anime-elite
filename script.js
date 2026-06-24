function searchAnime(){

let input =
document.getElementById("search")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let title =
card.querySelector("h2")
.innerText
.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}
