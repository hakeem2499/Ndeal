// success/page.tsx
import React from "react";
import Bounded from "@/Components/Bounded";
import { Spotlight } from "@/Components/ui/SpotLight";

// Define the props type for the page component
interface SuccessPageProps {
  searchParams?: {
    name?: string;
    success?: string;
  };
}

// Explicitly mark the page as dynamic
export const dynamic = "force-dynamic";

// Server Component: no "use client"
const SuccessPage: React.FC<SuccessPageProps> = ({ searchParams }) => {
  const name = searchParams?.name?.toUpperCase() || "";
  const success = searchParams?.success === "true";

  return (
    <Bounded className="lg:h-screen w-full mt-16 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      {name && success && (
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Thank You {name}
          </h1>
          <p className="mt-4 font-medium text-base text-neutral-300 max-w-lg md:text-lg text-center mx-auto">
            We've received your message and our Team will be in touch soon
          </p>
        </div>
      )}
    </Bounded>
  );
};

export default SuccessPage;