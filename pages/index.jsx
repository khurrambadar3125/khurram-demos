import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>khurram-demos — consolidated demo hub</title>
        <meta name="description" content="One Vercel project, many demos. Multi-domain routing via middleware." />
      </Head>
      <main style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
        minHeight: '100vh',
        background: '#0f0f1a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        <div style={{ maxWidth: 640, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#4F8EF7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>
            khurram-demos
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 20, letterSpacing: '-1px' }}>
            Consolidated demo hub
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 32 }}>
            One Vercel project. Many custom domains. Each domain routes to its own demo page
            via <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>middleware.js</code>.
            One build pipeline = one set of billed minutes regardless of how many demos.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: '24px 28px',
            textAlign: 'left',
            fontSize: 14,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.8)',
          }}>
            <strong style={{ color: '#fff' }}>How to add a demo:</strong>
            <ol style={{ paddingLeft: 20, marginTop: 10 }}>
              <li>Create <code>pages/demos/my-demo.jsx</code></li>
              <li>Add <code>'my-demo.com': 'my-demo'</code> to <code>middleware.js</code> DOMAIN_MAP</li>
              <li>Add custom domain in Vercel dashboard</li>
              <li>Push — Vercel routes traffic automatically</li>
            </ol>
          </div>
          <div style={{ marginTop: 28, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            This shared build saves ~$100/month across 10+ demos vs separate Vercel projects.
          </div>
        </div>
      </main>
    </>
  );
}
