import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ children, closeCartHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={closeCartHandler}></div>,
        document.getElementById("portal")
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>{children}</div>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default Modal;
