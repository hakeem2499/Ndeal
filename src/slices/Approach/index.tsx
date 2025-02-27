import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

/**
 * Props for `Approach`.
 */
export type ApproachProps = SliceComponentProps<Content.ApproachSlice>;

/**
 * Component for "Approach" Slices.
 */
const Approach: FC<ApproachProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <h4 className="text-balance text-center text-3xl mt-[25%] md:mt-[15%] font-semibold  md:text-5xl">
          <PrismicText field={slice.primary.heading} />
        </h4>
      )}
      <div className="flex flex-col w-full md:flex-row items-center mt-20">
        {slice.primary.approaches.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col md:w-1/4 items-center gap-4">
              <div className="h-30 w-40">
                <PrismicNextImage field={item.image} priority quality={100} />
              </div>
              <h6 className="text-xl md:text-2xl font-semibold text-center text-balance">

                <PrismicText field={item.heading} />
              </h6>
              <p className="font-medium text-lg text-center text-balance">

              <PrismicText field={item.body} />
              </p>
            </div>

            {/* Render signal-line between elements, but not after the last one */}
            {index !== slice.primary.approaches.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(slice.primary.approaches.length / 2)
                    ? "rotate-180"
                    : "rotate-0"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default Approach;
