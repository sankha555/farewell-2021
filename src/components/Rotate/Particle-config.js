const particlesConfig = {
  particles: {
    number: {
      value: 70,
    },
    size: {
      value: 3,
    },
    color: {
      value: "#ffffff",
    },
    opacity: {
      value: 0.1,
    },
    links: {
      opacity: 0.3,
    },
  },
  interactivity: {
      detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  background: {
    color: {
      value: "#181A1B",
    },
  },
};

export default particlesConfig;