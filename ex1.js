var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var drawBtn = document.getElementById('btn');
drawBtn.addEventListener('click', draw)

function draw() {
    var numberStr = document.getElementById('number').value;
    var colorOne = document.getElementById('color-one').value;
    var colorTwo = document.getElementById('color-two').value;
    var number = Number(numberStr);
    for (var x = 0; x < number; x++) {
        for (var y = 0; y < number; y++) {
            if (x % 2 == y % 2) {
                c.fillStyle = colorOne;
            } else {
                c.fillStyle = colorTwo;
            }
            c.fillRect(63 * x, 63 * y, 63, 63);
        }
    }
}