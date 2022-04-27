import Head from "next/head";

import "@fontsource/space-mono";
import "@fontsource/space-grotesk";

import Navbar from "components/layout/Navbar";
import "styles/globals.css";
import Footer from "components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="I'm Osama AlQudah (BasicPixel), a full-stack web developer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>BasicPixel</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="container flex-1 p-4 mx-auto xl:w-1/2 md:w-2/3 sm:w-screen">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
