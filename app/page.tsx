import Image from "next/image";

const guideHref = "/workshop-guide";
const lumaHref = "https://luma.com/wra8zfqw";
const whatsappHref = "https://chat.whatsapp.com/CXGfCgOqpl76ZvbP64aNsm";

const todayDetails = [
  {
    label: "Today's schedule",
    lines: ["11am-2pm - AI Agents Workshop", "3pm onwards - Panel + Networking"],
    accent: "border-cyan-400/50",
  },
  {
    label: "Venue",
    lines: ["The Leather Market", "London Bridge / SE1"],
    accent: "border-fuchsia-400/50",
  },
  {
    label: "Bring",
    lines: ["Laptop for the workshop"],
    accent: "border-violet-400/50",
  },
  {
    label: "Guide",
    lines: ["Live Notion guide available"],
    accent: "border-cyan-400/50",
  },
];

const workflow = [
  "Job URL or description",
  "Analyse role",
  "Compare candidate fit",
  "Generate application pack",
  "Track application stage",
  "Suggest next action",
];

const explainers = [
  {
    title: "Chatbot",
    copy: "Responds to one message. Example: write me a cover letter.",
    colour: "bg-cyan-400",
  },
  {
    title: "Agent",
    copy: "Uses tools, state and orchestration to work towards a goal. Example: manage this job application.",
    colour: "bg-fuchsia-400",
  },
  {
    title: "Operating System",
    copy: "Acts as a workflow hub over time. Example: track applications, interviews, reminders and next actions.",
    colour: "bg-violet-400",
  },
];

const schedule = [
  {
    time: "11am-2pm",
    title: "AI Agents Workshop",
    detail: "A hands-on build using the live technical guide.",
    colour: "text-cyan-300",
  },
  {
    time: "1:30pm-3pm",
    title: "Pizza / break",
    detail: "Refuel, compare notes and meet the room.",
    colour: "text-fuchsia-300",
  },
  {
    time: "3pm onwards",
    title: "AI & Careers Panel + Networking",
    detail: "Practical career insight, honest conversation and new connections.",
    colour: "text-violet-300",
  },
];

