// spawn.js

function spawnItems(types, count, wallThickness, world) {
  let items = [];
  for (let type of types) {
    for (let i = 0; i < count; i++) {
      let r = 12;
      let x = random(
        (width / 100) * 3 + wallThickness / 2 + r,
        width - (width / 100) * 3 - wallThickness / 2 - r
      );
      let y = random(
        (height / 100) * 13 + wallThickness / 2 + r,
        height - (height / 100) * 3 - wallThickness / 2 - r
      );
      items.push(new Item(x, y, r, type, world));
    }
  }
  return items;
}
