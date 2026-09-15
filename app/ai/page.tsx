import Link from "next/link";

const uses=[
  ["01","CAPTURE","Extract fields from invoices, receipts and financial documents."],
  ["02","CLASSIFY","Suggest categories, accounts and journal-entry treatments."],
  ["03","DETECT","Surface anomalies, duplicates and unusual patterns for review."],
  ["04","EXPLAIN","Turn financial data into commentary, analysis and forecast support."],
];

export default function AIPage(){return <main className="topic-page"><header className="topic-nav"><Link href="/">THE LEDGER <span>/ 11</span></Link><div>02 / AI + GENERATIVE AI</div></header>
<section className="topic-hero"><span>02 · AI</span><div><h1>Machines<br/><span>read</span> the numbers.<br/><em>Humans judge.</em></h1><p>Artificial intelligence adds pattern recognition, language interfaces and machine-assisted reasoning to accounting workflows. The opportunity is not “AI replaces accountants”; it is that accountants spend less time moving data and more time evaluating it.</p></div><div className="hero-side-note">DOCUMENT → DATA → INSIGHT</div></section>
<section className="topic-section"><div className="section-label">FOUR ACCOUNTING USES</div><div className="big-grid">{uses.map(([n,t,d])=><div key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></div>)}</div></section>
<section className="workflow-card"><div><span>LIVE MOCK WORKFLOW</span><h2>One invoice enters. A structured suggestion comes out.</h2><p className="workflow-caption">The person remains the approval point.</p></div><div className="mock-invoice"><small>INVOICE / INV-2048</small><b>CONSULTING<br/>SERVICES</b><span>Subtotal ₹48,000</span><span>GST ₹8,640</span><span>Total ₹56,640</span></div><div className="mock-output"><small>AI SUGGESTION</small><b>Professional Services Expense</b><p>Journal entry drafted · confidence 94% · human review required</p></div></section>
<section className="topic-callout"><span>KEY IDEA</span><h2>AI can make the first move. <em>Accountants make the final call.</em></h2></section>
<section className="topic-section"><div className="section-label">CONTROL LAYER</div><div className="topic-columns"><div><h2>Speed without supervision is not intelligence.</h2><p>AI output can be incomplete or wrong. Strong accounting use therefore needs clean data, access controls, review procedures, audit trails and clear responsibility for the final decision.</p></div><div><h3>Human-in-the-loop</h3><p>High-impact entries and exceptions stay reviewable. The technology accelerates the workflow; professional judgement remains accountable for the outcome.</p></div></div></section>
<footer className="topic-footer"><Link href="/evolution">01 / ←</Link><Link href="/rpa">03 / RPA + AUTOMATION →</Link></footer></main>}
