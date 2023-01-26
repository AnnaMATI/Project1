
let buy= document.getElementsByClassName ("buy")
let busket= document.getElementById("busket")
let span=document.getElementById("sp")
busket.appendChild(span)
let input0=document.getElementById("input0");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let input4=document.getElementById("input4");
Array.from(buy).forEach( function(el){
    el.addEventListener("click", clickbtn)

})
let sum=0
function clickbtn(action){
if(action==0){
    span.textContent= sum+= +input0.value
   
}
else if (action==1){
    span.textContent= sum+= +input1.value
 
}
else if (action==2){
    span.textContent= sum+= +input2.value
  
}
else if (action==3){
    span.textContent= sum += +input3.value
   
}
else if (action==4){
    span.textContent= sum += +input4.value
  
}
}










