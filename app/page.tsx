import dynamic from 'next/dynamic';

// Import the client component with no SSR
const ClientComponent = dynamic(
  () => import('../components/ClientComponent'),
  { ssr: false }
);

export default function Home() {
  return <ClientComponent />;
}