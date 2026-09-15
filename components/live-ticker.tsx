"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Story = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  category: string;
};

const fallback = [
  { category: "ACCOUNTING", title: "Live accounting technology feed loading" },
  { category: "AUDIT", title: "Monitoring the latest developments in digital assurance" },
  { category: "FINTECH", title: "Tracking the technology reshaping modern finance" },
];

export default function LiveTicker() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/live", { cache: "no-store" });
        const data = await response.json();
        if (active && Array.isArray(data.stories)) setStories(data.stories);
      } catch {
        if (active) setStories([]);
      }
    };
    load();
    const timer = window.setInterval(load, 5 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const displayStories = useMemo(() => (stories.length ? stories : fallback), [stories]);
  const items = [...displayStories, ...displayStories];

  return (
    <div className="ticker" aria-label="The Ledger live finance news feed">
      <Link href="/live" className="live" title="Open The Ledger Live">
        <span className="live-dot"></span>
        LIVE
      </Link>
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {items.map((story, index) => (
            <span className="ticker-item" key={`${story.title}-${index}`}>
              <span className="ticker-category">{story.category}</span>
              {"link" in story ? (
                <a className="ticker-story" href={story.link} target="_blank" rel="noreferrer">{story.title}</a>
              ) : (
                <span className="ticker-story">{story.title}</span>
              )}
              <span className="ticker-separator">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
