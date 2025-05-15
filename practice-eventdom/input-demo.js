let b = document.querySelector('button#print');
b.addEventListener('click',greeting);
let i,shimei,aisatsu;
let p  = document.querySelector('p#message') ;
console.log(i,shimei);
function greeting() {
    console.log('こんにちは');
    i = document.querySelector('input[name="shimei"]'); 
    shimei = i.value;
    aisatsu = 'こんにちは,' + shimei + 'さん'; 
    p.textcontent = aisatsu;
  }