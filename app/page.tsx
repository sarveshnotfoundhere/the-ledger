import Link from "next/link";
import MoneyCursor from "@/components/money-cursor";

const chapters = [
  ["01", "Evolution", "/evolution"],
  ["02", "AI", "/ai"],
  ["03", "RPA", "/rpa"],
  ["04", "Blockchain", "/blockchain"],
  ["05", "Cloud + Data", "/cloud"],
  ["06", "Future", "/future"],
  ["07", "Case Study", "/case-files"],
];

export default function Home() {
  return (
    <main className="landing deck-home">
      <MoneyCursor />
      <div className="deck-frame" />
      <header className="deck-nav">
        <Link href="/" className="deck-brand">THE LEDGER <span>11</span></Link>
        <span>FINANCIAL ACCOUNTING · CIA III</span>
        <span>2026 / 07 CHAPTERS</span>
      </header>

      <section className="deck-cover">
        <div className="cover-giant">ACCOUNTING</div>
        <div className="cover-giant cover-outline">REWIRED.</div>
        <div className="cover-meta cover-meta-left">
          <span>RECENT INNOVATIONS IN</span>
          <span>ACCOUNTING TECHNOLOGIES</span>
        </div>
        <div className="cover-meta cover-meta-right">
          <span>FROM RECORDING</span>
          <span>TO INTELLIGENCE</span>
        </div>
        <div className="cover-scroll">01 / 07<br />SCROLL TO ENTER ↓</div>
        <div className="cover-stamp">DIGITAL ACCOUNTING<br />CONSULTANCY TEAM</div>
      </section>

      <section className="deck-intro">
        <div className="deck-section-number">00 — INTRO</div>
        <div className="deck-intro-copy">
          <p className="deck-lead">Accounting is no longer just about recording what happened.</p>
          <p>AI, automation, blockchain, cloud platforms and data analytics are changing how transactions are captured, controlled, analysed and turned into decisions.</p>
          <Link href="/evolution" className="deck-enter">BEGIN THE PRESENTATION <span>→</span></Link>
        </div>
        <div className="deck-rule-text">ONE SYSTEM · SEVEN CHAPTERS</div>
      </section>

      <section className="chapter-index">
        <div className="deck-section-number">INDEX — 01 / 07</div>
        <div className="chapter-list">
          {chapters.map(([no, title, href]) => (
            <Link href={href} key={no} className="chapter-row">
              <span>{no}</span>
              <strong>{title}</strong>
              <em>→</em>
            </Link>
          ))}
        </div>
      </section>

      <footer className="deck-footer">
        <span>THE LEDGER / TOPIC 11</span>
        <span>REACTIVE PRESENTATION</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
