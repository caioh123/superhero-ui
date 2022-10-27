import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const modalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "red",
  },
};

export const Modal = ({
  children,
  isOpen,
  onAfterOpen,
  onRequestClose,
  contentLabel,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={modalCustomStyles}
      contentLabel={contentLabel}
    >
      {children}
    </ReactModal>
  );
};
