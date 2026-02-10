import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-slate-800 mb-2">404</h1>
      <p className="text-slate-600 mb-6">This page could not be found.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
