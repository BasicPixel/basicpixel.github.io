import Head from "next/head";

import "@fontsource/space-mono";
import "@fontsource/space-grotesk";

import Navbar from "components/Navbar";
import "styles/globals.css";
import Footer from "components/Footer";

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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
