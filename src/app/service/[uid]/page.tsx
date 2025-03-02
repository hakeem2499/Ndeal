import Bounded from '@/Components/Bounded';
import StarRating from '@/Components/ui/StarRating';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { asText } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceZone } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

type Params = { uid: string };

/**
 * Fetches the service page data from Prismic.
 */
const fetchServicePage = async (uid: string) => {
    const client = createClient();
    return await client.getByUID('service', uid).catch(() => notFound());
};


/**
 * Service Page Component.
 */
export default async function Page({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params; // Await params to resolve the Promise
    const page = await fetchServicePage(resolvedParams.uid);

    return (
        <Bounded>
            <div className=" mt-16 grid place-items-center text-center">
                <p className="text-lg uppercase text-brand">Services</p>
                <h1 className="text-5xl text-center text-balance font-semibold mt-4">
                    <PrismicText field={page.data.heading} />
                </h1>
                <p className="mb-4 mt-8 max-w-xl font-medium text-lg">
                    <PrismicText field={page.data.description} />
                </p>
                <PrismicNextImage
                    field={page.data.image}
                    className="rounded-lg h-auto w-fit object-cover"
                    quality={100}
                />
            </div>
            <div className="mx-auto">
                <SliceZone slices={page.data.slices} components={components} />
            </div>
            <div className="flex flex-col gap-8 lg:p-4 glass-container rounded-lg   md:flex-row items-center  justify-center mx-auto w-full">
                <div>

                    <PrismicNextImage className="h-40   w-40 object-cover rounded-md  border-none" field={page.data.reviewer_image} />
                </div>
                <div className="flex  flex-col gap-4 md:gap-8 items-center w-full">
                    <div className="text-balance text-center  text-xl max-w-xl font-medium">

                        <PrismicText field={page.data.review_comment} />
                    </div>

                    <p className="justify-between md:gap-8 lg:gap-16 flex-col md:flex-row flex items-center  font-medium">
                        <PrismicText  field={page.data.review_name} />
                        <span className='text-xl text-brand'><StarRating rating={5}/></span>
                    </p>
                </div>
            </div>
        </Bounded>
    );
}

/**
 * Generates metadata for the service page.
 */
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const resolvedParams = await params; // Await params to resolve the Promise
    const client = createClient();
    const page = await client.getByUID('service', resolvedParams.uid).catch(() => null);

    if (!page) {
        return {
            title: 'Service Not Found',
            description: 'The requested service does not exist.',
        };
    }

    return {
        title: `${page.data.meta_title || asText(page.data.service) + ' service'}`,
        description: page.data.meta_description,
    };
}

/**
 * Generates static paths for all service pages.
 */
export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType('service');

    return pages.map((page) => ({ uid: page.uid }));
}