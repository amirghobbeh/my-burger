function toggle(){
    const element = document.querySelector('.top_menu');
    
    if(element.style.display == 'flex'){
        element.style.display = 'none';
    }
    else{
        element.style.display = 'flex';
    }

}