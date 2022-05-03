const canvas = document.getElementById("balls");
const context = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let ball = {
    x: 10,
    y: 10,
    size: 80,
    color: "#fff",
};

function move() {
    ball.x = randInt(centerX+ball.size);
    ball.y = randInt(centerY+ball.size);
    if((randInt(60) % 2) == 0) {
        ball.color = randColor();
    }
}

function randColor() {
    return "rgb("+randInt(255)+","+randInt(255)+","+randInt(255)+")";
}

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function balls() {

    context.fillStyle = "#fff";
    context.fillRect(0,0,canvas.width, canvas.height);

    context.fillStyle = ball.color;
    context.fillRect(ball.x, ball.y, ball.size, ball.size);

    requestAnimationFrame(balls);
};

ball.color = randColor();
balls();
setInterval(move, 300);