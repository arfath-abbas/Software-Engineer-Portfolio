export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-6">The page you are looking for does not exist.</p>
        <a 
          href="/" 
          className="px-4 py-2 bg-purple text-white rounded-md hover:bg-opacity-80 transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}