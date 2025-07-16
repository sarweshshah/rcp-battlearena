# Rock-Paper-Scissors Physics Simulation

This project is an interactive simulation of the classic Rock-Paper-Scissors game, visualized with physics-based motion and collisions. Built using [p5.js](https://p5js.org/) for rendering and [Matter.js](https://brm.io/matter-js/) for 2D physics, it demonstrates emergent behavior as items interact and convert each other according to the familiar RPS rules.

## Features

- **Physics-Driven Simulation:** Each item (rock, paper, or scissors) is a dynamic body that moves, bounces, and collides within a bounded arena.
- **RPS Conversion Logic:** When two items collide, the winner (according to RPS rules) converts the loser to its own type, visually updating the emoji.
- **Emergent Dynamics:** Items are mutually attracted, leading to clusters and ongoing battles until one type dominates.
- **Visuals:** The simulation displays a dotted boundary, a dot grid background, and live counts of each item type, all rendered with p5.js.

## Technologies Used

- **[p5.js](https://p5js.org/):** A creative coding library for drawing and animation in JavaScript.
- **[Matter.js](https://brm.io/matter-js/):** A 2D rigid body physics engine for realistic motion and collisions.

## Code Structure

- `index.html`: Loads all scripts and sets up the canvas.
- `sketch.js`: Main game loop, rendering, and UI.
- `item.js`: Defines the `Item` class, including RPS logic and drawing.
- `collisions.js`: Handles collision events and type conversion.
- `helpers.js`: Utility functions for drawing and physics effects.
- `spawn.js`: Spawns items randomly within the arena.
- `walls.js`: Creates static boundary walls.
- `style.css`: Minimal CSS for layout.

## How It Works

1. The simulation spawns an equal number of rocks, papers, and scissors, each as a circle with an emoji.
2. Items move with random velocities and are attracted to each other.
3. When two items collide, the RPS rules are applied: the winner converts the loser.
4. The simulation continues, showing the evolving population and the current seed.

## Running the Project

Simply open `index.html` in a modern web browser. No build step is required. All dependencies are loaded via CDN or included locally.

---

Enjoy watching the battle for dominance unfold in this playful, physics-based twist on Rock-Paper-Scissors!
