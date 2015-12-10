function path_sin(ctx)
{
    var point_count = 10;
    var dx=2*(Math.PI)/point_count;
    var x=0;
    var px = 25;
    var py = 100;



    for (var i=0;i<point_count;i++)
    {
        ctx.beginPath();
        ctx.moveTo(px, py);
        x += dx;
        y = Math.sin(x);

        px += (180.0/(Math.PI))*dx;
        py = 100 - 50*y;

        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeStyle = make_color();
    }


}

function init()
{
    var canvas = document.getElementById('sine-canvas');;
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.strokeStyle = make_color();
    ctx.lineWidth = 15;

    path_sin(ctx);
};

function make_color() {
    var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var a = Math.random();
    console.log("rgba("+r+","+g+","+b+","+a+")");
    return "rgba("+r+","+g+","+b+","+a+")";
}

window.onload = function () {
    init();
}
