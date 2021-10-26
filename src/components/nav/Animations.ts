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
    y: "-300",
  },
  visible: {
    y: 0,
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
      duration: 0.5,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    color: "#393EFA",
  },
};

export const secondListEl = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
    },
  },
  hover: {
    scale: 1.1,
    color: "#393EFA",
  },
};

export const thirthListEl = {
  hidden: {
    y: "-100",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  hover: {
    scale: 1.1,
    color: "#393EFA",
  },
};
