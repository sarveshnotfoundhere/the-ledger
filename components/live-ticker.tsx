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

const fallback: Story[] = [
  { category: "ACCOUNTING", title: "Live accounting technology feed loading", link: "/live", source: "The Ledger", publishedAt: "" },
  { category: "AUDIT", title: "Monitoring the latest developments in digital assurance", link: "/live", source: "The Ledger", publishedAt: "" },
  { category: "FINTECH", title: "Tracking the technology reshaping modern finance", link: "/live", source: "The Ledger", publishedAt: "" },
];

export default function LiveTicker() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/live", { cache: "no-store" });
        const data: unknown = await response.json();
        if (
          active &&
          typeof data === "object" &&
          data !== null &&
          "stories" in data &&
          Array.isArray(data.stories)
        ) {
          setStories(data.stories as Story[]);
        }
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
              <a className="ticker-story" href={story.link} target="_blank" rel="noreferrer">{story.title}</a>
              <span className="ticker-separator">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
