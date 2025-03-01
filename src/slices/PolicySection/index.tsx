import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";

/**
 * Props for `PolicySection`.
 */
export type PolicySectionProps =
  SliceComponentProps<Content.PolicySectionSlice>;

/**
 * Component for "PolicySection" Slices.
 */
const PolicySection: FC<PolicySectionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <h1 className="text-5xl mt-16 md:text-7xl max-w-3xl font-semibold text-balance">

          <PrismicText field={slice.primary.heading} />
        </h1>
      )}
      {isFilled.richText(slice.primary.body) && (
        <p className=" font-medium text-lg w-full text-balance">

          <PrismicText field={slice.primary.body} />
        </p>
      )}

      {slice.primary.sections.map((item) => (

        <div className="flex flex-col gap-4 md:gap-8 justify-between w-full">
          {isFilled.richText(item.heading) && (
            <h1 className="text-2xl md:text-4xl max-w-6xl font-semibold text-balance">

              <PrismicText field={item.heading} />
            </h1>
          )}
          {isFilled.richText(item.body) && (
            <p className=" font-medium text-lg w-full text-balance">

              <PrismicText field={item.body} />
            </p>
          )}
        </div>
      ))}
    </Bounded>
  );
};

export default PolicySection;
