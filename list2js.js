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
    "Soup without meat, but no less delicious than with it. A lot of vitamins, trace elements and few calories. It is very useful and can be recommended for baby food and for adults. A set of vegetables can be any to taste.",
    "Pizza Margarita is a traditional Italian pizza. The composition of this pizza is extremely simple, its main ingredients: mozzarella cheese, ripe tomatoes and fresh basil leaves.",
    "This dish is a highlight of Ukrainian cuisine, which is probably known all over the world. Rich, appetizing and satisfying ... a wonderful idea for the whole family!",
    ""];
Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
    ele.addEventListener('click', ()=>{
        photo.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        opi.innerText = arr[i];
        cost.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})