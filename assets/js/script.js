let time = 4005, 
cuurrentIndex = 0, 
images = document.querySelectorAll(".containerProjects img")
max = images.length;

nextImage = ()=>{
  images[cuurrentIndex]
  .classList.remove('selected');

  cuurrentIndex++
  if(cuurrentIndex == max )
    cuurrentIndex = 0;
  
  images[cuurrentIndex].classList.add('selected');
  }
start = ()=>{
setInterval(() => {
  // Troca de imagem
  nextImage();
}, time);
}
window.addEventListener('load', start);

function showMenu(){
  document.querySelector('.menu-opener').style.display = 'none'
  document.querySelector('.menu-opened').style.display = 'flex'
}
function closeMenu(){
  document.querySelector('.menu-opened').style.display = 'none'
  document.querySelector('.menu-opener').style.display = 'flex'
}


setTimeout(() => {
  let largura = window.screen.width;

if(largura >= 690){
  closeMenu();
}
}, 10000);
