import Image from "next/image";
import Link from "next/link";

const instagramHref = "https://instagram.com/techneeksldn";
const whatsappHref = "https://chat.whatsapp.com/CXGfCgOqpl76ZvbP64aNsm";
const lumaHref = "https://luma.com/user/usr-yHcvhVwc127L7DE";
const agentTalkHref = "/agent-talk";
const repoHref = "#";
const guideHref = "/workshop-guide";

const heroImages = [
  {
    src: "/events/techneeks-first-event/dsc09760.jpg",
    alt: "TechNeeks attendees working around a table with laptops during the launch workshop",
  },
  {
    src: "/events/techneeks-first-event/dsc09963.jpg",
    alt: "An attendee asking a question during the TechNeeks panel conversation",
  },
];

const communityLinks = [
  {
    label: "Instagram",
    href: instagramHref,
    copy: "Photos, launch moments and community notes.",
    accent: "bg-[#ff6b9d]",
  },
  {
    label: "WhatsApp Community",
    href: whatsappHref,
    copy: "Join the chat, meet people and keep building between events.",
    accent: "bg-[#29c978]",
  },
  {
    label: "Luma",
    href: lumaHref,
    copy: "Follow TechNeeks for future workshops, panels and build nights.",
    accent: "bg-[#7c5cff]",
  },
];

function ExternalButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00a7b5] focus:ring-offset-2 focus:ring-offset-[#f8f3ea] ${className}`}
    >
      {children}
    </a>
  );
}

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
            className="hidden rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white sm:inline-flex"
          >
            Home
          </Link>
          <Link
            href={agentTalkHref}
            className="rounded-full px-4 py-2 text-sm font-black text-[#273443] transition hover:bg-white"
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f3ea] text-[#101820]">
      <Nav />

      <section className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00a7b5]">
              TechNeeks
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Hackathon meets the cookout.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5d6b] sm:text-xl">
              A community for people who want to learn, build and connect
              around AI, software and useful products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={agentTalkHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#101820] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2 focus:ring-offset-[#f8f3ea]"
              >
                See AGENT TALK
              </Link>
              <ExternalButton
                href={whatsappHref}
                className="border border-black/10 bg-white text-[#101820] shadow-sm"
              >
                Join WhatsApp
              </ExternalButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr] lg:items-end">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_20px_70px_rgba(16,24,32,0.09)] ${
                  index === 0 ? "sm:translate-y-8" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1024}
                  height={683}
                  priority
                  className={`w-full rounded-[1.55rem] object-cover ${
                    index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build-001" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7c5cff]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-5xl">
              Practical spaces for people who want to get sharper.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xl font-black leading-8 text-[#101820] sm:text-2xl sm:leading-9">
              We run hands-on workshops, build challenges, panels and community
              events for people who want to get better at building with
              technology.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Workshops", "Build challenges", "Community events"].map((item) => (
                <p
                  key={item}
                  className="rounded-2xl bg-[#f8f3ea] px-4 py-3 text-sm font-black text-[#273443]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-black/10 bg-[#101820] p-6 text-white shadow-[0_24px_80px_rgba(16,24,32,0.14)] sm:p-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#75e6ef]">
              BUILD_001
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-5xl">
              Job Assistant Challenge
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
              At AGENT TALK, we built a simple AI-powered Job Assistant. Now
              we&apos;re opening it up. Fork the repo, build your own version and
              make it more useful.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <h3 className="text-sm font-black text-[#75e6ef]">
                  Best build wins
                </h3>
                <ul className="mt-3 space-y-2 text-sm font-bold leading-5 text-white/80">
                  <li>🏆 £30 Amazon voucher</li>
                  <li>📣 TechNeeks feature</li>
                  <li>🎤 Chance to demo at a future session</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <h3 className="text-sm font-black text-[#ff8fb4]">Deadline</h3>
                <p className="mt-3 text-sm font-bold leading-5 text-white/80">
                  Sunday 26 July, 11:59pm
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <h3 className="text-sm font-black text-[#b7a8ff]">How to enter</h3>
                <p className="mt-3 text-sm font-bold leading-5 text-white/80">
                  Fork the repo, raise a PR, or build your own version.
                </p>
                <p className="mt-3 text-sm font-bold leading-5 text-white/80">
                  Send your PR or forked repo link, plus a short write-up
                  explaining what you changed and why.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={repoHref} className="bg-white text-[#101820]">
                View the repo
              </ExternalButton>
              <ExternalButton
                href={guideHref}
                className="border border-white/20 bg-white/8 text-white"
              >
                Read the workshop guide
              </ExternalButton>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white/8 p-2">
            <Image
              src="/events/techneeks-first-event/dsc09818.jpg"
              alt="A laptop showing the AI-powered Job Assistant built at AGENT TALK"
              width={1024}
              height={683}
              className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {communityLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,24,32,0.1)] focus:outline-none focus:ring-2 focus:ring-[#00a7b5]"
            >
              <span className={`block h-2 w-12 rounded-full ${item.accent}`} />
              <h2 className="mt-5 text-2xl font-black">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-[#566371]">{item.copy}</p>
              <span className="mt-5 inline-flex text-sm font-black text-[#101820] underline decoration-[#00a7b5]/60 decoration-2 underline-offset-4 group-hover:text-[#00a7b5]">
                Open
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 pt-6 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.88fr_1fr] lg:items-center">
          <Image
            src="/events/techneeks-first-event/dsc09842.jpg"
            alt="The AGENT TALK panel in conversation with the audience"
            width={1024}
            height={683}
            className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff5f91]">
              Launch recap
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-5xl">
              AGENT TALK — July 2026
            </h2>
            <p className="mt-5 text-base leading-7 text-[#566371]">
              We brought TechNeeks back with a hands-on AI agents workshop, a
              panel on AI and careers, and a room full of people building,
              asking questions and connecting.
            </p>
            <Link
              href={agentTalkHref}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#101820] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2 focus:ring-offset-white"
            >
              Read the recap
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 text-sm text-[#566371] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-black text-[#101820]">TechNeeks</span> -
            Hackathon meets the cookout.
          </p>
          <div className="flex flex-wrap gap-5 font-black text-[#101820]">
            <Link href={agentTalkHref} className="hover:text-[#00a7b5]">
              AGENT TALK
            </Link>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a7b5]">
              Instagram
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a7b5]">
              WhatsApp
            </a>
            <a href={lumaHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#00a7b5]">
              Luma
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
