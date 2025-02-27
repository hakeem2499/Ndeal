import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
      <div className="flex flex-col md:flex-row items-center mt-20">
        {slice.primary.approaches.map((item, index) => (
          <React.Fragment key={index}>
            {index === Math.floor(slice.items.length / 2) && (
              <>

                <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
            <div className="flex flex-col items-center gap-4 ">
              <div className="h-30 w-40">
                <PrismicNextImage field={item.image} priority quality={100} />
              </div>
              <PrismicRichText field={item.heading} />
              <PrismicRichText field={item.body} />
            </div>
            {index !== slice.items.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(slice.items.length / 2)
                    ? "rotate-180"
                    : "rotate-0",
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
