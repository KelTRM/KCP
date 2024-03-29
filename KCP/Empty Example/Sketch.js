let canvas = getCanvas("canvas1", "2d", 600, 400);
let angle = 0
let doc = 5
let roc = doc/2;
let wave = [];
let slider = {value: 2};
let frameCount = 0;
let h1 = document.getElementById("h1ele");
let button = document.getElementById("rb");

button.addEventListener("click", click);

function click() {
    wave = [];
}

function change() {
    h1.innerText = UTChour();
}

function draw() {
    let r = 50;
    h1.innerText = hour(true);
    canvas.translate(0, 0);
    canvas.background(0, 0, 0, 255);
    canvas.beginShape(100, 100);
    canvas.vertex(100, 200);
    canvas.endShape();
    canvas.noFill();
    let x = 0;
    let y = 0;
    canvas.stroke(255, 255, 255);
    for(let i = 0; i < hour(true); i++) {
        canvas.translate(0, 0);
        prevx = x + 200;
        prevy = y + 200;
    let n = i * 2 + 1;
    r = 50 * (4 / (n * PI));
    canvas.noFill();
    canvas.circle(prevx, prevy, r);
    canvas.fill(255, 255, 255);
    x += r * cos(n * angle);
    y += r * sin(n * angle);
    canvas.line(prevx, prevy, x + 200, y + 200);
    // wave.unshift(y);
    // canvas.translate(150, 200);
    canvas.fill(255, 255, 255);
    canvas.translate(200, 200);
    canvas.point(x, y, doc);
    }
    canvas.translate(0, 0);
    wave.unshift(y);
    canvas.translate(200, 200);
    canvas.line(x, y, 200, y);
    canvas.beginShape(400, wave[0] + 200)
    canvas.translate(400, 0)
    for(let i = 1; i < wave.length; i++) {
        canvas.stroke(255, 255, 255)
        canvas.vertex(i + 400, wave[i] + 200)
    }
    if(wave.length > 200) {
        wave.pop()
    }
    angle+=0.05

    canvas.canvas.stroke()
    // window.requestAnimationFrame(draw);
}
// console.log(canvas.map(4, 0, 10, 0, 100))
// canvas.point(0, 0, 10)
// window.requestAnimationFrame(draw);