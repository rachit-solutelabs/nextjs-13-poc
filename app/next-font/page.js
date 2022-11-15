import { Fjord_One, Quantico, Comic_Neue, Piazzolla } from "@next/font/google";

const fjordOneFont = Fjord_One({ weight: "400", subsets: ["latin"] });
const quanticoFont = Quantico({ weight: "400", subsets: ["latin"] });
const comicFont = Comic_Neue({ weight: "400", subsets: ["latin"] });
const piazzollaFont = Piazzolla({ weight: "400", subsets: ["latin"] });

export default function NextFontPage() {
  return (
    <>
      <main>
        <h2 className="topic-heading">
          Showcasing font optimization with @next/font
        </h2>
        <div className="font-container">
          <p className={`${fjordOneFont?.className}`}>Using Fjord_One</p>
          <p className={`${quanticoFont?.className}`}>Using Quantico</p>
          <p className={`${comicFont?.className}`}>Using Comic_Neue</p>
          <p className={`${piazzollaFont?.className}`}>Using Piazzolla</p>
        </div>
      </main>
    </>
  );
}
