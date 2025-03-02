// app/not-found.tsx
import Bounded from "@/Components/Bounded";
import Link from "next/link";

export default function NotFound() {
  return (
    <Bounded >
      <h1 className="mt-16 md:mt-24 text-2xl">404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/" className="text-accent hover:underline">
        Go back to Home
      </Link>
    </Bounded>
  );
}