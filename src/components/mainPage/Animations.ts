export const image = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const phone = {
  hidden: {
    x: "-400",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const email = {
  hidden: {
    x: "-800",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const socials = {
  hidden: {
    x: "-400",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const about = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const darkBg = {
  visible: {
    width: "40%",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    width: 0,
    transition: {
      duration: 0.5,
    },
  },
};
