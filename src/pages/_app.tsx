import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
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
        <Link href="/ai">
          <a
            className="aurora-launch-button fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_22px_50px_rgba(56,189,248,0.22)] transition duration-200 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
            aria-label="Launch Aurora AI"
            title="Launch Aurora AI"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15c2.1-2.8 4.5-4.4 7.2-4.8 2.7-.4 5.3.8 7.8 3.6" />
              <path d="M3 12c2.1-2.6 4.8-4 7.3-4.1 2.5-.1 5 1 7.6 3.8" />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
}
