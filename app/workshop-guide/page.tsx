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
  "Basic programming confidence",
  "A willingness to build hands-on",
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
            aria-label="Back to TechNeeks event page"
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
            href="/"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Event page
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
          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black sm:text-5xl">
                Build along with the session.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                This guide is live and may continue to be updated during and
                after the workshop.
              </p>
            </div>
            <a
              href={notionGuideHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Open guide in Notion
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_24px_90px_rgba(34,211,238,0.1)]">
            <iframe
              src={notionGuideHref}
              title="TechNeeks AI Agents Workshop technical guide"
              className="h-[78vh] min-h-[42rem] w-full bg-white"
              loading="eager"
            />
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            If the embedded guide does not load, use the Open guide in Notion
            button above.
          </p>
        </div>
      </section>
    </main>
  );
}
