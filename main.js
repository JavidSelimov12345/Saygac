"use strict"

const button= document.querySelector("button");
const input= document.querySelector("#num");

let element= document.querySelector(".main");
let number;

button.addEventListener('click',function(){

number=input.value

setInterval(function(){

   if (number!==0){
        number--

    element.innerHTML=number
   }

   else{

    alert('Vaxt tamamdir,Zəhmət olmasa saytı yeniləyin və yeni vaxtı daxil edin')

   }
   


},1000)
 
})

















