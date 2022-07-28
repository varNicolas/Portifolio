let time = 1000, 
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