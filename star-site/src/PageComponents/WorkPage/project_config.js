export default [
  {
    title: "Weenix",
    description:
      "Unix-like kernel built as a semester long project for Operating Systems (CS167/69). It's hard to articulate how much I loved building this. Ask me about shadow chains in fork, or the days-long bug I had in my waitpid implementation. I am now always down to learn and patience my way through systems programming.",
    languages: ["A lot of C", "A lot of GDB", "Assembly"],
    links: {
      github: "https://github.com/brown-cs1690/weenix-2020-shinelikastar",
    },
    imgs: {
      static: "./images/weenix/weenix_static.png",
    },
  },
  {
    title: "Address Autocomplete",
    description:
      "During my summer 2020 internship at Stripe, I designed a new form field UI for their Checkout page that searches for addresses as users type. I learned so much about the intricacies and level of detail that goes into building one component. Very excited to see something I built be used in the real world!",
    languages: ["React", "Framer Motion", "Redux", "Ruby", "Jest"],
    links: {
      redirect: "https://stripe.com/payments/checkout",
    },
    imgs: {
      static: "./images/eggs/eggs_static.png",
    },
  },
  {
    title: "Eggs-ibition",
    description:
      "Photorealistic rendering of eggs with depth of field, texture, displacement and shadow mapping, mounted on a Bézier camera. This was a whimsical project I worked on with my friends for the final in Graphics (CS1230), modeling a museum for eggs. We learned that shadow mapping is hard, eggs do not obey mathematical modeling, and that GLSL is maddening to debug, but always just so cool.",
    languages: ["C++", "GLSL"],
    links: {
      github: "https://github.com/shinelikastar/cs1230-eggs",
    },
    imgs: {
      static: "./images/eggs/eggs_static.png",
    },
  },
  {
    title: "Raisin-Bread",
    description:
      "Inspired by Tamagotchi, we designed a Chrome extension, where users raise pet bread in their browser by staying productive. I designed the popup to control the settings for the extenstion, logic for the pomodoro timers, and created real-time data visualizations of user browsing history. This was my first large-scale software project. The best part was watching my friends use whenever they needed to be productive. ",
    languages: ["Javascript", "d3.js", "jQuery", "HTML", "CSS"],
    links: {
      files: "tinyurl.com/raisin-bread-full",
    },
    imgs: {
      static: "./images/eggs/eggs_static.png",
    },
  },
  {
    title: "Ray",
    description:
      "Multithreaded raytracer implemented according to the Phong lighting equation. Capable of rendering reflection, shadows, specular highlights, directional lighting, attenuation. I am delighted to use math whenever it comes up in programming, and this project definitely satisfied that itch. I loved being able to program something that could be modeled so precisely by physics. Visual debugging is the best. ",
    languages: ["C++", "GLM"],
    links: {},
    imgs: {
      static: "./images/ray/ray_static.png",
    },
  },
];
