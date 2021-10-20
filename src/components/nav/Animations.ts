export const square = {
  hidden: {
    y: "-200",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
};

export const line = {
  hidden: {
    x: "-50",
    rotate: 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    rotate: 90,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      opacity: {
        delay: 1.5,
      },
    },
  },
};

export const name = {
  hidden: {
    x: "600",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const firstListEl = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "2px 2px 2px rgba(57,62,250,0.4)",
  },
};

export const secondListEl = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      delay: 1,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "2px 2px 2px rgba(57,62,250,0.4)",
  },
};

export const thirthListEl = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      delay: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "2px 2px 2px rgba(57,62,250,0.4)",
  },
};
