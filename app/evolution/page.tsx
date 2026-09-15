import Link from "next/link";

export default function EvolutionPage() {
  return (
    <main className="topic-page">
      <header className="topic-nav"><Link href="/">THE LEDGER <span>/ TOPIC 11</span></Link><div>01 / INTRODUCTION</div></header>
      <section className="topic-hero"><span>01 · MEMBER 1</span><h1>Accounting<br /><em>evolves.</em></h1><p>Recent innovations are reshaping accounting from a record-keeping function into a connected system for automation, analysis, control and decision-making.</p></section>
      <section className="topic-section"><div className="section-label">THE JOURNEY</div><div className="timeline"><article><b>01</b><h2>Traditional</h2><p>Paper invoices, manual journals, spreadsheets and periodic reporting dominated the workflow. Speed and scalability depended heavily on human effort.</p></article><article><b>02</b><h2>Digital</h2><p>Accounting software, electronic documents and integrated systems reduced duplication and connected transactions across business functions.</p></article><article className="featured"><b>03</b><h2>Intelligent</h2><p>AI, automation, cloud platforms, data analytics and blockchain add prediction, machine assistance, real-time visibility and stronger traceability.</p></article></div></section>
      <section className="topic-section"><div className="section-label">WHY INNOVATION MATTERS</div><div className="big-grid"><div><strong>01</strong><h3>Speed</h3><p>Routine transactions and reporting can move faster.</p></div><div><strong>02</strong><h3>Accuracy</h3><p>Automation can reduce repetitive manual errors.</p></div><div><strong>03</strong><h3>Control</h3><p>Digital trails and rule-based workflows strengthen monitoring.</p></div><div><strong>04</strong><h3>Insight</h3><p>Connected data gives finance teams more timely information for decisions.</p></div></div></section>
      <section className="topic-callout"><span>CORE IDEA</span><h2>The accountant's role shifts from <em>recording</em> what happened to interpreting what it means.</h2></section>
      <footer className="topic-footer"><Link href="/ai">NEXT: AI + GENERATIVE AI →</Link><Link href="/">BACK TO THE LEDGER</Link></footer>
    </main>
  );
}
