 burger = document.querySelector('.burger');
 navigation = document.querySelector(".navigation");
 navList = document.querySelector('.nav-list')
navRight = document.querySelector('.nav-right')


 burger.addEventListener('click', ()=>{
 navigation.classList.toggle('h-nav-resp')
 navList.classList.toggle('v-class-resp')
 navRight.classList.toggle('v-class-resp')

})