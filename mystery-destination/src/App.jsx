import React, { useState } from "react";

export default function App() {
  const [booking, setBooking] = useState({ city: "", date: "", style: "solo", notes: "" });

  const submitBooking = (e) => {
    e.preventDefault();
    alert(`Mystery journey locked in!\nDeparture: ${booking.city || "TBA"}\nDate: ${booking.date || "TBA"}\nStyle: ${booking.style}`);
    setBooking({ city: "", date: "", style: "solo", notes: "" });
  };

  const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className}>
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-neutral-950 text-white">
      <nav className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-wide text-white/90">Mystery Destination</a>
          <div className="hidden md:flex items-center gap-6 text-white/70">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#styles" className="hover:text-white">Journey styles</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#app" className="hover:text-white">App</a>
          </div>
          <a href="#book" className="md:inline-flex hidden">
            <button className="rounded-2xl px-4 py-2 bg-white text-black hover:bg-white/90 transition">Book now</button>
          </a>
        </div>
      </nav>

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
          <video className="w-full h-full object-cover opacity-30" autoPlay loop muted playsInline>
            <source src="https://cdn.coverr.co/videos/coverr-train-ride-8260/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Where will your journey take you?</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
            A sleeper-train experience with a mystery destination revealed along the way. Choose solitude or connection—embrace curiosity, trust, and discovery.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#book"><button className="rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 transition">Begin your journey →</button></a>
            <a href="#how" className="text-white/80 hover:text-white">How it works</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
        {[{ label: "Comfort-first cabins", icon: "M9 12h6M4 8h16M4 16h16" },
          { label: "Solo or connect modes", icon: "M7 8h10M7 12h10M7 16h6" },
          { label: "Curated surprises", icon: "M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.9 6.8 20.3l1-5.9L3.5 9.2l5.9-.9L12 3z" },
          { label: "Companion app", icon: "M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 01-2-2z M9 18h6" }].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <Icon path={item.icon} />
            <span className="text-white/80 text-sm">{item.label}</span>
          </div>
        ))}
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <p className="mt-2 text-white/70 max-w-2xl">The site is your first touchpoint. It guides you into the experience, then hands off to the app that builds anticipation until reveal.</p>
        <div className="mt-8 grid md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Book your trip", copy: "Pick a date and departure city. No destination spoilers." },
            { step: 2, title: "Get subtle hints", copy: "The app shares clues: weather, vibes, light packing tips." },
            { step: 3, title: "Board + unwind", copy: "Your cabin becomes a sanctuary—quiet, calm, yours." },
            { step: 4, title: "Choose your mode", copy: "Stay solo or meet others with shared interests." },
            { step: 5, title: "Destination reveal", copy: "Discover together as the landscape unfolds." },
          ].map(({ step, title, copy }) => (
            <div key={step} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-white/80 text-base font-medium">{step}. {title}</div>
              <div className="-mt-1 text-white/60 text-sm">{copy}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="styles" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Journey styles</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl">
            <div className="p-5 border-b border-white/10 text-xl">Solo</div>
            <div className="p-5 text-white/70 space-y-4">
              <p>For stillness and reflection. A quieter carriage, dimmable lighting, and mindful prompts in-app.</p>
              <ul className="list-disc list-inside text-white/60">
                <li>Private cabin comfort</li>
                <li>Minimal notifications</li>
                <li>Curated audio for focus</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl">
            <div className="p-5 border-b border-white/10 text-xl">Connect</div>
            <div className="p-5 text-white/70 space-y-4">
              <p>For shared moments and serendipity. Opt-in matching to meet travelers with similar interests.</p>
              <ul className="list-disc list-inside text-white/60">
                <li>Opt-in meetups</li>
                <li>Shared lounge access</li>
                <li>Conversation starters in-app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Book a mystery journey</h2>
            <p className="mt-2 text-white/70 max-w-2xl">No pressure—this demo form just shows the flow. You can wire it to your CMS or backend later.</p>
          </div>
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <form onSubmit={submitBooking} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70 flex items-center gap-2"><Icon path="M3 7l9-4 9 4M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7" className="w-4 h-4"/>Departure city</label>
                <input required placeholder="e.g., Barcelona Sants" value={booking.city} onChange={(e)=>setBooking(v=>({ ...v, city: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 flex items-center gap-2"><Icon path="M8 7h8M7 11h10M6 15h12" className="w-4 h-4"/>Date</label>
                <input required type="date" value={booking.date} onChange={(e)=>setBooking(v=>({ ...v, date: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Journey style</label>
                <select value={booking.style} onChange={(e)=>setBooking(v=>({ ...v, style: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <option value="solo">Solo — quiet reflection</option>
                  <option value="connect">Connect — meet others</option>
                  <option value="surprise">Surprise me</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Notes (accessibility, dietary, etc.)</label>
                <textarea placeholder="Optional" value={booking.notes} onChange={(e)=>setBooking(v=>({ ...v, notes: e.target.value }))} className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <button type="submit" className="w-full rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 transition">Book now</button>
            </form>
          </div>
        </div>
      </section>

      <section id="app" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Companion app</h2>
            <p className="mt-2 text-white/70 max-w-prose">After booking, the app extends the experience with gentle hints, optional social matching, and a shared countdown. No spoilers—just enough to build anticipation.</p>
            <div className="mt-6 flex gap-3">
              <button className="rounded-2xl px-4 py-2 bg-white text-black hover:bg-white/90 transition">App Store</button>
              <button className="rounded-2xl px-4 py-2 border border-white/20 hover:bg-white/10 transition">Google Play</button>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="aspect-[9/16] w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto mb-3 w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center">📱</div>
                <p className="text-white/80 font-medium">“Pack something light—it looks sunny.”</p>
                <p className="text-white/60 text-sm mt-1">Subtle notifications that never give it away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} Mystery Destination — “Follow the unknown”.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#book" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
