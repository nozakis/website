import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start px-6 py-24">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-semibold tracking-normal">Hey</h1>

        <nav aria-label="Primary" className="mt-8">
          <p className="text-lg">
            <Link href="/resume">Resume</Link>
          </p>
          <p className="text-lg">
            <a
              href="https://github.com/nozakis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/samuel-nozaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </nav>
      </div>
    </main>
  );
}
