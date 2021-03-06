import React from "react";
import { motion } from "framer-motion";

import "./TopButton.css";
import pointingUp from "../../assets/pointing-up.png";

function TopButton() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDown = yPos > lastYPos;

      setShouldShowActions(isScrollingDown);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  function handleScroll() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <motion.button
      type="button"
      className="Top-button"
      onClick={handleScroll}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{
        opacity: { duration: 0.2 },
        y: { duration: 0.1 },
      }}
    >
      <img src={pointingUp} alt="Top button"></img>
    </motion.button>
  );
}

export default TopButton;
