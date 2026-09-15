"use client";

import { useEffect, useState } from "react";

type Story = {
  title: string;
  source: string;
  publishedAt: string;
  category: string;
  link: string;
};

type FeedResponse = {
  stories?: Story[];
  updatedAt?: string | null;
};

export default function LiveFeed({ initialStories, initialUpdatedAt }: FeedResponse) {
  const [stories, setStories] = useState<Story[]>(initialStories || []);
  const [updatedAt, setUpdatedAt] = useState<string | null>(initialUpdatedAt || null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let active = true;

    const refresh = async () => {
      setRefreshing(true);
      try {
        const response = await fetch("/api/live", { cache: "no-store" });
        if (!response.ok) return;
        const data: FeedResponse = await response.json();
        if (!active) return;
        setStories(data.stories || []);
        setUpdatedAt(data.updatedAt || new Date().toISOString());
      } finally {
        if (active) setRefreshing(false);
      }
    };

    const timer = window.setInterval(refresh, 5 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="section-heading live-feed-heading">
        <div><div className="eyebrow">01 / LIVE FEED</div><h2>What’s moving now.</h2></div>
        <span className="live-updated">
          {refreshing ? "REFRESHING…" : updatedAt ? `UPDATED ${new Date(updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}` : "FEED READY"}
        </span>
      </div>

      {stories.length ? (
        <div className="live-grid">
          {stories.map((story) => (
            <article className="live-story" key={`${story.title}-${story.publishedAt}`}>
              <div className="live-story-top">
                <span>{story.category}</span>
                <time dateTime={story.publishedAt} title={new Date(story.publishedAt).toLocaleString()}>
                  {new Date(story.publishedAt).toLocaleString([], { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </time>
              </div>
              <h2><a href={story.link} target="_blank" rel="noreferrer">{story.title}</a></h2>
              <div className="live-story-bottom">
                <span>{story.source || "Publisher"}</span>
                <a href={story.link} target="_blank" rel="noreferrer">ORIGINAL STORY ↗</a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="live-empty">The live feed is temporarily unavailable. Refresh shortly.</div>
      )}
    </>
  );
}
