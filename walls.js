// walls.js

function createWalls(wallOptions, wallThickness = 40) {
  return [
    // Top and bottom walls: wider than play area
    Matter.Bodies.rectangle(width/2, height/100 * 9, width, wallThickness, wallOptions), // Top
    Matter.Bodies.rectangle(width/2, height - height/100, width, wallThickness, wallOptions), // Bottom
    
    // Left and right walls: taller than play area
    Matter.Bodies.rectangle(width/100, height/2 + 30, wallThickness, height, wallOptions), // Left
    Matter.Bodies.rectangle(width - width/100, height/2 + 30, wallThickness, height, wallOptions), // Right
  ];
}
