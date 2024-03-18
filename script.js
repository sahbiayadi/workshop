var btn= document.getElementById("btn")
var box = document.getElementById("color-box");
var palette=document.getElementById("palette");
btn.addEventListener("click", function(){
    box.style.backgroundColor=palette.value
})