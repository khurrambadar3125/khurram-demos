// Example demo — copy this file to create a new demo.
// Rename to pages/demos/<your-slug>.jsx and customise.
// Then add the domain mapping to middleware.js DOMAIN_MAP.

import Head from 'next/head';

export default function ExampleDemo() {
  return (
    <>
      <Head>
        <title>Example Demo</title>
        <meta name="description" content="Example demo page — hostname routed via middleware" />
      </Head>
      <main style={{
        fontFamily: "-apple-system, sans-serif",
        minHeight: '100vh',
        background: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 12 }}>Example Demo</h1>
          <p style={{ color: '#666' }}>Replace this page with your demo content.</p>
        </div>
      </main>
    </>
  );
}
