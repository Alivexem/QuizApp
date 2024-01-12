


const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuwrap");
let click = true
menuBtn.addEventListener("click", () => {
    if(click){
      menu.classList.add("clicked");
      menu.style.display = "flex"
    }else{
        menu.classList.remove("clicked");
        menu.style.display = "none"
    }
    click = !click
});
