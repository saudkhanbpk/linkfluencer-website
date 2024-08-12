import { Inter } from "next/font/google";
import { metadata } from "./metadata";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as React.ReactNode}</title>
      </Head>
      <div className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

const Header: React.FC = () => (
  <header>
    <nav>
      {/* Navigation items */}
    </nav>
  </header>
);

const Footer: React.FC = () => (
  <footer>
    {/* Footer content */}
  </footer>
);

export default RootLayout;