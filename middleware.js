// middleware.js
// Hostname-based routing — one Vercel project serves many demo domains.
// Each hostname is mapped to a page under pages/demos/<slug>.jsx
//
// How to add a demo:
// 1. Add an entry to DOMAIN_MAP below
// 2. Create pages/demos/<slug>.jsx with your demo content
// 3. Add the custom domain in Vercel dashboard (points to this project)
// 4. Push — Vercel auto-issues SSL and middleware routes traffic

import { NextResponse } from 'next/server';

// ─── Domain → Page map ───
// Keep this alphabetised. To add a demo: add a line, create the page, add domain in Vercel.
const DOMAIN_MAP = {
  // 'example.com':          'example',
  // 'demo.example.com':     'example',
  // 'www.example.com':      'example',
  'localhost:3001':         'index',
};

export const config = {
  // Match everything except static assets and Next internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};

export function middleware(request) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const pathname = request.nextUrl.pathname;

  // Find matching demo slug
  const slug = DOMAIN_MAP[hostname] || DOMAIN_MAP[hostname.replace(/^www\./, '')];

  // Skip routing if no match or if already on the right path
  if (!slug) return NextResponse.next();
  if (pathname.startsWith(`/demos/${slug}`)) return NextResponse.next();
  if (pathname === '/' || pathname === `/demos/${slug}`) {
    const url = request.nextUrl.clone();
    url.pathname = `/demos/${slug}${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
  }

  // For sub-pages on the demo (e.g. domain.com/about → /demos/<slug>/about)
  const url = request.nextUrl.clone();
  url.pathname = `/demos/${slug}${pathname}`;
  return NextResponse.rewrite(url);
}
