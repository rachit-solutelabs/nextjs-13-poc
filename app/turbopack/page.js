/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import imgWithTurbopack from "../../public/with_turbopack.png";
import imgWithoutTurbopack from "../../public/without_turbopack.png";

export default function TurbopackPage() {
  return (
    <>
      <main>
        <h2 className="topic-heading">
          Showcasing{" "}
          <Link
            href={"https://nextjs.org/docs/advanced-features/turbopack"}
            target="_blank"
            className="underlined"
          >
            Turbopack
          </Link>
        </h2>
        <section>
          <p>Turbopack currently works in development server only.</p>
          <div className="comparision-container">
            <p>Initial compilation time without Turbopack:</p>
            <img
              src={imgWithoutTurbopack}
              loading="lazy"
              alt="Terminal output of compilation time without Turbopack"
              width={1000}
            />
          </div>
          <div className="comparision-container">
            <p>Initial compilation time with Turbopack:</p>
            <img
              src={imgWithTurbopack}
              loading="lazy"
              alt="Terminal output of compilation time with Turbopack"
            />
          </div>
        </section>
      </main>
    </>
  );
}
