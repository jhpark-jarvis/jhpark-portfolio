export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="h-16 w-full rounded-2xl bg-white/5" />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-5 w-32 rounded bg-white/10" />
            <div className="h-14 w-3/4 rounded bg-white/10" />
            <div className="h-24 w-full rounded bg-white/10" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-56 rounded-2xl bg-white/10" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-40 rounded-3xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
