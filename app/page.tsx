export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function Home() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/home" />
      </head>
      <body>
        <p>Redirecting...</p>
      </body>
    </html>
  );
}
