const buttons=document.querySelectorAll('.button');
const body=document.body;

buttons.forEach(function(button){
    // console.log(button);
button.addEventListener('click',function(e){
console.log(e);
console.log(e.target);
if(e.target.id==='grey'){
    body.style.backgroundColor=e.target.id;//'grey'
}
else if(e.target.id==='black'){
    body.style.backgroundColor='#212121';
}
else if(e.target.id==='blue'){
    body.style.backgroundColor='blue';
}
else if(e.target.id==='yellow'){
    body.style.backgroundColor='yellow';
}
else if(e.target.id==='red'){
    body.style.backgroundColor='red';                 
}
else if(e.target.id==='beige'){
    body.style.backgroundColor='beige'; 
}   

else{
    body.style.backgroundColor='aqua'; 
}



})
});