function GuideButton({
  className = "",
  children = "Open technical guide",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={guideHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(103,232,249,0.2)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${className}`}
    >
      {children}
    </a>
  );
}

function RegisterButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={lumaHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-fuchsia-300/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${className}`}
    >
      Register on Luma
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07101d] text-white">
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07101d]/95 px-4 py-3 backdrop-blur md:hidden">
        <GuideButton className="w-full" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07101d]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3"
        >
          <a
            href="#top"
            aria-label="TechNeeks home"
            className="inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <span className="flex h-12 w-24 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#07111f] p-2">
              <Image
                src="/techneeks-logo-crop.jpeg"
                alt=""
                width={424}
                height={228}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="hidden text-sm font-black sm:inline">TechNeeks</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={guideHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-white/5 sm:inline-flex"
            >
              Workshop guide
            </a>
            <RegisterButton className="min-h-10 px-4 py-2" />
          </div>
        </nav>
      </header>

      <section id="top" className="relative px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pt-16">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.13),rgba(217,70,239,0.05)_48%,transparent_72%)] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_20rem] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm font-bold text-fuchsia-200">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
              Happening today in London
            </div>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              TechNeeks presents
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              Building with AI,
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                Breaking into Tech
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A community tech event for people curious about AI, software
              careers and building useful things.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-200 sm:text-base">
              <p>Saturday 4 July</p>
              <p>The Leather Market</p>
              <p>London Bridge / SE1</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GuideButton className="sm:min-w-52">Open workshop guide</GuideButton>
              <RegisterButton className="sm:min-w-44" />
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-xs lg:block">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 p-px shadow-[0_24px_90px_rgba(34,211,238,0.12)]">
              <div className="rounded-[calc(1.75rem-1px)] bg-[#0b1627] p-6">
                <Image
                  src="/techneeks-logo.jpeg"
                  alt="TechNeeks"
                  width={1274}
                  height={1268}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="today-heading" className="px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 id="today-heading" className="sr-only">Today at TechNeeks</h2>
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
            {todayDetails.map((item) => (
              <article key={item.label} className={`border-b p-5 sm:border-r lg:border-b-0 ${item.accent}`}>
                <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </h3>
                <div className="mt-3 space-y-1 text-sm font-bold leading-6 text-white">
                  {item.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 p-px shadow-[0_24px_90px_rgba(34,211,238,0.12)]">
          <div className="grid gap-8 rounded-[calc(2rem-1px)] bg-[#0c1829] p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <SectionLabel>Today&apos;s Workshop Guide</SectionLabel>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Build with us, step by step.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Joining the AI Agents Workshop? Use the live technical guide below. It includes the architecture, setup steps, code walkthrough and stretch goals for building an AI Job Application Agent.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                The guide is live and may continue to be updated before and after the session.
              </p>
            </div>
            <GuideButton className="w-full lg:w-auto" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionLabel>What we&apos;re building</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">An AI agent for the job application journey.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              In the workshop, we&apos;ll build a practical AI agent workflow that helps manage job applications. The agent accepts a job URL or pasted job description, analyses the role, compares it against a candidate profile, generates application materials and updates an application tracker.
            </p>
          </div>
          <ol className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-7" aria-label="AI agent workflow">
            {workflow.map((step, index) => (
              <li key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200">{index + 1}</span>
                  {index < workflow.length - 1 && <span className="my-1 h-7 w-px bg-gradient-to-b from-cyan-300/60 to-fuchsia-300/40" />}
                </div>
                <p className="pt-1.5 text-base font-bold text-white sm:text-lg">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Chatbot vs Agent</SectionLabel>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-black sm:text-5xl">A chatbot gives a response. An agentic workflow manages a process.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {explainers.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0c1829] p-6">
                <span aria-hidden="true" className={`block h-1.5 w-12 rounded-full ${item.colour}`} />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Today&apos;s schedule</SectionLabel>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Plan your day.</h2>
          <div className="mt-8 grid gap-4">
            {schedule.map((item) => (
              <article key={item.title} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:p-6">
                <p className={`text-lg font-black ${item.colour}`}>{item.time}</p>
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-[#0c1829] p-6 sm:p-8">
            <SectionLabel>Who it&apos;s for</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Come ready to learn and connect.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              The workshop is best for people with some programming experience or willingness to build hands-on. The panel and networking are open to everyone interested in tech, AI, careers and community.
            </p>
          </article>
          <article className="rounded-[2rem] border border-fuchsia-300/20 bg-fuchsia-300/[0.06] p-6 sm:p-8">
            <SectionLabel>About TechNeeks</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Community-led. London-built.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              TechNeeks began as a grassroots hackathon in March 2024 and is relaunching as a community for learning, building and opportunity.
            </p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-black text-cyan-200 underline decoration-cyan-400/60 decoration-2 underline-offset-4 hover:text-white">
              Join the WhatsApp community
            </a>
          </article>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Event poster</SectionLabel>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">TechNeeks, in full colour.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-300">Saturday 4 July at The Leather Market, 11-13 Weston St, London SE1 3ER.</p>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-300 p-px">
            <div className="flex items-center justify-center rounded-[calc(2rem-1px)] bg-[#07111f] p-5 sm:p-10">
              <Image src="/techneeks-logo.jpeg" alt="TechNeeks event poster artwork" width={1274} height={1268} className="h-auto max-h-[38rem] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 pt-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(217,70,239,0.09))] p-6 text-center sm:p-10 lg:p-14">
          <SectionLabel>Coming to the workshop?</SectionLabel>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Your build starts here.</h2>
          <GuideButton className="mt-7 w-full sm:w-auto" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Coming for the panel? Join us from 3pm for AI, careers and networking.
          </p>
        </div>
        <footer className="mx-auto flex max-w-6xl flex-col gap-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-black text-white">TechNeeks</span> - For the community, by the community.</p>
          <div className="flex gap-5">
            <a href={lumaHref} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-cyan-200">Luma</a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-cyan-200">WhatsApp</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
