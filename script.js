function pageLoad(){
    const image = document.querySelector(".bcgImg");
    const text = document.querySelector(".loadingText");
    
    let load = 0;
    let int = setInterval(blurring, 30);
    
    function blurring(){
        load++
        if(load > 99){
            clearInterval(int);
        }
    
        text.textContent = `${load}%`;
        text.style.opacity = scale(load, 0, 100, 1, 0);
        
        image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
       
        
    }
    
    
    //Function from stack overflow
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}

