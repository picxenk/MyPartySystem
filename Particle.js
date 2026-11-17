const PARTY_COLORS = [
    [255, 90, 160],
    [120, 220, 255],
    [180, 140, 255],
];

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, -0.05);
        this.velocity = createVector(random(-0.2, 0.2), random(-2.8, -2));
        this.position = position.copy();
        this.lifespan = 255;
        this.weight = random(1, 2);
        // 가끔 파티 색 불꽃 섞기
        this.partyColor = random() < 0.08 ? random(PARTY_COLORS) : null;
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.x += random(-0.06, 0.06);
        this.position.add(this.velocity);
        this.lifespan -= 11;
    }

    display() {
        // 수명에 따라 노란 심지 → 주황 → 붉은 빛으로 변하는 불꽃 색
        let t = max(this.lifespan, 0) / 255;
        let c = this.partyColor || [255, 80 + 160 * t, 40 + 110 * t];

        // 얇고 긴 선으로 빛 궤적 표현
        let tailX = this.position.x - this.velocity.x * 2.5;
        let tailY = this.position.y - this.velocity.y * 2.5;

        stroke(c[0], c[1], c[2], this.lifespan);
        strokeWeight(this.weight);
        line(tailX, tailY, this.position.x, this.position.y);
    }

    isDead() {
        return this.lifespan < 0;
    }
}



// // A simple Particle class
// let Particle = function(position) {
//   this.acceleration = createVector(0, 0.05);
//   this.velocity = createVector(random(-1, 1), random(-1, 0));
//   this.position = position.copy();
//   this.lifespan = 255;
// };

// Particle.prototype.run = function() {
//   this.update();
//   this.display();
// };

// // Method to update position
// Particle.prototype.update = function(){
//   this.velocity.add(this.acceleration);
//   this.position.add(this.velocity);
//   this.lifespan -= 2;
// };

// // Method to display
// Particle.prototype.display = function() {
//   stroke(200, this.lifespan);
//   strokeWeight(2);
//   fill(127, this.lifespan);
//   ellipse(this.position.x, this.position.y, 12, 12);
// };

// // Is the particle still useful?
// Particle.prototype.isDead = function(){
//   return this.lifespan < 0;
// };
