let b = document.querySelector('button#calc'); 
let n,l,i,j;
let p = document.querySelector('span#answer') 
function greeting(){
    console.log('hello');
    n = document.querySelector('input[name="left"]'); 
    l = document.querySelector('input[name="right"]');
    i = Number(n.value);
    j = Number(l.value);
    p.textContent = i+j;
} 
b.addEventListener('click',greeting); 