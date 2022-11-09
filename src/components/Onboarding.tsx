import contents from "../assets/data/db.json";
import Dots from "./Dot";
import { Operation, PagePropsWithPaginate } from "./PageProps";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useCallback } from "react";
import OnboardingContent from "./OnboardingContent";
import SkipButton from "./SkipButton";
import SkipModal from "./SkipModal";
import LetterToggleButton from "./LetterToggleButton";

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Onboarding = () => {
  const total = contents.length;
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isLargeLetter, setLargetLetter] = useState<boolean>(false);

  const paginNation = (op: Operation) => {
    const calculatePage = (index: number): number => Math.abs(index % 3);
    setIndex(calculatePage(index + op));
  };

  return (
    <div className="container">
      <LetterToggleButton
        isLargeLetter={isLargeLetter}
        setLargetLetter={setLargetLetter}
      ></LetterToggleButton>
      <Dots pageCount={total} pageIndex={index}></Dots>
      <OnboardingPage
        total={total}
        index={index}
        isLargeLetter={isLargeLetter}
        paginate={useCallback(
          (op: Operation) => {
            paginNation(op);
          },
          [index]
        )}
      ></OnboardingPage>
      <SkipButton handleOpen={setModalOpen} />
      {modalOpen ? <SkipModal handleClose={setModalOpen}></SkipModal> : null}
    </div>
  );
};

const OnboardingPage = ({
  total,
  index,
  paginate,
  isLargeLetter,
}: PagePropsWithPaginate) => {
  const [operation, setOperation] = useState<Operation>(Operation.NEXT);

  const variants = {
    enter: (operation: number) => {
      return {
        x: operation > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (operation: number) => {
      return {
        zIndex: 0,
        x: operation < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="slider">
      <AnimatePresence initial={false} custom={operation}>
        {contents
          .filter((content) => content.index === index)
          .map((content) => (
            <motion.div
              className="slider"
              key={content.index}
              custom={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  setOperation(Operation.NEXT);
                  paginate(Operation.NEXT);
                } else if (swipe > swipeConfidenceThreshold) {
                  setOperation(Operation.PREV);
                  paginate(Operation.PREV);
                }
              }}
            >
              <OnboardingContent isLargeLetter={isLargeLetter} {...content} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
