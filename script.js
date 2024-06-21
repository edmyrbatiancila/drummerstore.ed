const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const smallImgCol = document.getElementsByClassName("small-img-col");

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Change main image and add border on small image click
var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].addEventListener('click', function() {
        // Change the main image source
        mainImg.src = smallImg[i].src;

        // Remove border from all small images
        for (let j = 0; j < smallImgCol.length; j++) {
            smallImgCol[j].style.border = "none";
        }

        // Add border to the clicked small image
        smallImgCol[i].style.border = "2px solid #FF8C00";
    });
}