document.addEventListener('DOMContentLoaded', function() {

    var myCanvas = document.getElementById('world');
    var engine = Matter.Engine.create();
    var world = engine.world;
    var render = Matter.Render.create({
      canvas: myCanvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false
      }
    });

    // leave here for now
    const x = 100,
          y = 100,
          radius = 10

    var ball = Matter.Bodies.circle(x, y, radius, {
      density: 0.04,
      friction: 0.01,
      frictionAir: 0.00001,
      restitution: 0.8,
      render: {
        fillStyle: '#F35e66',
        strokeStyle: 'black',
        lineWidth: 1
      }
    });

    Matter.World.add(world, ball);

    var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
      element: myCanvas,
      constraint: {
        render: {
          visible: false
        },
        stiffness:0.8
      }
    });

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Matter.World.add(world, mouseConstraint);

    Matter.Engine.run(engine);
    Matter.Render.run(render);
});
