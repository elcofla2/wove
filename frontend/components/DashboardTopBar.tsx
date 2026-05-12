export function DashboardTopBar() {
  return (
    <header className="h-16 sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-zinc-200 px-8 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-jakarta font-semibold text-[#18181B]">
          Welcome back, Mariam
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border border-zinc-200 rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80ED99] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#80ED99]"></span>
          </span>
          <span className="text-sm font-medium text-[#18181B]">Posts: 14/15</span>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#B28DFF] flex items-center justify-center text-white font-bold text-sm shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          M
        </div>
      </div>
    </header>
  );
}
