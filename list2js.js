var left = document.getElementsByClassName('fa-caret-left')[0];
var right = document.getElementsByClassName('fa-caret-right')[0];
var cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', ()=>{
    cards.scrollLeft -= 150;
})
right.addEventListener('click', ()=>{
    cards.scrollRight += 150;
})

var photo = document.getElementById('ava');
var title = document.getElementById('im');
var opi = document.getElementById('opi');
var cost = document.getElementById('cost');
var arr = ["Medium rare steak roasting degree is an ideal roasting for classic steaks, red-pink color inside. The temperature is 46-50 °C.",
    "blya","zb"];
Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
    ele.addEventListener('click', ()=>{
        photo.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        opi.innerText = arr[i];
        cost.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})