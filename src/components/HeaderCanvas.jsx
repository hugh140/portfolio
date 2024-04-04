import { useEffect, useRef } from "react";
import { DrawLineFigure, NodeFigure, Particle } from "../classes/figures";

let loopId = null;

function HeaderCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    function resizeCanvas() {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
    resizeCanvas();

    const ctx = canvasRef.current.getContext("2d");
    const nodesArray = [];
    const particles = [];

    let totalParticles = 50;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      totalParticles /= 2;

    for (let i = 0; i < totalParticles; i++)
      nodesArray[i] = new NodeFigure(ctx, canvasRef.current);

    const grad = ctx.createLinearGradient(
      300,
      canvasRef.current.width / 2,
      300,
      0
    );

    grad.addColorStop(1, "black");
    grad.addColorStop(0, "#18181b");

    function animate() {
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (const node of nodesArray) {
        for (const nodeLine of nodesArray) DrawLineFigure(ctx, node, nodeLine);

        node.draw();
        node.update();
      }
      for (const particle of particles) {
        particle.draw();
        particle.update();
      }

      loopId = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", resizeCanvas);
    canvasRef.current.addEventListener("click", (evt) => {
      let distance, angle, vectorModule;
      let speed = { x: undefined, y: undefined };
      for (const node of nodesArray) {
        distance = Math.sqrt(
          Math.pow(node.position.x - evt.clientX, 2) +
            (node.position.y - evt.clientY, 2)
        );
        if (distance > 200) continue;

        angle = Math.atan2(
          node.position.y - evt.clientY,
          node.position.x - evt.clientX
        );
        speed.x = Math.cos(angle) * distance + node.speed.x;
        speed.y = Math.sin(angle) * distance + node.speed.y;
        vectorModule = Math.sqrt(Math.pow(speed.x, 2) + Math.pow(speed.y, 2));
        node.speed.x = (speed.x / vectorModule) * ((-6 / 100) * distance + 7);
        node.speed.y = (speed.y / vectorModule) * ((-6 / 100) * distance + 7);
      }
      for (let i = 0; i < Math.random() * 20 + 20; i++)
        particles[i] = new Particle(ctx, evt.clientX, evt.clientY);
    });

    return () => {
      cancelAnimationFrame(loopId);
    };
  }, []);

  return (
    <canvas
      className="w-full h-screen bg-zinc-900 shadow-2xl"
      ref={canvasRef}
    ></canvas>
  );
}
export default HeaderCanvas;
