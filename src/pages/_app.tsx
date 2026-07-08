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
              <path d="M4 14.5c2-2.5 4.2-3.8 6.6-4 2.4-.2 4.8 0 7.2 1.8" />
              <path d="M4 11.5c2.2-2.4 4.8-3.6 7.2-3.8 2.4-.2 4.8 0 7.2 1.8" />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
}
