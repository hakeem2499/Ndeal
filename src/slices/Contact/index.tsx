import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import ContactForm from "@/app/contact/ContactForm";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <h1 className="text-3xl mt-16 md:mt-24 font-semibold md:text-5xl">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}
      <ContactForm/>
    </Bounded>
  );
};

export default Contact;
