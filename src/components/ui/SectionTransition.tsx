import { motion } from "motion/react";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const SectionTransition = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionTransitionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial={directionVariants[direction]}
      animate={
        isVisible ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]
      }
      transition={{
        duration: 0.8,
        delay: isVisible ? delay : 0,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionTransition;
