import React, { useRef, useEffect } from "react";

const STAR_COUNT = 50;
const STAR_SIZE = 1;
const STAR_COLOR = "#fff";
const LINE_COLOR = "rgba(255,255,255,0.2)";
const LINE_DISTANCE = 180;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const StarNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const animationRef = useRef<number>(0);
  const cursor = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.1, 0.1),
      vy: randomBetween(-0.1, 0.1),
    }));

    function animate() {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      // Move and draw stars
      for (const star of stars.current) {
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, STAR_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = STAR_COLOR;
        ctx.fill();
      }

      // Draw lines between close stars
      for (let i = 0; i < STAR_COUNT; i++) {
        for (let j = i + 1; j < STAR_COUNT; j++) {
          const a = stars.current[i];
          const b = stars.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw cursor star and connect to nearby stars
      if (cursor.current) {
        ctx.beginPath();
        ctx.arc(cursor.current.x, cursor.current.y, STAR_SIZE + 1, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        for (const star of stars.current) {
          const dist = Math.hypot(cursor.current.x - star.x, cursor.current.y - star.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(cursor.current.x, cursor.current.y);
            ctx.lineTo(star.x, star.y);
            ctx.strokeStyle = "rgba(255,255,255,0.5)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Handle mouse leave
    const handleMouseLeave = () => {
      cursor.current = null;
    };
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default StarNetworkBackground;