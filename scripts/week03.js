/*
 [x] text
 [x] gradients
 [x] images.
*/
var c = document.getElementById('theCanvas');
var ctx = c.getContext('2d');
var c2 = document.getElementById('theCanvas2');
var ctx2 = c2.getContext('2d');
var c3 = document.getElementById('theCanvas3');
var ctx3 = c3.getContext('2d');

var gradient = ctx2.createLinearGradient(0,0,400,0);
gradient.addColorStop(0,"#ffffff");
gradient.addColorStop(1,"#123456");

ctx2.fillStyle = gradient;
ctx2.fillRect(0,0,400,400);

make_img();

function make_img() {
    var img = new Image();
    img.src = "../images/lassos-logo.svg";
    img.onload = function() {
        ctx.drawImage(img,100,100,200,200);
    }
}

ctx3.font = "30px sans-serif";
ctx3.fillText("lassos.us",10,30);

ctx.drawImage(c2,0,0);
ctx.drawImage(c3,0,0);
