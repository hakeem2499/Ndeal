// app/error.tsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string }; // Error object with optional digest
  reset: () => void; // Function to retry rendering the page
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service (optional)
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      {error.digest && <p>Error Digest: {error.digest}</p>}
      <button
        onClick={() => reset()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}