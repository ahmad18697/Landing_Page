const defaultTransition = (delay = 0, type = "spring", duration = 1.25, ease = [0.25, 0.25, 0.25, 0.75]) => ({
  type,
  duration,
  delay,
  ease,
});

export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: defaultTransition(delay),
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (direction = "left", type = "tween", delay = 0, duration = 0.5) => ({
  hidden: {
    x: ["left", "right"].includes(direction) ? (direction === "left" ? "-100%" : "100%") : 0,
    y: ["up", "down"].includes(direction) ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: defaultTransition(delay),
  },
});

export const scale = (delay = 0) => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: defaultTransition(delay),
  },
});
