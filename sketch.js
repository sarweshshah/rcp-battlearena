// sketch.js

// Assumes Matter, p5, and all helpers are loaded globally

let Engine = Matter.Engine,
  World = Matter.World;

let engine, world;
let items = [];
let walls = [];

function setup() {
  createCanvas(600, 800);

  // Create engine and world
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0; // no gravity
  engine.timing.timeScale = 1;

  // Wall options
  let wallOptions = {
    isStatic: true,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
  };

  // Create and add walls
  const wallThickness = 40;
  walls = createWalls(wallOptions, wallThickness);
  World.add(world, walls);

  // Spawn items
  const types = ["rock", "paper", "scissors"];
  const eachItemTypeCount = 12;
  items = spawnItems(types, eachItemTypeCount, wallThickness, world);

  // Setup collision events
  setupCollisionEvents(engine, items);
}

function draw() {
  background(40);

  // Step the physics engine
  Engine.update(engine);

  // Add mutual attraction between items
  const attractionStrength = 0.0000001;
  applyMutualAttraction(items, attractionStrength);

  // Uncomment to show boundary walls
  // showBoundaryWalls(walls);

  // Draw dotted rectangle
  // Calculate inner boundary from wall references
  // Left wall: walls[2], Right wall: walls[3], Top wall: walls[0], Bottom wall: walls[1]
  const left =
    walls[2].position.x + walls[2].bounds.max.x - walls[2].position.x;
  const right =
    walls[3].position.x - (walls[3].position.x - walls[3].bounds.min.x);
  const top = walls[0].position.y + walls[0].bounds.max.y - walls[0].position.y;
  const bottom =
    walls[1].position.y - (walls[1].position.y - walls[1].bounds.min.y);
  drawDottedRect(left, top, right - left, bottom - top, 2, 6);
  
  // Draw dot sheet inside the inner boundary
  drawDotSheet(left, top, right - left, bottom - top);

  // Draw all items
  for (let it of items) {
    it.show();
  }

  // Display item counts
  let rockCount = 0,
    paperCount = 0,
    scissorsCount = 0;
  for (let it of items) {
    if (it.type === "rock") rockCount++;
    else if (it.type === "paper") paperCount++;
    else if (it.type === "scissors") scissorsCount++;
  }
  let total = rockCount + paperCount + scissorsCount;
  noStroke();
  fill(255, 220);
  textAlign(LEFT, TOP);
  
  textStyle(BOLD);
  textSize(20);
  text(`RPS Battle Ground ⚔️`, 24, 24);
  
  textStyle(NORMAL);
  textSize(18);
  text(`Total: ${total}   [ 🪨: ${rockCount}    📜: ${paperCount}    ✂️: ${scissorsCount} ]`, 24, 54);
}
