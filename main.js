
let buy= document.getElementsByClassName ("buy")
let busket= document.getElementById("busket")
let span=document.getElementById("sp")
busket.appendChild(span)

Array.from(buy).forEach( function(el){
    el.addEventListener("click", clickbtn)
})


function clickbtn(){
span.textContent ++
}