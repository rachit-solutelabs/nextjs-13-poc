import "./globals.css";

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
            The below cards use the new and improved Link component which
            doesn&apos;t require manually passing <code>{"<a></a>"}</code> tags.
          </p>
          <div></div>
        </section>
      </main>
    </>
  );
}
