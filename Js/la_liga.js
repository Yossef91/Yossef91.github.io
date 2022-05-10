
var targets = document.querySelectorAll(".item"); // selector {#id - .class name}
for(var i = 0 ; i < targets.length ; ++i){
   targets[i].addEventListener("mouseover", mOver, false);
   targets[i].addEventListener("mouseout", mOut, false);
}


function mOver() {
   this.classList.add("active-btn");
}

function mOut() {  
    this.classList.remove("active-btn");
}