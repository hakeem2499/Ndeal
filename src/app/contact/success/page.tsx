// app/contact/success/page.tsx
import React from "react";
import { headers } from "next/headers"; // Import headers to access request info
import Bounded from "@/Components/Bounded";
import { Spotlight } from "@/Components/ui/SpotLight";

// No dynamic export needed since we're handling it manually

const SuccessPage: React.FC = async () => {
  // Get the headers from the current request
  const headersList = headers();
  // Get the full URL from the 'x-url' header or reconstruct it
  const url = (await headersList).get("x-url") || (await headersList).get("referer") || "http://localhost:3000/contact/success";
  
  // Parse the query string manually
  const queryParams = new URL(url).searchParams;
  const name = (queryParams.get("name") || "").toUpperCase();
  const success = queryParams.get("success") === "true";

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