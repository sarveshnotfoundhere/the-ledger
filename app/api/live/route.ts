import { NextResponse } from "next/server";

export const revalidate = 300;

const FEEDS = [
  {
    category: "ACCOUNTING",
    url: "https://news.google.com/rss/search?q=accounting+technology+AI&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    category: "AUDIT",
    url: "https://news.google.com/rss/search?q=audit+AI+accounting&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    category: "FINTECH",
    url: "https://news.google.com/rss/search?q=fintech+AI+finance&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    category: "FINANCE",
    url: "https://news.google.com/rss/search?q=financial+reporting+technology&hl=en-IN&gl=IN&ceid=IN:en",
  },
];

type Story = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  category: string;
};

function decode(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function tag(item: string, name: string) {
  const match = item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return match ? decode(match[1].trim()) : "";
}

function parseFeed(xml: string, category: string): Story[] {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .map((match) => {
      const item = match[1];
      const rawTitle = tag(item, "title");
      const rawLink = tag(item, "link");
      const rawSource = tag(item, "source");
      const publishedAt = tag(item, "pubDate");
      return {
        title: rawTitle,
        link: rawLink,
        source: rawSource,
        publishedAt,
        category,
      };
    })
    .filter((story) => story.title && story.link && story.publishedAt);
}

export async function GET() {
  try {
    const responses = await Promise.all(
      FEEDS.map(async (feed) => {
        const response = await fetch(feed.url, {
          headers: { "User-Agent": "The-Ledger/1.0" },
          next: { revalidate: 300 },
        });
        if (!response.ok) throw new Error(`Feed failed: ${response.status}`);
        return parseFeed(await response.text(), feed.category);
      }),
    );

    const seen = new Set<string>();
    const stories = responses
      .flat()
      .filter((story) => {
        const key = story.title.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      .slice(0, 24);

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      stories,
    });
  } catch {
    return NextResponse.json(
      { updatedAt: new Date().toISOString(), stories: [], error: "Live feed temporarily unavailable" },
      { status: 200 },
    );
  }
}
