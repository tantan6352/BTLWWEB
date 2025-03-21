var i = 0;
var images = [];
var time = 5000;

images[0] = "/img/banner/banner1.png";
images[1] = "/img/banner/banner2.png";
images[2] = "/img/banner/banner3.png";

// change Image

function changeImage() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout(changeImage, time)
}

window.onload = changeImage;