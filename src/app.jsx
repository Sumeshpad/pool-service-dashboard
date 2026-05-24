import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./app.css";
import JobListing from "./components/JobListing";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1 className="text-5xl">Dashboard </h1>
        <h3>Job Listing</h3>

        <JobListing />
      </section>
    </>
  );
}
