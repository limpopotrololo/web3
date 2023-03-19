$("#header-block").hover(function (){
    $(".meme").fadeIn();
}).mouseout(function (){
    $(".meme").fadeOut();
})

let buttons = document.getElementsByClassName("r_button");
for(let iter of buttons) {
    iter.onclick = () => {
        for(let iter of buttons)
            iter.classList.remove("active");
        iter.classList.add("active");
        document.getElementById("buf").setAttribute("value", iter.getAttribute("value"));
    }
}

