import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ShowCase`.
 */
export type ShowCaseProps = SliceComponentProps<Content.ShowCaseSlice>;

/**
 * Component for "ShowCase" Slices.
 */
const ShowCase: FC<ShowCaseProps> = ({ slice }) => {
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

      {isFilled.richText(slice.primary.body) && (
        <div className=" mt-6  text-balance w-full font-medium text-lg md:text-2xl">
          <PrismicRichText  field={slice.primary.body} />
        </div>
      )}

      {isFilled.image(slice.primary.image) && (
        <div className=" glass-container mt-16 w-fit ">
          
          <PrismicNextImage
            className="rounded-lg"
            field={slice.primary.image}
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
      )}
    </Bounded>
  );
};

export default ShowCase;
