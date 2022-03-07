console.log('JS OK');
const element = document.querySelector('.header-right > a');
element.style.display = "block";
element.addEventListener('click',function(){
    const div = document.querySelector('.hamburger-menu');
    div.style.display = "block";
}
);





