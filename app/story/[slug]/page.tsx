import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "../../../lib/content";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) notFound();

  return (
    <main className="story-page">
      <header className="header">
        <Link href="/" className="logo">THE LEDGER</Link>
        <nav aria-label="Primary navigation">
          <Link href="/latest">LATEST</Link>
          <Link href="/accounting">ACCOUNTING</Link>
          <Link href="/ai">AI</Link>
          <Link href="/audit">AUDIT</Link>
          <Link href="/fintech">FINTECH</Link>
          <Link href="/data">DATA</Link>
        </nav>
        <div className="issue">ISSUE 01 / SEPTEMBER 2026</div>
      </header>

      <article className="story-article">
        <div className="eyebrow">{story.category}</div>
        <h1>{story.title}</h1>
        <p className="story-dek">{story.dek}</p>
        <div className="story-meta">{story.date} &nbsp; / &nbsp; {story.read}</div>

        <div className="story-visual">
          <span>THE LEDGER</span>
          <strong>EDITORIAL / 01</strong>
        </div>

        <div className="story-body">
          <p>
            Accounting technology is moving from the back office into the architecture of modern business. The change is not one tool replacing another; it is a shift toward connected systems that can capture, classify, reconcile and interpret financial information with less manual intervention.
          </p>
          <p>
            That shift changes the accountant’s work. Routine processing becomes increasingly automated while judgment, interpretation, control design and communication become more important. The technology therefore matters not only because it saves time, but because it changes where professional attention is spent.
          </p>
          <blockquote>“The future of accounting is not less intelligence. It is intelligence applied differently.”</blockquote>
          <p>
            The Ledger follows that transition across AI, audit, cloud platforms, fintech and financial reporting — with the aim of making the technology understandable without losing the accounting underneath it.
          </p>
        </div>

        <Link href="/latest" className="story-back">← BACK TO THE LATEST</Link>
      </article>
    </main>
  );
}
