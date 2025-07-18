// helpers.js

// Draws a dotted rectangle on the canvas
function drawDottedRect(x, y, width, height, dotSize, spacing) {
  // Top side
  for (let i = 0; i <= width; i += spacing) {
    ellipse(x + i, y, dotSize, dotSize);
    ellipse(x + width - i, y + height, dotSize, dotSize);
  }

  for (let i = 0; i <= height; i += spacing) {
    ellipse(x + width, y + i, dotSize, dotSize);
    ellipse(x, y + height - i, dotSize, dotSize);
  }
}

// Applies mutual attraction between all pairs of items
function applyMutualAttraction(items, attractionStrength) {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      let a = items[i];
      let b = items[j];
      let posA = a.body.position;
      let posB = b.body.position;
      let dx = posB.x - posA.x;
      let dy = posB.y - posA.y;
      let distSq = dx * dx + dy * dy;
      if (distSq > 1) {
        // Prevent division by zero
        let dist = Math.sqrt(distSq);
        let forceMag = attractionStrength;
        let fx = (dx / dist) * forceMag;
        let fy = (dy / dist) * forceMag;
        Matter.Body.applyForce(a.body, posA, { x: fx, y: fy });
        Matter.Body.applyForce(b.body, posB, { x: -fx, y: -fy });
      }
    }
  }
}

// Draws the boundary walls using their actual positions and sizes
function showBoundaryWalls(walls) {
  stroke(100, 180, 255);
  strokeWeight(4);
  fill(60, 80, 120);
  rectMode(CENTER);
  for (let wall of walls) {
    rect(
      wall.position.x,
      wall.position.y,
      wall.bounds.max.x - wall.bounds.min.x,
      wall.bounds.max.y - wall.bounds.min.y
    );
  }
}

// Draws a dotted grid (dot sheet) inside a rectangle
function drawDotSheet(
  x,
  y,
  width,
  height,
  dotSpacing = 32,
  dotSize = 3,
  color = [180, 200, 255, 80]
) {
  push();
  noStroke();
  fill(...color);
  for (let i = x + dotSpacing / 2; i < x + width; i += dotSpacing) {
    for (let j = y + dotSpacing / 2; j < y + height; j += dotSpacing) {
      ellipse(i, j, dotSize, dotSize);
    }
  }
  pop();
}

// Compute average velocity magnitude of all items
function getAverageVelocity(items) {
  if (items.length === 0) return 0;
  let total = 0;
  for (let it of items) {
    const v = it.body.velocity;
    total += Math.sqrt(v.x * v.x + v.y * v.y);
  }
  return total / items.length;
}

// Export helpers (for clarity, even if not using modules)
// If using modules, use: export { drawDottedRect };
