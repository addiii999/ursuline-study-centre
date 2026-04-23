export default function DashboardSection() {
  const students = [
    { name: "Arjun Sharma", class: "Class X", course: "Mathematics", performance: 88, status: "good" },
    { name: "Priya Mehta", class: "Class XII", course: "Science (PCB)", performance: 92, status: "good" },
    { name: "Rohan Kumar", class: "Class IX", course: "All Subjects", performance: 74, status: "average" },
    { name: "Sneha Pillai", class: "Class XI", course: "Commerce", performance: 95, status: "good" },
    { name: "Aditya Rao", class: "Class VIII", course: "Mathematics", performance: 61, status: "needs-attention" },
    { name: "Kavya Nair", class: "Class X", course: "Science (PCM)", performance: 79, status: "average" },
  ];

  const statusPill = (status: string) => {
    if (status === "good") return <span className="pill-green">Good</span>;
    if (status === "average") return <span className="pill-saffron">Average</span>;
    return <span className="pill-red">Needs Attention</span>;
  };

  const perfColor = (p: number) =>
    p >= 85 ? "#4ade80" : p >= 70 ? "#f59e0b" : "#ef233c";

  return (
    <section id="dashboard" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-12 reveal">
        <span className="text-[#d4a843] text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-3 block">
          Live Dashboard
        </span>
        <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-4xl md:text-5xl gradient-text-hero tracking-tight">
          Student Performance Dashboard
        </h2>
        <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm font-[family-name:var(--font-inter)]">
          Monitor every student's journey in real-time — test scores, attendance, and progress all in one place.
        </p>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 reveal">
        {[
          { label: "Active Students", value: "48", icon: "👥", color: "#ef233c", delta: "+3 this week" },
          { label: "Tests Completed", value: "124", icon: "📋", color: "#d4a843", delta: "+8 this month" },
          { label: "Pending Doubts", value: "7", icon: "❓", color: "#f59e0b", delta: "Resolve today" },
        ].map((card, i) => (
          <div key={i} className="bento-card p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
              {card.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs font-[family-name:var(--font-inter)] mb-0.5">{card.label}</p>
              <p className="font-[family-name:var(--font-manrope)] font-extrabold text-2xl text-white leading-none">
                {card.value}
              </p>
              <p className="text-xs mt-0.5 font-[family-name:var(--font-inter)]" style={{ color: card.color }}>
                {card.delta}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bento-card overflow-hidden reveal">
        {/* Table header bar */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-white/60 text-sm font-[family-name:var(--font-inter)]">Live Student Records</span>
          </div>
          <span className="text-white/30 text-xs font-[family-name:var(--font-inter)]">
            Updated just now
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {["Name", "Class", "Course", "Performance", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-6 py-4 text-white/30 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{
                          background: `${perfColor(s.performance)}22`,
                          border: `1px solid ${perfColor(s.performance)}44`,
                          color: perfColor(s.performance),
                        }}
                      >
                        {s.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-white text-sm font-medium font-[family-name:var(--font-inter)]">
                        {s.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/50 text-sm font-[family-name:var(--font-inter)]">
                    {s.class}
                  </td>
                  <td className="px-6 py-4 text-white/50 text-sm font-[family-name:var(--font-inter)]">
                    {s.course}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden min-w-[60px]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${s.performance}%`,
                            background: perfColor(s.performance),
                          }}
                        />
                      </div>
                      <span
                        className="text-sm font-semibold font-[family-name:var(--font-inter)] min-w-[36px]"
                        style={{ color: perfColor(s.performance) }}
                      >
                        {s.performance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{statusPill(s.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
