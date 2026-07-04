import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurora — mood-driven underwear</title>
        <meta name="description" content="Aurora translates mood into curated underwear suggestions and small rituals." />
      </Head>
      <main style={{fontFamily: '"Inter", system-ui, -apple-system', padding: 48}}>
        <h1 style={{fontSize: 36, marginBottom: 12}}>Aurora</h1>
        <p style={{color: '#666', marginBottom: 24}}>
          Mood-driven underwear and ritual suggestions — quiet, tactile, and a little dangerous.
        </p>
        <section>
          <button style={{padding: '12px 18px', background: '#8b5cf6', color: '#fff', borderRadius: 8, border: 'none'}}>
            Start the mood quiz
          </button>
        </section>
      </main>
    </>
  );
}
