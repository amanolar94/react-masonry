import { useEffect, useState } from "react";

function getDimensions() {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight
  };
}

export default function useDimensions() {
  const [state, setState] = useState(getDimensions);

  useEffect(() => {
    const updateDimensions = () => setState(getDimensions());
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return state;
}
