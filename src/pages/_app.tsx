import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aurora — mood-driven underwear and ritual suggestions." />
        <title>Aurora — mood-driven underwear</title>
      </Head>

      <div className="min-h-screen bg-neutral-900 text-neutral-100 antialiased">
        <Component {...pageProps} />
      </div>
    </>
  );
}
