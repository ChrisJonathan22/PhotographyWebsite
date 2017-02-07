var images = ["Images/picture3.jpg", "Images/picture4.jpg", "Images/picture5.png", "Images/picture6.jpg", "Images/picture7.jpg", "Images/picture8.jpg"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
    imageNumber += x;
    //if you've reached end of array...start over!
    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images[imageNumber];
    
    return false;
}

function autoRun() {
    setInterval("changeImage(1)", 1500);
    
}