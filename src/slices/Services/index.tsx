import { FC, JSX, SVGProps } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/Components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/Components/ButtonLink";
import { createClient } from "@/prismicio";
import clsx from "clsx";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


function CheckSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-34.34 77.66l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></path></svg>
  )
}

/**
 * Fetches service documents based on the slice items.
 */
const fetchServices = async (slice: Content.ServicesSlice) => {
  const client = createClient();

  // Fetch all services in parallel
  const services = await Promise.all(
    slice.primary.services.map(async (item) => {
      if (isFilled.contentRelationship(item.service)) {
        return await client.getByID<Content.ServiceDocument>(item.service.id);
      }
      return null; // Return null for invalid items
    })
  );

  // Filter out null values and return only valid services
  return services.filter((service) => service !== null) as Content.ServiceDocument[];
};

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = async ({ slice }: ServicesProps): Promise<JSX.Element> => {
  const services = await fetchServices(slice);
  console.log("🚀 ~ constServices:FC<ServicesProps>= ~ services:", services)

  return (

    <Bounded

      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div className="flex justify-between lg:mt-16 w-full items-center">
        {isFilled.richText(slice.primary.heading) && (
          <h2 className="hero__heading text-balance text-2xl font-semibold md:font-medium md:text-5xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
        )}

        {isFilled.link(slice.primary.link) && (
          <ButtonLink className="text-xs md:text-base" field={slice.primary.link}>
            {slice.primary.label}
          </ButtonLink>
        )}
      </div>

      <div className={clsx("mt-10 grid gap-4 md:gap-8 ", slice.variation === 'servicePageServiceSlice' ? 'md:grid-cols-1' : 'md:grid-cols-2')}>
        {services.map(
          (service) =>
            service && (
              <div key={service.id} className={clsx("grid ", slice.variation === 'servicePageServiceSlice' ? 'md:grid-cols-2 w-full gap-2 lg:gap-4 justify-items-stretch' : '')}>

                <div className="flex bg-slate-950  text-white rounded-2xl flex-col p-4 lg:p-8 gap-4 md:gap-6 justify-center">
                  <div>

                    <PrismicNextImage className="rounded-lg  h-20 w-20" field={service.data.icon} />
                  </div>
                  <h4 className="text-balance text-brand text-2xl font-medium md:text-3xl">

                    <PrismicText field={service.data.service} />
                  </h4>
                  <p className="font-medium">

                    <PrismicText field={service.data.description} />
                  </p>
                  <div className={clsx("", slice.variation === 'servicePageServiceSlice' ? 'block' : 'hidden')}>
                    <PrismicRichText components={{
                      heading2: ({ children }) => (
                        <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
                          {children}
                        </h2>
                      ),
                      em: ({ children }) => (
                        <em className="bg-gradient-to-b inline-flex text-lg gap-4 py-2 from-brandWhite to-brand  bg-clip-text not-italic text-transparent">
                          <span className="text-brand"><CheckSquare/></span>{children}
                        </em>
                      ),
                    }} field={service.data.what_we_did} />
                  </div>
                  <PrismicNextLink
                    document={service}
                    className=" text-accent lg:text-lg font-medium hover:underline"
                  >
                    {service.data.label}
                  </PrismicNextLink>
                </div>
                <div className={clsx("  flex-col items-end gap-4 justify-center ", slice.variation === 'servicePageServiceSlice' ? "md:flex" : "hidden")}>
                  <div>

                    <PrismicNextImage className="h-40   w-40 object-cover rounded-md  border-none" field={service.data.reviewer_image} />
                  </div>
                  <div className="text-balance text-end text-xl font-medium">

                    <PrismicText field={service.data.review_comment} />
                  </div>
                  <p className="font-medium">

                    <PrismicText field={service.data.review_name} />
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Services;