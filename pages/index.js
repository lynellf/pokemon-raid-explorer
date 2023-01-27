import Head from "next/head";
import MatchupFinder from "components/MatchupFinder";

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
      <MatchupFinder />
    </div>
  );
}
