import Link from "next/link";

/* eslint-disable @next/next/no-head-element */
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="layout">
        <nav>
          <ul className="ul-nav">
            <Link href={"/"} className="nav-link">
              Home
            </Link>
            <Link href={"/turbopack"} className="nav-link">
              Turbopack
            </Link>
            <Link href={"/next-font"} className="nav-link">
              @next/font
            </Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
