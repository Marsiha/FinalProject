let menu_btn = document.getElementsByClassName('bi bi-list')[0];
let menu_bx = document.getElementById('menu_bx');

menu_btn.addEventListener('click', ()=>{
        menu_bx.classList.toggle('ul_active');
    }) 

    // // window.onscroll = function() {myFunction()};
    // // var ic = document.getElementsByClassName('icon');
    // // function myFunction() {
    // //   if (document.documentElement.scrollTop > 400) {
    // //     ic.style.display = 'none';
    // //   }else ic.style.display = 'none';
    // // }
    // var ic = document.getElementsByClassName('icon');
    // window.addEventListener('scroll',(event)=>{
    //     if($(window).scrollTop() > 300){
    //         ic.style.display = 'unset';
    //     }
    //     else{
    //         ic.style.display = 'none';
    //     }
    //     // if(document.documentElement.scrollTop < 300){
    //     //   document.getElementsByClassName('mama')[0].classList.remove('mama2')
    //     // }
    //   })