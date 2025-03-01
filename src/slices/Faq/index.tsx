'use client';
import { FC, SVGProps, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import { motion, Variants } from "framer-motion";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */

function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8" />
    </svg>
  );
}

function Minus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
    </svg>
  );
}

const Faq: FC<FaqProps> = ({ slice }) => {
  const [showAnswerIndices, setShowAnswerIndices] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setShowAnswerIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Hide answer
        : [...prev, index] // Show answer
    );
  };

  const parentVariants: Variants = {
    hidden: { height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-between-w-full my-4 md:my-8 gap-8">

        {isFilled.richText(slice.primary.heading) && (
          <h5 className="text-2xl md:text-4xl text-balance font-semibold ">
            <PrismicText field={slice.primary.heading} />
          </h5>
        )}
        {isFilled.richText(slice.primary.body) && (
          <p className="text-lg   text-balance font-medium mb-8">
            <PrismicText field={slice.primary.body} />
          </p>
        )}
      </div>

      <div className="w-full flex flex-col gap-4 md:gap-8">
        {slice.primary.questions.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={showAnswerIndices.includes(index) ? "visible" : "hidden"}
            variants={parentVariants}
            className="rounded-md border border-primary  glass-container overflow-hidden"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full font-semibold hover:opacity-75   transition-opacity duration-300 p-4"
              aria-expanded={showAnswerIndices.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              {isFilled.richText(item.question) && (
                <span className="text-left w-[70%]">
                  <PrismicText field={item.question} />
                </span>
              )}
              {showAnswerIndices.includes(index) ? <Minus /> : <Plus />}
            </button>

            <motion.div
              initial="hidden"
              animate={showAnswerIndices.includes(index) ? "visible" : "hidden"}
              variants={answerVariants}
              className="overflow-hidden"
              id={`faq-answer-${index}`}
            >
              {isFilled.richText(item.answer) && (
                <p className="mt-4 text-balance w-full p-4 pt-0">
                  <PrismicText field={item.answer} />
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Bounded>
  );
};

export default Faq;