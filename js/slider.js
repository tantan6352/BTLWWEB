var i = 0;
var images = [];
var time = 3000;

images[0] = "/img/about/slider1.png";
images[1] = "/img/about/slider2.png";
images[2] = "/img/about/slider3.png";
images[3] = "/img/about/slider4.png";


// change Image

function changeImage() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImage()", time)
}

window.onload = changeImage;
