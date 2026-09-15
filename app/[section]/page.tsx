import Link from "next/link";
import { notFound } from "next/navigation";
import { sectionCopy, stories } from "../../lib/content";

export function generateStaticParams() {
  return Object.keys(sectionCopy).map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const copy = sectionCopy[section];

  if (!copy) notFound();

  const filtered =
    section === "latest"
      ? stories
      : stories.filter((story) => {
          const category = story.category.toLowerCase();
          return (
            category.includes(section.replace("ai", "ai &")) ||
            (section === "accounting" && category.includes("accounting")) ||
            (section === "audit" && category.includes("audit")) ||
            (section === "fintech" && category.includes("fintech")) ||
            (section === "data" && category.includes("data"))
          );
        });

  return (
    <main className="section-page">
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

      <section className="section-page-hero">
        <div className="eyebrow">{copy.eyebrow}</div>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>

      <section className="section-page-grid">
        {filtered.length ? (
          filtered.map((story, index) => (
            <article className="article-card" key={story.slug}>
              <div className="article-image"><span>0{index + 1}</span></div>
              <div className="article-category">{story.category}</div>
              <h2>{story.title}</h2>
              <p>{story.dek}</p>
              <div className="article-meta">
                <span>{story.date}</span>
                <span>{story.read}</span>
              </div>
              <Link className="read" href={`/story/${story.slug}`}>READ STORY →</Link>
            </article>
          ))
        ) : (
          <div className="section-empty">
            <span>EDITORIAL NOTE</span>
            <h2>This desk is being built.</h2>
            <p>New stories are being added as The Ledger expands its coverage.</p>
          </div>
        )}
      </section>

      <footer>
        <Link href="/" className="logo">THE LEDGER</Link>
        <p>Where Accounting Evolves.<br />A digital publication on the future of finance.</p>
        <div className="footer-bottom">
          <span>© 2026 THE LEDGER</span>
          <Link href="/">BACK TO HOME ↑</Link>
        </div>
      </footer>
    </main>
  );
}
