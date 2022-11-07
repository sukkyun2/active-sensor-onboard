import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type ModalProps = {
  handleClose: Dispatch<SetStateAction<boolean>>;
};

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const SkipModal = ({ handleClose }: ModalProps) => {
  const modalClose = () => handleClose(false);

  return (
    <Backdrop onClick={modalClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-content">
          <p>아직 많은 혜택이 남아있어요</p>
        </div>
        <div className="modal-buttons">
          <button className="modal-button-skip">그만 볼게요</button>
          <button className="modal-button" onClick={modalClose}>마저 볼게요!</button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default SkipModal;
