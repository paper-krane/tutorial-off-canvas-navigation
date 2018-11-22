var toggleBtn = document.querySelectorAll("[data-toggle=true]");

for(var i = 0; i < toggleBtn.length; i++){
    toggleBtn[i].addEventListener("click", function(e){
        e.preventDefault();
        var dataClass = this.dataset.toggleClass;
        var dataClassElements = document.querySelectorAll("[data-toggle-class]");
        for(var i = 0; i < dataClassElements.length; i++) {
            if(dataClassElements[i].dataset.toggleClass == dataClass){
            	dataClassElements[i].classList.toggle(dataClass);
            }
       	}
    }, false);
}
