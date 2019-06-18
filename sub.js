var coll = document.getElementsByClassName("btn");
var i;


let btn = document.querySelector(".btn")
let content = document.querySelector(".content")

btn.addEventListener("click", function(){
    content.classList.add("show")
    btn.classList.add("hide")
});




//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.display === "block") {
//      content.style.display = "none";
//    } else {
//      content.style.display = "block";
//      content.classList.add("animation-down");
//    }
//  });
//}
