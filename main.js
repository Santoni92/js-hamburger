console.log('JS OK');
const element = document.querySelector('.header-right > a');
element.style.display = "block";
const div = document.querySelector('.hamburger-menu');
element.addEventListener('click',function(){
    
    div.style.display = "block";
}
);

const a = document.querySelector('.hamburger-menu > a');
a.addEventListener('click',function(){
    div.style.display = "none";
});





