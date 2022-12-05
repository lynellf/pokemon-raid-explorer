import Head from "next/head";
import Landing from "views/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon Raid Explorer</title>
        <meta
          name="description"
          content="See Which Pokemon are Best for Raids"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
      </main>
    </div>
  );
}
