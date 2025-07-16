// Item.js

class Item {
  constructor(x, y, radius, type, world) {
    this.radius = radius;
    this.type = type;

    // Create a Matter circle body with a label for type
    this.body = Matter.Bodies.circle(x, y, radius, {
      restitution: 1.01,
      friction: 0,
      frictionAir: 0,
      label: type,
    });

    // Add random initial velocity
    const speed = Math.random() * 6 + 2; // speed between 2 and 8
    const angle = Math.random() * Math.PI * 2;
    const velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
    Matter.Body.setVelocity(this.body, velocity);

    Matter.World.add(world, this.body);
  }

  // Get emoji based on current type
  getEmoji() {
    switch (this.type) {
      case "rock":
        return "🪨";
      case "paper":
        return "📜";
      case "scissors":
        return "✂️";
    }
  }

  // RPS rules: if my type beats the other, convert the other
  transform(otherLabel) {
    if (this.type === "rock" && otherLabel === "scissors") return "rock";
    if (this.type === "paper" && otherLabel === "rock") return "paper";
    if (this.type === "scissors" && otherLabel === "paper") return "scissors";
    return null;
  }

  // Draw the boundary and emoji at the body's position
  show() {
    const pos = this.body.position;
    push();
    translate(pos.x, pos.y);

    // Draw boundary circle
    // noFill();
    // stroke(200, 200, 255, 120);
    // strokeWeight(2);
    // ellipse(0, 0, this.radius * 2, this.radius * 2);

    // Draw emoji
    textAlign(CENTER, CENTER);
    textSize(this.radius * 2);
    noStroke();
    fill(255);
    text(this.getEmoji(), 0, 0);
    pop();
  }
}
