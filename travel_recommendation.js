const images = ["pic1.png","pic2.png","pic3.png"];
let curr=0;
function changeBackground() {
    const bgdiv = document.querySelector(".main");
    bgdiv.style.backgroundImage = `url(${images[curr]})`
    curr = (curr+1)% images.length;
}

setInterval(changeBackground, 2500);

changeBackground();