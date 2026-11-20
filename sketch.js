
let particleSystem;

function setup() {
    createCanvas(640, 400);

    particleSystem = new ParticleSystem(
        createVector(width / 2, 50)
    );
}

function draw() {
    background(255);

    // 중력
    let gravity = createVector(0, 0.1);

    // 바람
    let wind = createVector(0.05, 0);

    // 입자 생성
    particleSystem.addParticle();

    // 외부 힘 전달
    particleSystem.applyForce(gravity);
    particleSystem.applyForce(wind);

    // 시스템 실행
    particleSystem.run();
}
