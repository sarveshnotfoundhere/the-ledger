import Link from "next/link";
import MoneyCursor from "@/components/money-cursor";

const chapters = [
  ["01", "Evolution", "/evolution"],
  ["02", "AI + Gen AI", "/ai"],
  ["03", "RPA", "/rpa"],
  ["04", "Blockchain", "/blockchain"],
  ["05", "Cloud + Big Data", "/cloud"],
  ["06", "Future", "/future"],
  ["07", "Case Study", "/case-files"],
] as const;

const presenters = "SARVESH M · PRATHAM BOTHRA · VATSAL ROY · ROHAN RAVANI · VEDIKA GUNDELI · PRIYANSH GHEEWALA";

export default function Home() {
  return (
    <main className="landing presentation-landing">
      <MoneyCursor />
      <header className="landing-nav">
        <Link href="/" className="landing-logo">THE LEDGER <span>/ 11</span></Link>
        <div>FINANCIAL ACCOUNTING · CIA 3 · 2026</div>
        <Link href="/evolution">ENTER →</Link>
      </header>

      <section className="landing-hero">
        <div className="landing-topline">
          <span>TOPIC 11</span>
          <span>RECENT INNOVATIONS IN ACCOUNTING TECHNOLOGIES</span>
          <span>CIA 3</span>
        </div>

        <div className="landing-center">
          <div className="landing-index">01 / 07</div>
          <div>
            <div className="landing-kicker">DIGITAL ACCOUNTING CONSULTANCY · CIA 3</div>
            <h1>Accounting<br /><span>after</span> <em>automation.</em></h1>
            <p>How AI, RPA, blockchain, cloud platforms and big data are changing the way accounting work is captured, controlled and understood.</p>
          </div>
        </div>

        <div className="landing-people">
          <span>PRESENTED BY</span>
          <strong>{presenters}</strong>
        </div>

        <div className="landing-bottom">
          <span>REACTIVE PRESENTATION · 07 CHAPTERS</span>
          <nav aria-label="Presentation chapters">
            {chapters.map(([no, title, href]) => (
              <Link key={no} href={href}><i>{no}</i>{title}</Link>
            ))}
          </nav>
          <span>SCROLL / CLICK TO EXPLORE ↓</span>
        </div>
      </section>
    </main>
  );
}
