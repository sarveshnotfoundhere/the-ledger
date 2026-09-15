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
    <main className="landing presentation-landing">
      <MoneyCursor />
      <header className="landing-nav">
        <Link href="/" className="landing-logo">THE LEDGER <span>/ 11</span></Link>
        <div>FINANCIAL ACCOUNTING · CIA III · 2026</div>
        <Link href="/evolution">START →</Link>
      </header>

      <section className="landing-hero">
        <div className="landing-eyebrow">DIGITAL ACCOUNTING CONSULTANCY · TOPIC 11</div>
        <div className="landing-center">
          <div className="landing-index">01 / 07</div>
          <h1>Recent <em>Innovations</em><br />in Accounting<br />Technologies.</h1>
          <p>From recording numbers to creating intelligence.</p>
        </div>
        <div className="landing-bottom">
          <span>REACTIVE PRESENTATION · 07 CHAPTERS</span>
          <nav aria-label="Presentation chapters">
            {chapters.map(([no, title, href]) => <Link key={no} href={href}><i>{no}</i>{title}</Link>)}
          </nav>
          <span>SCROLL / CLICK TO EXPLORE ↓</span>
        </div>
      </section>
    </main>
  );
}
