import type { Metadata } from "next";
import Image from "next/image";

const notionGuideHref =
  "https://olive-sage-c57.notion.site/AGENT-TALK-39386a274502803eb262f0721f969e34";

export const metadata: Metadata = {
  title: "AI Agents Workshop Guide | TechNeeks",
  description:
    "The live technical guide for the TechNeeks AI Agents Workshop.",
};

const prep = [
  "A laptop and charger",
  "Basic Python and code-reading confidence",
  "Comfort using a terminal and installing packages",
];

const workflow = [
  "Add a job URL or paste a job description",
  "Analyse the role and extract its requirements",
  "Compare the role against a candidate profile",
  "Generate tailored application materials",
  "Update the application tracker",
  "Suggest the next action",
];

export default function WorkshopGuidePage() {
  return (
    <main className="min-h-screen bg-[#07101d] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07101d]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
        <nav
          aria-label="Workshop guide navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3"
        >
          <a
            href="/"
            aria-label="Back to TechNeeks home"
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
            <span className="hidden text-sm font-black sm:inline">
              TechNeeks
            </span>
          </a>
          <a
            href="/agent-talk"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            AGENT TALK
          </a>
        </nav>
      </header>

      <section className="relative px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-72 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),rgba(217,70,239,0.06)_48%,transparent_72%)] blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm font-bold text-fuchsia-200">
            <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
            Live workshop resource
          </div>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            TechNeeks AI Agents Workshop
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Build an AI Job
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Application Agent
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Follow the live technical guide to understand the architecture, set
            up the project and build the workflow step by step.
          </p>
          <a
            href="#live-guide"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(103,232,249,0.2)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
          >
            Jump to the guide
          </a>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {prep.map((item, index) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200">
                {index + 1}
              </span>
              <p className="mt-4 text-base font-black">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="live-guide"
        className="scroll-mt-24 px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Live technical guide
          </p>
          <div className="mt-3">
            <h2 className="text-3xl font-black sm:text-5xl">
              Build along with the session.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Start with the workflow below, then open the live Notion guide
              for setup instructions, code and stretch goals.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/[0.06] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-200">
                Workshop goal
              </p>
              <h3 className="mt-4 text-2xl font-black">
                Build a practical agentic workflow for managing job
                applications.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                A chatbot gives a response. This agent uses tools, state and
                orchestration to move an application towards a goal.
              </p>
            </article>

            <ol
              aria-label="Job application agent workflow"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              {workflow.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs font-black text-cyan-200">
                      {index + 1}
                    </span>
                    {index < workflow.length - 1 && (
                      <span className="my-1 h-6 w-px bg-gradient-to-b from-cyan-300/60 to-fuchsia-300/40" />
                    )}
                  </div>
                  <p className="pt-1 text-sm font-bold leading-6 text-white sm:text-base">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 p-px shadow-[0_24px_90px_rgba(34,211,238,0.12)]">
            <div className="flex flex-col gap-6 rounded-[calc(1rem-1px)] bg-[#0c1829] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h3 className="text-2xl font-black">Ready to start building?</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  The live guide includes the architecture, setup steps, code
                  walkthrough and stretch goals. It opens in a new tab so you
                  can keep this overview beside it.
                </p>
              </div>
              <a
                href={notionGuideHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Open the live Notion guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
