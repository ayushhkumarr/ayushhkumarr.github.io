import Image from "next/image";
import Link from "next/link";

interface BookItemProps {
  title: string;
  author?: string;
  status: string;
}

function BookItem({ title, author, status }: BookItemProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-[15.5px] font-normal leading-[26px] text-[#DEDEDB]">
          {title}
        </span>
        {author && (
          <span className="text-[13.5px] font-normal leading-[20px] text-[#71716D] mt-[2px]">
            {author}
          </span>
        )}
      </div>
      <span className="text-[12.5px] font-normal leading-[19px] text-[#636360] text-right shrink-0 pt-[3px]">
        {status}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#DEDEDB] selection:bg-[#222222] selection:text-[#EDEDEA]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-[#0B0B0B]/95 backdrop-blur-sm">
        <div className="max-w-[728px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="#"
            className="text-[15px] font-medium leading-[21px] text-[#E8E8E5] tracking-normal hover:opacity-80 transition-opacity"
          >
            ayush kumar
          </Link>
          <nav className="flex items-center gap-[22px]">
            <a
              href="#about"
              className="text-[13.5px] font-normal leading-[21px] text-[#7B7B77] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              about
            </a>
            <a
              href="#work"
              className="text-[13.5px] font-normal leading-[21px] text-[#7B7B77] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              work
            </a>
            <a
              href="#thoughts"
              className="text-[13.5px] font-normal leading-[21px] text-[#7B7B77] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              thoughts
            </a>
            <a
              href="#books"
              className="text-[13.5px] font-normal leading-[21px] text-[#7B7B77] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              books
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[728px] mx-auto px-6">
        {/* Hero Section — Personal Emblem */}
        <section className="pt-[96px] pb-[68px] flex flex-col items-center">
          <div className="relative flex items-center justify-center select-none">
            <Image
              src="/images/ouroboros-hq.png"
              alt="Ouroboros emblem"
              width={496}
              height={547}
              unoptimized
              priority
              className="w-[108px] h-[119px] object-contain pointer-events-none drop-shadow-sm"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>
          <p className="mt-[20px] text-center font-serif-garamond italic font-normal text-[16.5px] leading-[25px] tracking-[0.08px] text-[#767672] max-w-[420px]">
            symbolizes being independent in my own cycle.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="pb-[64px] flex flex-col sm:flex-row scroll-mt-24">
          <div className="w-full sm:w-[144px] shrink-0 mb-4 sm:mb-0">
            <h2 className="text-[13px] font-normal leading-[21px] text-[#71716D] tracking-[0.01em]">
              about
            </h2>
          </div>
          <div className="flex-1 max-w-[536px] space-y-[28px]">
            <p className="text-[15.5px] font-normal leading-[27px] text-[#DEDEDB]">
              ai maximalist, constantly experimenting with the possibilities of
              artificial intelligence. fascinated by financial markets, technology and
              the forces shaping the future.
            </p>
            <p className="text-[15.5px] font-normal leading-[27px] text-[#DEDEDB]">
              pursuing a finance major at banaras hindu university. a language
              enthusiast, currently learning russian.
            </p>
            <p className="text-[15.5px] font-normal leading-[27px] text-[#DEDEDB]">
              outside of work, i enjoy reading, swimming and playing geoguessr. drawn
              to surfing, skiing and mountaineering.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="border-t border-white/[0.04] py-[52px] flex flex-col sm:flex-row scroll-mt-24"
        >
          <div className="w-full sm:w-[144px] shrink-0 mb-4 sm:mb-0">
            <h2 className="text-[13px] font-normal leading-[21px] text-[#71716D] tracking-[0.01em]">
              work
            </h2>
          </div>
          <div className="flex-1 max-w-[536px]">
            <p className="text-[15.5px] font-normal leading-[27px] text-[#82827D]">
              working on something. details coming soon.
            </p>
          </div>
        </section>

        {/* Thoughts Section */}
        <section
          id="thoughts"
          className="border-t border-white/[0.04] py-[52px] flex flex-col sm:flex-row scroll-mt-24"
        >
          <div className="w-full sm:w-[144px] shrink-0 mb-4 sm:mb-0">
            <h2 className="text-[13px] font-normal leading-[21px] text-[#71716D] tracking-[0.01em]">
              thoughts
            </h2>
          </div>
          <div className="flex-1 max-w-[536px]">
            <p className="text-[15.5px] font-normal leading-[27px] text-[#82827D]">
              still pondering. thoughts and observations coming soon.
            </p>
          </div>
        </section>

        {/* Books Section */}
        <section
          id="books"
          className="border-t border-white/[0.04] py-[52px] flex flex-col sm:flex-row scroll-mt-24"
        >
          <div className="w-full sm:w-[144px] shrink-0 mb-6 sm:mb-0">
            <h2 className="text-[13px] font-normal leading-[21px] text-[#71716D] tracking-[0.01em]">
              books
            </h2>
          </div>
          <div className="flex-1 max-w-[536px] space-y-[22px]">
            <BookItem
              title="the count of monte cristo"
              author="alexandre dumas"
              status="currently reading"
            />
            <BookItem
              title="the bhagavad gita"
              status="currently reading"
            />
            <BookItem
              title="influence: the psychology of persuasion"
              author="robert cialdini"
              status="currently reading"
            />
            <BookItem
              title="superintelligence"
              author="nick bostrom"
              status="currently reading"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] pt-[36px] pb-[60px] flex items-center justify-between">
          <div className="flex items-center gap-[22px]">
            <a
              href="https://x.com/ayushkumarrrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-normal leading-[20px] text-[#71716D] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              x
            </a>
            <a
              href="mailto:ayushkumarexclusive@gmail.com"
              className="text-[13px] font-normal leading-[20px] text-[#71716D] hover:text-[#E8E8E5] transition-colors duration-200"
            >
              email
            </a>
          </div>
          <div className="text-[12px] font-normal leading-[19px] text-[#5F5F5C]">
            © 2026 ayush kumar
          </div>
        </footer>
      </main>
    </div>
  );
}
