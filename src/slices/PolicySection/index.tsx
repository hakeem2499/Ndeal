import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for policy_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PolicySection;
