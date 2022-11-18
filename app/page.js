import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h2 className="topic-heading">
          Hey! Welcome to this little demo for Next.js 13, showcasing a few of
          its features: Turbopack, self-hosting fonts, and the improved Link
          component!
        </h2>
        <section>
          <p>
            The below blocks use the new and improved Link component which
            doesn&apos;t require manually passing <code>{"<a></a>"}</code> tags.
          </p>
          <div className="card-parent">
            <Link href={"/turbopack"} className="card">
              Turbopack
            </Link>
            <Link href={"/next-font"} className="card">
              @next/font
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
