import Head from "next/head";

import "@fontsource/inter";
import "@fontsource/space-grotesk";
import "@fontsource/space-mono";

import Navbar from "components/layout/Navbar";
import "styles/globals.css";
import Footer from "components/layout/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
        <AnimatePresence exitBeforeEnter>
          <main className="container flex-1 w-screen p-4 mx-auto xl:w-2/3 md:w-3/4">
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
