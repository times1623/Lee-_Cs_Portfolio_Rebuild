var showTxt = document.querySelector(".showText");
var showMore = document.querySelector(".redMore");

function readMore() {
    showTxt.classList.add("show");
    showTxt.classList.remove("showText");
    showMore.classList.add("showText");
    console.log(showTxt);
};


showMore.addEventListener('click',readMore,false);
