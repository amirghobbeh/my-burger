const element = document.querySelector('.top_menu');
function toggle(){
   
    
    if(element.style.display == 'flex'){
        element.style.display = 'none';
    }
    else{
        element.style.display = 'flex';
    }

}


const mql = window.matchMedia("(min-width: 769px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 769 pixels wide or more
    element.style.display = 'flex';
  } else {
    // The viewport is more than 600 pixels wide
    element.style.display = 'none';
  }
});