var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var boolen = false;
canvas.addEventListener('mousedown', draw);

function draw(e) {
    var color = document.getElementById('colorBtn');
    var colorValue = color.value;
    boolen = true;
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    c.beginPath();
    c.moveTo(x, y);
    canvas.addEventListener('mousemove', function(e) {
        canvas.addEventListener('mouseup', function() { boolen = false });
        if (boolen) {
            c.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            c.lineJoin = 'round';
            c.lineCap = 'round';
            c.strokeStyle = colorValue;
            c.lineWidth = 5;
            c.stroke();
        }
    });
}