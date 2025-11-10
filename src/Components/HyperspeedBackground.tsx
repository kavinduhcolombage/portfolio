import React, { useRef, useEffect } from "react";

type Line = {
  x: number;
  y: number;
  length: number;
  speed: number;
  width: number;
  color: string;
};

const hyperspeedPreset = {
  roadWidth: 10,
  lightPairsPerRoadWay: 50,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  colors: {
    background: 0x000000,
    sticks: 0x03b3c3,
  },
};

const HyperspeedHighway: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize lines from center top
    const createLines = () => {
      const lines: Line[] = [];
      for (let i = 0; i < hyperspeedPreset.lightPairsPerRoadWay; i++) {
        const x =
          width / 2 +
          (Math.random() - 0.5) * hyperspeedPreset.roadWidth * 20;
        const y = Math.random() * height * -1; // start above screen
        const length =
          hyperspeedPreset.lightStickHeight[0] * 20 +
          Math.random() *
            (hyperspeedPreset.lightStickHeight[1] -
              hyperspeedPreset.lightStickHeight[0]) *
            20;
        const speed =
          hyperspeedPreset.movingAwaySpeed[0] +
          Math.random() *
            (hyperspeedPreset.movingAwaySpeed[1] -
              hyperspeedPreset.movingAwaySpeed[0]);
        const lineWidth =
          hyperspeedPreset.lightStickWidth[0] +
          Math.random() *
            (hyperspeedPreset.lightStickWidth[1] -
              hyperspeedPreset.lightStickWidth[0]);
        lines.push({
          x,
          y,
          length,
          speed,
          width: lineWidth * 5,
          color: `#${hyperspeedPreset.colors.sticks.toString(16)}`,
        });
      }
      return lines;
    };

    linesRef.current = createLines();

    const render = () => {
      ctx.fillStyle = `#${hyperspeedPreset.colors.background.toString(16)}`;
      ctx.fillRect(0, 0, width, height);

      linesRef.current.forEach((line) => {
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        line.y += line.speed * 0.1; // move down

        // Reset when out of screen
        if (line.y > height) {
          line.y = -line.length;
          line.x =
            width / 2 +
            (Math.random() - 0.5) * hyperspeedPreset.roadWidth * 20;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default HyperspeedHighway;
