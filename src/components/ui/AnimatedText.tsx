import { motion } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "fade" | "slide" | "typewriter" | "stagger";
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  type = "fade",
}: AnimatedTextProps) => {
  const words = text.split(" ");
  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: type === "stagger" ? 0.1 : 0.03,
      },
    },
  };

  const childVariants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slide: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    typewriter: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    stagger: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  if (type === "typewriter") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={childVariants[type]}
            transition={{ duration: 0.05 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (type === "stagger") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants[type]}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.span variants={childVariants[type]}>{text}</motion.span>
    </motion.div>
  );
};

export default AnimatedText;
