var ArrowUp = document.querySelectorAll(".li-text-button");

ArrowUp.forEach(ArrowUp => {
    ArrowUp.addEventListener("click", event =>{
        currentlyActive = document.querySelector(".li-text-button.active");
        if(currentlyActive && currentlyActive!==ArrowUp){
            currentlyActive.classList.toggle("active")
            currentlyActive.nextElementSibling.style.maxHeight=0;
            currentlyActive.nextElementSibling.style.borderBottom="none";
            currentlyActive.nextElementSibling.style.paddingBottom="0cm";
        };

        ArrowUp.classList.toggle("active");
        var AccordionResponse = ArrowUp.nextElementSibling;
        if(ArrowUp.classList.contains("active")){
            AccordionResponse.style.maxHeight = AccordionResponse.scrollHeight + "px";
            AccordionResponse.style.borderBottom = "1px solid hsla(240, 6%, 50%, 0.185)";
            AccordionResponse.style.paddingBottom = "0.6cm";
        }
        else{
            AccordionResponse.style.maxHeight = 0;
            AccordionResponse.style.borderBottom = "none";
            AccordionResponse.style.paddingBottom = "0cm";
        };
        
    });
})

