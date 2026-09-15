"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Story = { title: string; source: string; publishedAt: string; category: string; link: string };

export default function LivePage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/live", { cache: "no-store" });
        const data = await response.json();
        if (!active) return;
        setStories(Array.isArray(data.stories) ? data.stories : []);
        setUpdatedAt(data.updatedAt || null);
      } catch {
        if (active) setStories([]);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    const timer = window.setInterval(load, 5 * 60 * 1000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  return (
    <main className="publication-page">
      <header className="header">
        <Link href="/" className="logo">THE LEDGER</Link>
        <nav aria-label="Primary navigation">
          <Link href="/latest">LATEST</Link><Link href="/accounting">ACCOUNTING</Link><Link href="/ai">AI</Link><Link href="/audit">AUDIT</Link><Link href="/fintech">FINTECH</Link><Link href="/data">DATA</Link>
        </nav>
        <div className="issue">LIVE / SEPTEMBER 2026</div>
      </header>

      <section className="live-hero section">
        <div className="eyebrow"><span className="live-dot"></span> THE LEDGER LIVE</div>
        <h1>News moves.<br /><span>Finance follows.</span></h1>
        <p>Current stories from accounting, audit, fintech and financial technology. Every headline links back to its original publisher.</p>
        <div className="live-status">AUTO-REFRESH · 5 MINUTES · SOURCED HEADLINES</div>
      </section>

      <section className="section live-feed">
        <div className="section-heading">
          <div><div className="eyebrow">01 / LIVE FEED</div><h2>What’s moving now.</h2></div>
          <span className="live-updated">{updatedAt ? `UPDATED ${new Date(updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "FEED READY"}</span>
        </div>

        {loading ? <div className="live-empty">Connecting to the newsroom…</div> : stories.length ? (
          <div className="live-grid">
            {stories.map((story) => (
              <article className="live-story" key={`${story.title}-${story.publishedAt}`}>
                <div className="live-story-top"><span>{story.category}</span><time>{new Date(story.publishedAt).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</time></div>
                <h2><a href={story.link} target="_blank" rel="noreferrer">{story.title}</a></h2>
                <div className="live-story-bottom"><span>{story.source || "Publisher"}</span><a href={story.link} target="_blank" rel="noreferrer">ORIGINAL STORY ↗</a></div>
              </article>
            ))}
          </div>
        ) : <div className="live-empty">The live feed is temporarily unavailable. Refresh shortly.</div>}
      </section>

      <footer><Link href="/" className="logo">THE LEDGER</Link><p>Where Accounting Evolves.<br />A digital publication on the future of finance.</p><div className="footer-bottom"><span>© 2026 THE LEDGER</span><span>LIVE · ACCOUNTING · TECHNOLOGY · FINANCE</span></div></footer>
    </main>
  );
}
