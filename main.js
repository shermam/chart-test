const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const raio = 100;
const imagem = new Image();
imagem.src = 'seta.png';

canvas.width = 600;
canvas.height = 600;

let angle = 0;

function draw() {
    borda('purple', 15);
    pizza(0, 359, 'green');
    pizza(35, 179, 'grey');
    pizza(0, angle, 'red');

    ponteiro(angle);

    context.drawImage(imagem, 50, 50, 150, 150);

    angle += 1;

    requestAnimationFrame(draw);
}

draw();

function pizza(anguloInicial, anguloFinal, cor) {

    anguloInicial = 360 - anguloInicial;
    anguloFinal = 360 - anguloFinal;

    context.beginPath()
    context.strokeStyle = cor;
    context.lineWidth = raio * 2;
    context.ellipse(canvas.width / 2, canvas.height / 2, raio, raio, 0, toRadians(anguloInicial), toRadians(anguloFinal), true);
    context.stroke();
    context.closePath();
}

function borda(cor, largura) {
    var meuRaio = (raio * 2) + largura;

    context.beginPath()
    context.fillStyle = cor;
    context.ellipse(canvas.width / 2, canvas.height / 2, meuRaio, meuRaio, 0, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
}

function ponteiro(angulo) {
    angulo = 360 - angulo;
    angulo = toRadians(angulo);

    const x = (raio * 2) * Math.cos(angulo) + (canvas.width / 2);
    const y = (raio * 2) * Math.sin(angulo) + (canvas.height / 2);

    context.beginPath();
    context.strokeStyle = '#000000';
    context.lineWidth = 10;
    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}