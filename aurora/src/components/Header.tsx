import React, { useState } from 'react';
import Link from 'next/link';

type NavLink = { href: string; label: string };

const NAV: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/gallery', label: 'Gallery' },
  { href: 'https://github.com/EmperorKaiDaGodKing/aurora', label: 'GitHub' },
];

export default function Header({ title = 'Aurora' }: { title?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/6 bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-3 no-underline">
              <div
                className="rounded-md w-10 h-10 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#8b5cf6,#34d399)' }}
                aria-hidden
              >
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white leading-none">{title}</h1>
                <p className="text-xs text-muted">mood-driven underwear & rituals</p>
              </div>
            </a>
          </Link>
        </div>

        <nav>
          <div className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                <a className="text-sm text-muted hover:text-white transition-colors">{n.label}</a>
              </Link>
            ))}

            <Link href="/quiz">
              <a className="btn-primary ml-2">Start the mood quiz</a>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md text-muted hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/4 bg-black/40">
          <div className="container py-3 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                <a className="text-base text-muted hover:text-white" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </Link>
            ))}
            <Link href="/quiz">
              <a className="btn-primary w-full text-center">Start the mood quiz</a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
