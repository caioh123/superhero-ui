import ReactModal from "react-modal";
import PropTypes from "prop-types";

ReactModal.setAppElement("#root");

const modalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(113, 113, 113, 0.5)",
  },
};

export const Modal = ({ children, isOpen, onAfterOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={modalCustomStyles}
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
