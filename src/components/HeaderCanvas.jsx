import { useEffect, useRef } from "react";
import { DrawLineFigure, NodeFigure } from "../classes/figures";

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
    for (let i = 0; i < 50; i++)
      nodesArray[i] = new NodeFigure(ctx, canvasRef.current);

    function animate() {
      ctx.fillStyle = "#18181b";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (const node of nodesArray) {
        for (const nodeLine of nodesArray) {
          DrawLineFigure(ctx, node, nodeLine);
        }

        node.update();
        node.draw();
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
        console.log(distance);

        angle = Math.atan2(
          node.position.y - evt.clientY,
          node.position.x - evt.clientX
        );
        speed.x = Math.cos(angle) * distance + node.speed.x;
        speed.y = Math.sin(angle) * distance + node.speed.y;
        vectorModule = Math.sqrt(Math.pow(speed.x, 2) + Math.pow(speed.y, 2));
        node.speed.x = (speed.x / vectorModule) * ((-3 / 100) * distance + 4);
        node.speed.y = (speed.y / vectorModule) * ((-3 / 100) * distance + 4);
        console.log(node.speed.x, node.speed.y);
      }
    });

    return () => {
      cancelAnimationFrame(loopId);
    };
  }, []);

  return (
    <canvas className="w-full h-screen bg-zinc-900" ref={canvasRef}></canvas>
  );
}
export default HeaderCanvas;
