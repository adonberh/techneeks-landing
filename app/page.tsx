import Image from "next/image";

const ctaHref = "https://forms.gle/REPLACE_ME";

const highlights = [
  "Prototype AI agent workflows with Claude",
  "Hear practical advice on breaking into tech",
  "Meet curious people from different starting points",
];

const schedule = [
  {
    time: "Morning",
    title: "AI Agents Workshop",
    detail:
      "Learn how AI agents work and use Claude to prototype simple, useful workflows.",
    accent: "bg-cyan-100 text-cyan-900",
  },
  {
    time: "Afternoon",
    title: "Breaking Into Tech Panel",
    detail:
      "Hear honest advice on getting into tech in 2026, building a portfolio and finding your edge.",
    accent: "bg-purple-100 text-purple-900",
  },
  {
    time: "Evening",
    title: "Networking",
    detail:
      "Meet builders, creatives, founders, career switchers and people exploring technology from different starting points.",
    accent: "bg-amber-100 text-amber-950",
  },
];

const audiences = [
  "Students",
  "Graduates",
  "Career switchers",
  "Early-career professionals",
  "Creatives",
  "Founders",
  "Curious builders",
  "AI and social impact explorers",
];

function RegisterButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={ctaHref}
      className={`inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
    >
      Register interest
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] text-slate-950">
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#fbf7ef]/92 px-5 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <RegisterButton className="w-full" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#fbf7ef]/88 px-5 backdrop-blur sm:px-8 lg:px-12">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="TechNeeks home"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 p-1.5 shadow-sm">
              <Image
                src="/techneeks-logo.jpeg"
                alt=""
                width={1274}
                height={1268}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="hidden text-lg font-black tracking-tight sm:inline">
              TechNeeks
            </span>
          </a>
          <RegisterButton className="hidden md:inline-flex" />
        </nav>
      </header>

      <section id="top" className="px-5 pb-14 pt-8 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-900">
              London community tech event
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
              Building with AI, Breaking into Tech
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
              A community tech event for people curious about AI, careers and
              building useful things.
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-[#fbf7ef] p-5">
                <dt className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                  Date
                </dt>
                <dd className="mt-2 text-xl font-black">Friday 4 July</dd>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#fbf7ef] p-5">
                <dt className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                  Venue
                </dt>
                <dd className="mt-2 text-xl font-black">
                  The Leather Market, London SE1
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RegisterButton />
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                View schedule
              </a>
            </div>
          </article>

          <aside className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="flex min-h-72 items-center justify-center rounded-3xl border border-slate-200 bg-slate-950 p-6 sm:min-h-80">
              <Image
                src="/techneeks-logo.jpeg"
                alt="TechNeeks logo"
                width={1274}
                height={1268}
                priority
                className="max-h-72 w-full object-contain sm:max-h-80"
              />
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-100 via-white to-purple-100 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Attendees will
              </p>
              <ul className="mt-4 grid gap-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-base font-bold shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-700">
              What is TechNeeks?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              A third place for learning, building and connection.
            </h2>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6 text-lg leading-8 text-slate-700 shadow-sm sm:p-8">
            <p>
              TechNeeks is a community-led tech collective creating third places
              for people interested in technology, AI and social impact.
            </p>
            <p>
              We bring together builders, creatives, career switchers, students
              and early-career professionals to learn, connect and work on
              practical ideas for real communities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.82fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-600">
              Why this exists
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Technology shapes our work, culture, businesses and communities.
            </h2>
          </article>
          <article className="space-y-4 rounded-[2rem] border border-slate-200 bg-[#fff5f2] p-6 text-lg leading-8 text-slate-700 shadow-sm sm:p-8">
            <p>
              But too often, the people most affected by technology are not the
              ones building it.
            </p>
            <p className="text-2xl font-black text-slate-950">
              TechNeeks exists to change that.
            </p>
            <p>
              We create spaces where people from underrepresented communities
              can learn the tools, build confidence, meet others and solve
              problems around them.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
                What to expect
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                A practical day for learning, career insight and connection.
              </h2>
            </div>
            <RegisterButton className="hidden md:inline-flex" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-200 bg-[#fbf7ef] p-5"
              >
                <p className="text-lg font-black leading-7">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-700">
                Schedule
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Three moments, one community day.
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {schedule.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6 md:grid-cols-[11rem_1fr]"
              >
                <div>
                  <p
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${item.accent}`}
                  >
                    {item.time}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-600">
              Who should come?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              You do not need to have it all figured out.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              This is for anyone curious about AI, tech and social impact. Bring
              questions, ideas and a laptop if you have one.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Audience list">
            {audiences.map((person) => (
              <li
                key={person}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-black shadow-sm"
              >
                {person}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Venue
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              The Leather Market
            </h2>
            <address className="mt-5 not-italic text-lg leading-8 text-slate-700">
              11-13 Weston St
              <br />
              London SE1 3ER
            </address>
            <p className="mt-5 text-lg font-bold text-slate-950">
              Close to London Bridge.
            </p>
          </article>
          <div
            aria-hidden="true"
            className="min-h-72 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(165,243,252,0.85),rgba(255,216,204,0.88),rgba(233,213,255,0.85)),linear-gradient(45deg,rgba(15,23,42,0.08)_25%,transparent_25%),linear-gradient(-45deg,rgba(15,23,42,0.08)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(15,23,42,0.08)_75%),linear-gradient(-45deg,transparent_75%,rgba(15,23,42,0.08)_75%)] bg-[length:auto,42px_42px,42px_42px,42px_42px,42px_42px] bg-[position:center,0_0,0_21px,21px_-21px,-21px_0] shadow-sm"
          />
        </div>
      </section>

      <section className="px-5 pb-24 pt-10 sm:px-8 md:pb-10 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_70px_rgba(15,23,42,0.14)] sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">
                Friday 4 July
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                Learn the tools. Meet the people. Build what matters.
              </h2>
            </div>
            <RegisterButton className="bg-white text-slate-950 hover:bg-cyan-100" />
          </div>
        </div>
        <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-1 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-slate-950">TechNeeks</p>
          <p>For the community, by the community.</p>
        </footer>
      </section>
    </main>
  );
}
