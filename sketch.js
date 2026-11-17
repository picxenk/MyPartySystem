let systems = [];

const BASE_Y = 370;
const CANDLE_WIDTH = 40;
const WICK_HEIGHT = 8;
const WICK_HIT_RADIUS = 22;

let candles = [
  { x: 260, height: 90, color: [255, 130, 160] },
  { x: 360, height: 150, color: [130, 180, 255] },
  { x: 460, height: 60, color: [255, 210, 110] },
];

function setup() {
  createCanvas(720, 400);
}

function mousePressed() {
  for (let i = 0; i < candles.length; i++) {
    let candle = candles[i];
    let wickY = BASE_Y - candle.height - WICK_HEIGHT;

    // 심지 근처를 클릭했을 때만 파티클 시스템 생성
    if (dist(mouseX, mouseY, candle.x, wickY) < WICK_HIT_RADIUS) {
      systems.push(new ParticleSystem(createVector(candle.x, wickY)));
      break;
    }
  }
}

function draw() {
  background(51);

  drawCandles();

  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
  }
}

function drawCandles() {
  for (let i = 0; i < candles.length; i++) {
    drawCandle(candles[i]);
  }
}

function drawCandle(candle) {
  let topY = BASE_Y - candle.height;

  // 초 몸통
  noStroke();
  fill(candle.color);
  rect(candle.x - CANDLE_WIDTH / 2, topY, CANDLE_WIDTH, candle.height, 6);

  // 심지
  stroke(60);
  strokeWeight(3);
  line(candle.x, topY, candle.x, topY - WICK_HEIGHT);
}
