// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link href="/" className="text-accent">
        Go back to Home
      </Link>
    </div>
  );
}