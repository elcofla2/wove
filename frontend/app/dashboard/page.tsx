import { TrendingUp, FileText, Users, ArrowRight, Zap } from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Fila 1: Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#71717A] mb-1">Organic Traffic</p>
            <h3 className="text-3xl font-jakarta font-bold text-[#18181B]">24.5k</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#80ED99]/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#40c057]" />
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#71717A] mb-1">Posts Generated</p>
            <h3 className="text-3xl font-jakarta font-bold text-[#18181B]">142</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#B28DFF]/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#B28DFF]" />
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#71717A] mb-1">Active Connections</p>
            <h3 className="text-3xl font-jakarta font-bold text-[#18181B]">5</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </section>

      {/* Fila 2: Quick Action */}
      <section className="bg-white rounded-2xl p-8 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-jakarta font-bold text-[#18181B] mb-2">Deploy Autopilot</h3>
          <p className="text-[#71717A]">Let AI generate high-converting SEO content for your brand.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#FF8FA3] hover:bg-[#ff7a91] text-white px-6 py-3 rounded-xl font-medium transition-transform active:scale-95 shadow-sm">
          <Zap className="w-4 h-4" />
          Generate New Post
        </button>
      </section>

      {/* Fila 3: Recent Activity */}
      <section>
        <h3 className="text-lg font-jakarta font-semibold text-[#18181B] mb-4">Recent Activity</h3>
        <div className="bg-white rounded-2xl shadow-lg shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
          <div className="divide-y divide-zinc-100">
            {/* Item 1 */}
            <div className="p-5 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5 text-[#71717A]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#18181B]">The Future of Solar Energy in 2026</h4>
                  <p className="text-sm text-[#71717A]">Today, 10:45 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-1 rounded-md bg-[#80ED99]/20 text-xs font-semibold text-[#18181B]">
                  Published
                </span>
                <ArrowRight className="w-4 h-4 text-[#71717A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-5 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5 text-[#71717A]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#18181B]">How to Reduce Commercial Energy Costs</h4>
                  <p className="text-sm text-[#71717A]">Yesterday, 3:20 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-1 rounded-md bg-[#80ED99]/20 text-xs font-semibold text-[#18181B]">
                  AEO Ready
                </span>
                <ArrowRight className="w-4 h-4 text-[#71717A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-5 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5 text-[#71717A]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#18181B]">Top 5 Renewable Energy Trends</h4>
                  <p className="text-sm text-[#71717A]">Oct 12, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-2.5 py-1 rounded-md bg-[#80ED99]/20 text-xs font-semibold text-[#18181B]">
                  Published
                </span>
                <ArrowRight className="w-4 h-4 text-[#71717A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
