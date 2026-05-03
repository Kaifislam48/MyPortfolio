export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060816]">
      <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
        Loading portfolio experience...
      </div>
    </div>
  );
}
