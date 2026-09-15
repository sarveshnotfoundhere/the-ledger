import Link from "next/link";

const stages = [
  ["01", "TRADITIONAL", "Paper invoices · manual journals · periodic reporting"],
  ["02", "DIGITAL", "Software ledgers · electronic documents · integrated systems"],
  ["03", "INTELLIGENT", "AI · automation · cloud · analytics · blockchain"],
];

export default function EvolutionPage() {
  return <main className="topic-page"><header className="topic-nav"><Link href="/">THE LEDGER <span>/ 11</span></Link><div>01 / EVOLUTION</div></header>
    <section className="topic-hero"><span>01 · INTRODUCTION</span><div><h1>Accounting<br/><span>is no longer</span><br/><em>static.</em></h1><p>The profession is moving from recording transactions after they happen to working inside connected systems that automate, analyse and explain financial activity in real time.</p></div><div className="hero-side-note">TRADITIONAL → DIGITAL → INTELLIGENT</div></section>
    <section className="topic-section"><div className="section-label">THREE ERAS</div><div className="timeline">{stages.map(([n,title,body],i)=><article className={i===2?"featured":""} key={n}><b>{n}</b><h2>{title}</h2><p>{body}</p></article>)}</div></section>
    <section className="topic-section"><div className="section-label">WHAT INNOVATION CHANGES</div><div className="big-grid"><div><strong>01</strong><h3>Speed</h3><p>Routine processing can happen continuously instead of waiting for a manual batch.</p></div><div><strong>02</strong><h3>Accuracy</h3><p>Standardised digital workflows can reduce repetitive entry and reconciliation errors.</p></div><div><strong>03</strong><h3>Visibility</h3><p>Connected systems give finance teams a clearer view of activity across the business.</p></div><div><strong>04</strong><h3>Insight</h3><p>Data becomes useful for analysis, forecasting and decision-making—not only reporting.</p></div></div></section>
    <section className="topic-callout"><span>SHIFT</span><h2>From <em>number recorder</em> to <em>financial interpreter.</em></h2></section>
    <footer className="topic-footer"><Link href="/">00 / INDEX</Link><Link href="/ai">02 / AI + GEN AI →</Link></footer></main>;
}
