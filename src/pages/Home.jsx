import heroImg from "@/assets/gym-hero.png";
import { classes, plans, schedule, trainers } from "@/data/homeData";

const intensityClass = (i) =>
  i === "High"
    ? "bg-[rgba(255,95,31,0.2)] text-orange border border-[rgba(255,95,31,0.3)]"
    : i === "Medium"
      ? "bg-[rgba(255,214,10,0.15)] text-yellow border border-[rgba(255,214,10,0.3)]"
      : "bg-[rgba(100,200,100,0.15)] text-[#6fca6f] border border-[rgba(100,200,100,0.3)]";

export function Home() {
  return (
    <div className="bg-bg text-fg font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[rgba(8,8,8,0.95)] backdrop-blur-md border-b border-border px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="font-display text-2xl font-black tracking-wider uppercase">
          Fit<span className="text-orange">Zone</span>
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          {["Classes", "Membership", "Trainers", "Schedule"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-muted hover:text-fg text-[0.82rem] font-medium tracking-widest uppercase transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#membership"
          className="bg-orange hover:bg-orange2 text-white px-6 py-2.5 rounded-[2px] text-[0.78rem] font-bold tracking-widest uppercase transition-colors"
        >
          Join Now
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(255,95,31,0.12) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(255,95,31,0.06) 0%, transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, #fff 60px, #fff 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #fff 60px, #fff 61px)",
          }}
        />
        <img
          src={heroImg}
          alt="Athlete training with dumbbell in a moody gym"
          className="absolute right-0 top-0 h-full w-full md:w-[60%] object-cover object-center pointer-events-none select-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent md:via-bg/40" />

        <div className="relative max-w-3xl">
          <div className="font-display text-[0.85rem] font-bold tracking-[0.25em] uppercase text-orange mb-5">
            Premium Gym & Fitness Centre · Coimbatore
          </div>
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-tight mb-8"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            Train
            <br />
            <span className="[-webkit-text-stroke:2px_#f5f5f5] text-transparent">Beyond</span>
            <br />
            Limits
          </h1>
          <p className="text-base text-muted max-w-lg mb-10 leading-[1.8]">
            State-of-the-art equipment, world-class trainers, and a community that pushes you
            further. Your transformation starts the moment you walk in.
          </p>
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#membership"
              className="bg-orange hover:bg-orange2 text-white px-10 py-4 rounded-[2px] text-sm font-bold tracking-widest uppercase transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="#classes"
              className="text-fg px-10 py-4 rounded-[2px] text-sm font-bold tracking-widest uppercase border-2 border-white/20 hover:border-orange hover:text-orange transition-all"
            >
              View Classes
            </a>
          </div>
          <div className="flex gap-8 md:gap-16 mt-16 pt-8 border-t border-border flex-wrap">
            {[
              ["2000+", "Active members"],
              ["20+", "Expert trainers"],
              ["50+", "Weekly classes"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl md:text-[3.5rem] font-black text-orange leading-none">
                  {n}
                </div>
                <div className="text-[0.72rem] tracking-[0.15em] uppercase text-muted mt-1.5 font-medium">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="px-6 md:px-12 py-20">
        <div className="font-display text-[0.82rem] font-bold tracking-[0.2em] uppercase text-orange mb-3">
          Classes
        </div>
        <h2
          className="font-display font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Find your
          <br />
          discipline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {classes.map((c) => (
            <div
              key={c.name}
              className="bg-surface border border-border rounded-[4px] overflow-hidden hover:border-orange hover:-translate-y-1 transition-all"
            >
              <div
                className={`h-44 flex items-center justify-center text-6xl relative bg-gradient-to-br ${c.bg}`}
              >
                <span>{c.icon}</span>
                <span
                  className={`absolute top-4 right-4 font-display text-[0.62rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px] ${intensityClass(c.intensity)}`}
                >
                  {c.intensity}
                </span>
              </div>
              <div className="p-6">
                <div className="font-display text-xl font-extrabold uppercase mb-2">{c.name}</div>
                <div className="flex gap-4 text-xs text-muted mb-3 uppercase tracking-wider font-medium">
                  <span>⏱ {c.min} min</span>
                  <span>👥 Max {c.max}</span>
                </div>
                <p className="text-[0.8rem] text-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="bg-surface px-6 md:px-12 py-20">
        <div className="font-display text-[0.82rem] font-bold tracking-[0.2em] uppercase text-orange mb-3">
          Membership
        </div>
        <h2
          className="font-display font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Pick your plan,
          <br />
          own your goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-[4px] p-10 border transition-all ${p.popular ? "bg-orange border-orange" : "border-border hover:border-[rgba(255,95,31,0.4)]"}`}
            >
              <span
                className={`inline-block font-display text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-[2px] mb-6 ${
                  p.popular
                    ? "bg-black/25 text-white"
                    : p.name === "Elite"
                      ? "bg-surface text-orange border border-[rgba(255,95,31,0.3)]"
                      : "bg-surface text-muted"
                }`}
              >
                {p.badge}
              </span>
              <div className="font-display text-2xl font-black uppercase mb-1">{p.name}</div>
              <div className="font-display text-5xl font-black leading-none">
                {p.price}
                <small className="text-base font-normal">/mo</small>
              </div>
              <div
                className={`text-[0.8rem] mb-8 mt-2 ${p.popular ? "text-white/70" : "text-muted"}`}
              >
                {p.per}
              </div>
              <ul className="list-none mb-8 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <span className={p.popular ? "text-white font-bold" : "text-orange font-bold"}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center py-3 rounded-[2px] text-[0.82rem] font-bold tracking-widest uppercase transition-all ${
                  p.popular
                    ? "bg-white text-orange border-2 border-white hover:bg-transparent hover:text-white"
                    : "bg-transparent border-2 border-white/20 text-fg hover:border-orange hover:text-orange"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="bg-bg px-6 md:px-12 py-20">
        <div className="font-display text-[0.82rem] font-bold tracking-[0.2em] uppercase text-orange mb-3">
          Schedule
        </div>
        <h2
          className="font-display font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          This week's classes
        </h2>
        <div className="overflow-x-auto mt-12">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                {["Class", "Day", "Time", "Trainer", "Availability"].map((h) => (
                  <th
                    key={h}
                    className="font-display text-[0.75rem] font-bold tracking-widest uppercase text-muted px-4 py-3 text-left border-b border-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, i) => (
                <tr key={i} className="hover:bg-surface transition-colors">
                  <td className="px-4 py-4 border-b border-border">
                    <span className="font-display text-base font-bold uppercase">{s.name}</span>
                    <span
                      className={`ml-2 text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded-[2px] ${intensityClass(s.intensity)}`}
                    >
                      {s.intensity}
                    </span>
                  </td>
                  <td className="px-4 py-4 border-b border-border text-sm">{s.day}</td>
                  <td className="px-4 py-4 border-b border-border text-sm">{s.time}</td>
                  <td className="px-4 py-4 border-b border-border text-muted text-sm">
                    {s.trainer}
                  </td>
                  <td
                    className={`px-4 py-4 border-b border-border text-sm font-semibold ${s.spots === "Open" ? "text-[#6fca6f]" : "text-orange"}`}
                  >
                    {s.spots}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="bg-surface px-6 md:px-12 py-20">
        <div className="font-display text-[0.82rem] font-bold tracking-[0.2em] uppercase text-orange mb-3">
          Trainers
        </div>
        <h2
          className="font-display font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Coached by the best
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-[4px] overflow-hidden hover:border-orange transition-colors"
            >
              <div
                className={`h-52 flex items-center justify-center text-6xl bg-gradient-to-br ${t.bg}`}
              >
                {t.icon}
              </div>
              <div className="p-5">
                <div className="font-display text-lg font-extrabold uppercase mb-1">{t.name}</div>
                <div className="text-[0.72rem] text-orange font-semibold tracking-wider uppercase mb-2">
                  {t.spec}
                </div>
                <div className="text-[0.78rem] text-muted">{t.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-border px-6 md:px-12 py-10 flex flex-wrap justify-between items-center gap-4 text-[0.78rem] text-muted">
        <div className="font-display text-xl font-black uppercase text-fg">
          Fit<span className="text-orange">Zone</span>
        </div>
        <div className="flex gap-6 flex-wrap">
          {["Classes", "Membership", "Trainers", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted hover:text-orange transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div>© 2026 FitZone Coimbatore · All rights reserved</div>
      </footer>
    </div>
  );
}
