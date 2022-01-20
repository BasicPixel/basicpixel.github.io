import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="I'm Osama AlQudah, a full-stack web developer"
        />
        <title>Osama AlQudah</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
