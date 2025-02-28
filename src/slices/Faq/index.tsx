import { FC, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import { motion, Variants } from "framer-motion"; // Corrected import

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq: FC<FaqProps> = ({ slice }) => {
  const [showAnswerIndices, setShowAnswerIndices] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setShowAnswerIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Hide answer
        : [...prev, index] // Show answer
    );
  };

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <h5 className="text-2xl md:text-4xl text-balance font-semibold mb-8">
          <PrismicText field={slice.primary.heading} />
        </h5>
      )}
      <div className="w-full flex flex-col gap-4">
        {slice.primary.questions.map((item, index) => (
          <div key={index} className="rounded-md border border-primary p-4">
            <div className="flex justify-between items-center">
              {isFilled.richText(item.question) && (
                <p className="font-medium text-lg">
                  <PrismicText field={item.question} />
                </p>
              )}
              <button
                onClick={() => toggleAnswer(index)}
                className="text-primary font-semibold"
              >
                {showAnswerIndices.includes(index) ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
            {showAnswerIndices.includes(index) && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={answerVariants}
                className="overflow-hidden"
              >
                {isFilled.richText(item.answer) && (
                  <p className="mt-4 text-balance">
                    <PrismicRichText field={item.answer} />
                  </p>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Faq;