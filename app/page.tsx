export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        <div className="w-12 h-12 border-4 border-purple rounded-full border-t-transparent animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
