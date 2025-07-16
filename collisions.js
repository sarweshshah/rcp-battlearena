// collisions.js

function setupCollisionEvents(engine, items) {
  Matter.Events.on(engine, "collisionStart", (event) => {
    for (let pair of event.pairs) {
      let itemA = items.find((it) => it.body === pair.bodyA);
      let itemB = items.find((it) => it.body === pair.bodyB);

      if (itemA && itemB) {
        // Check if Body A converts Body B
        let newTypeB = itemA.transform(itemB.type);
        if (newTypeB) {
          itemB.type = newTypeB;
          pair.bodyB.label = newTypeB;
        }
        // Check if Body B converts Body A
        let newTypeA = itemB.transform(itemA.type);
        if (newTypeA) {
          itemA.type = newTypeA;
          pair.bodyA.label = newTypeA;
        }
      }
    }
  });
}
