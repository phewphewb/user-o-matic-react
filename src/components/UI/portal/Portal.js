import { useEffect } from "react";
import { createPortal } from "react-dom";
const modal = document.getElementById("modal");
const div = document.createElement("div");

const Portal = ({ children }) => {
  useEffect(() => {
    modal.appendChild(div);
    return () => {
      modal.removeChild(div);
    };
  }, []);
  return createPortal(children, div);
};
export default Portal;
