import { frame, motion, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 };

function useFollowPointer(ref: React.RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;
      if (!element) return;
      frame.read(() => {
        x.set(clientX - element.offsetWidth / 2);
        y.set(clientY - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}

const ballStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  boxShadow: "0 0 16px 4px #a78bfa88",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 50,
  mixBlendMode: "difference",
  background: "linear-gradient(135deg, #3b82f6 0%, #a78bfa 100%)",
  left: 0,
  top: 0,
};

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        ...ballStyle,
        x,
        y,
      }}
    />
  );
};

export default CustomCursor;