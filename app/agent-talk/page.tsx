import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const instagramHref = "https://instagram.com/techneeksldn";
const whatsappHref = "https://chat.whatsapp.com/CXGfCgOqpl76ZvbP64aNsm";
const lumaHref = "https://luma.com/user/usr-yHcvhVwc127L7DE";
const guideHref = "/workshop-guide";
const buildHref = "/#build-001";
const repoHref = "https://github.com/adonberh/techneeks-job-agent";

export const metadata: Metadata = {
  title: "AGENT TALK — July 2026 | TechNeeks",
  description:
    "A post-event recap of TechNeeks AGENT TALK, with photos from the workshop, panel and community launch.",
};

const carouselImages = [
  {
    src: "/events/techneeks-first-event/dsc09760.jpg",
    alt: "AGENT TALK attendees building together around a long table with laptops",
  },
  {
    src: "/events/techneeks-first-event/dsc09786.jpg",
    alt: "Small group discussing code during the AI agents workshop",
  },
  {
    src: "/events/techneeks-first-event/dsc09842.jpg",
    alt: "AGENT TALK panel taking place in front of the audience",
  },
  {
    src: "/events/techneeks-first-event/dsc09859.jpg",
    alt: "Audience members listening during the AGENT TALK panel",
  },
  {
    src: "/events/techneeks-first-event/dsc09921.jpg",
    alt: "Panel speaker responding during the TechNeeks discussion",
  },
  {
    src: "/events/techneeks-first-event/dsc09975.jpg",
    alt: "AGENT TALK panel guests smiling at the end of the session",
  },
];

const recapSections = [
  {
    title: "Workshop",
    copy: "A hands-on session where attendees used Claude and agentic workflow patterns to prototype a practical Job Assistant.",
    image: "/events/techneeks-first-event/dsc09818.jpg",
    alt: "A laptop showing the AI-powered Job Assistant built during AGENT TALK",
    accent: "bg-[#75e6ef]",
  },
  {
    title: "Panel",
    copy: "A grounded conversation on AI, careers, portfolios, staying relevant and building with purpose.",
    image: "/events/techneeks-first-event/dsc09842.jpg",
    alt: "The AGENT TALK panel in conversation with the room",
    accent: "bg-[#ff6b9d]",
  },
  {
    title: "Community",
    copy: "A room full of builders, creatives, students, career switchers and early-career people meeting from different starting points.",
    image: "/events/techneeks-first-event/dsc09963.jpg",
    alt: "An attendee asking a question during the AGENT TALK community discussion",
    accent: "bg-[#7c5cff]",
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f8f3ea]/88 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3"
      >
        <Link
          href="/"
          aria-label="TechNeeks home"
          className="inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00a7b5]"
        >
          <span className="flex h-12 w-24 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
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
        </Link>
        <div className="flex items-center gap-2 overflow-x-auto">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/agent-talk"
            className="hidden rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white sm:inline-flex"
          >
            AGENT TALK
          </Link>
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white md:inline-flex"
          >
            Instagram
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white lg:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={lumaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#101820] px-4 py-2 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Luma
          </a>
        </div>
      </nav>
    </header>
  );
}

function Button({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const classes =
    variant === "dark"
      ? "bg-[#101820] text-white"
      : "border border-black/10 bg-white text-[#101820]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-black shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00a7b5] focus:ring-offset-2 focus:ring-offset-[#f8f3ea] ${classes}`}
    >
      {children}
    </a>
  );
}

export default function AgentTalkPage() {
  const loopedImages = [...carouselImages, ...carouselImages];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f3ea] text-[#101820]">
      <Nav />

      <section className="px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00a7b5]">
              Launch recap
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              AGENT TALK — July 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5d6b] sm:text-xl">
              We brought TechNeeks back with a hands-on AI agents workshop, a
              panel on AI and careers, and a room full of people building,
              asking questions and connecting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={guideHref}>Workshop guide</Button>
              <Button href={buildHref} variant="light">
                BUILD_001 challenge
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_24px_80px_rgba(16,24,32,0.08)]">
            <Image
              src="/events/techneeks-first-event/dsc09975.jpg"
              alt="AGENT TALK panel guests smiling at the launch event"
              width={1024}
              height={683}
              priority
              className="aspect-[4/3] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="event-gallery" className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7c5cff]">
                Photos
              </p>
              <h2 id="event-gallery" className="mt-2 text-3xl font-black tracking-[-0.025em] sm:text-5xl">
                From the room.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#566371]">
              Workshop tables, panel questions, laptop screens and the first
              signs of the next TechNeeks chapter.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-sm">
            <div className="overflow-hidden rounded-[1.55rem]">
              <div className="techneeks-carousel flex w-max gap-3">
                {loopedImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="relative h-64 w-[78vw] shrink-0 overflow-hidden rounded-[1.35rem] sm:h-80 sm:w-[32rem] lg:h-[25rem] lg:w-[42rem]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 42rem, (min-width: 640px) 32rem, 78vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {recapSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.5rem] border border-black/10 bg-white p-4 shadow-sm"
            >
              <Image
                src={section.image}
                alt={section.alt}
                width={1024}
                height={683}
                className="aspect-[4/3] w-full rounded-[1.15rem] object-cover"
              />
              <div className="p-2 pt-5">
                <span className={`block h-2 w-12 rounded-full ${section.accent}`} />
                <h2 className="mt-5 text-2xl font-black">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#566371]">
                  {section.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 pt-6 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-black/10 bg-[#101820] p-6 text-white shadow-[0_24px_80px_rgba(16,24,32,0.14)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#75e6ef]">
              Keep building
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-5xl">
              BUILD_001: Job Assistant Challenge
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Fork the project, build your own version and make the Job
              Assistant more useful for real job seekers.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={repoHref} variant="light">
              View the repo
            </Button>
            <Button href={guideHref} variant="light">
              Read the workshop guide
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
