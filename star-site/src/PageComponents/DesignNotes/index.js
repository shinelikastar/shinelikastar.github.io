// @flow
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./DesignNotes.css";
import Header from "../../shared-components/Header";

// const Accordion = ({ i, expanded, setExpanded }) => {
//   const isOpen = i === expanded;

//   // By using `AnimatePresence` to mount and unmount the contents, we can animate
//   // them in and out while also only rendering the contents of open accordions
//   return (
//     <>
//       <motion.header
//         initial={false}
//         animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
//         onClick={() => setExpanded(isOpen ? false : i)}
//       />
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <p>hello</p>
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

class DesignNotes extends React.Component {
  renderNotes = () => {
    return (
      <div className="DesignNotes--thoughts">
        <details></details>
        <p>
          This is a space to name all the wondrous things that resulted in the
          creation of this website. If you found any amount of delight in the
          drawings (of me in various states), these were done by my{" "}
          <a href="https://floriatsui.github.io/">talented sister Floria</a>. I
          am grateful for her patience. She has an uncanny ability to listen to
          my indecision and pick a side.
          <br></br>
          <br></br>
          The headers are set in Rowdies, the body in Jost. If you take
          typefaces seriously, I want you to know that I am a serifs girl. Their
          delicate temperament was not suited for the ample usage of emojis.
          <br></br>
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="DesignNotes-page">
        <Header text="some notes on design 🌿" />
        <div className="DesignNotes-container">{this.renderNotes()}</div>
      </div>
    );
  }
}

export default DesignNotes;
