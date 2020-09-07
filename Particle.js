class Particle {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.4
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }
        
        display() {
            push();
            var pos = this.body.position;
            var angle = this.body.angle;
            ellipseMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            circle(pos.x, pos.y, this.radius);
            fill(this.color);
            pop();
        }
}