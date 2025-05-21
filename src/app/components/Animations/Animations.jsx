"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const labels = [
  "Social Media",
  "Cyber Security",
  "SEO Services",
  "Web Development",
  "Ads Management",
  "Web Design",
  "Content Writing",
  "Pitch Deck",
  "UI/UX Design",
  "Branding",
];

const MatterScene = () => {
  const sceneRef = useRef(null);
  

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Style the canvas to remove borders/outlines and ensure full coverage
    if (render.canvas) {
      render.canvas.style.position = "absolute";
      render.canvas.style.top = "0";
      render.canvas.style.left = "0";
      render.canvas.style.width = "100%";
      render.canvas.style.height = "100%";
      render.canvas.style.border = "none";
      render.canvas.style.outline = "none";
      render.canvas.style.background = "transparent";
      render.canvas.style.display = "block"; // removes inline gap
    }

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Static boundaries so boxes can't escape the screen
    const ground = Matter.Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true });
    const topWall = Matter.Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true });

    Matter.World.add(world, [ground, leftWall, rightWall, topWall]);

    // Create bodies with random x, y positions within the viewport with padding
    const bodies = labels.map((label) => {
      const x = Math.random() * (width - 160) + 96; // 80 px padding left and right
      const y = Math.random() * (height - 100) + 52; // 50 px padding top and bottom
      const body = Matter.Bodies.rectangle(x, y, 192, 50, {
        restitution: 0.9,
        render: {
          fillStyle: "#EBEBEB",
          strokeStyle: "transparent", // no border stroke
          lineWidth: 0,
        },
      });
      body.labelText = label;
      return body;
    });

    Matter.World.add(world, bodies);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.font = "18px Inter";
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      bodies.forEach((body) => {
        const pos = body.position;
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(body.angle);
        ctx.fillText(body.labelText, 0, 0);
        ctx.restore();
      });
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="w-full h-full relative" style={{ background: "transparent" }} />;
};

export default MatterScene;
