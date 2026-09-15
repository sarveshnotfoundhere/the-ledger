"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MoneyCursor from "@/components/money-cursor";

const technologies = [
  { id: "01", title: "AI + GENERATIVE AI", kicker: "INTELLIGENCE", text: "Automated data entry, invoice processing, fraud detection and AI-assisted financial analysis.", tag: "MEMBER 2" },
  { id: "02", title: "RPA + AUTOMATION", kicker: "EXECUTION", text: "Software robots handle repetitive accounting work such as reconciliation, invoice workflows and payroll.", tag: "MEMBER 3" },
  { id: "03", title: "BLOCKCHAIN + SMART CONTRACTS", kicker: "TRUST", text: "Shared records improve transparency, traceability and the audit trail around financial transactions.", tag: "MEMBER 4" },
  { id: "04", title: "CLOUD + BIG DATA", kicker: "CONNECTION", text: "Real-time access, collaboration, analytics, forecasting and better decision-making from connected financial data.", tag: "MEMBER 5" },
];

const flow = ["SOURCE DATA", "AI EXTRACTION", "RPA WORKFLOW", "BLOCKCHAIN CHECK", "CLOUD LEDGER", "AI INSIGHT"];

export default function Home() {
  const [active, setActive] = useState(0);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") window.scrollBy({ top: window.innerHeight * 0.88, behavior: "smooth" });
      if (event.key === "ArrowUp") window.scrollBy({ top: -window.innerHeight * 0.88, behavior: "smooth" });
      if (event.key === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
      if (event.key === "End") window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (demoStep >= flow.length) return;
    const timer = window.setTimeout(() => setDemoStep((value) => value + 1), 850);
    return () => window.clearTimeout(timer);
  }, [demoStep]);

  return (
    <main className="presentation-shell">
      <MoneyCursor />

      <header className="presentation-nav">
        <Link href="#top" className="presentation-logo">THE LEDGER <span>/ TOPIC 11</span></Link>
        <nav>
          <a href="#evolution">EVOLUTION</a><a href="#ai">AI</a><a href="#rpa">RPA</a><a href="#blockchain">BLOCKCHAIN</a><a href="#cloud">CLOUD + DATA</a><a href="#future">FUTURE</a>
        </nav>
        <span className="nav-status"><i /> INTERACTIVE PRESENTATION</span>
      </header>

      <div className="presentation-progress"><span style={{ width: `${Math.max(8, (active / 6) * 100)}%` }} /></div>

      <section className="presentation-hero slide" id="top">
        <div className="slide-no">00 / 06</div>
        <div className="hero-kicker">FINANCIAL ACCOUNTING · CIA III · 2026</div>
        <div className="hero-layout">
          <div className="hero-title-block">
            <p className="micro">TOPIC 11</p>
            <h1>Recent<br /><em>Innovations</em><br />in Accounting<br />Technologies.</h1>
            <p className="hero-sub">How accounting is moving from recording numbers to creating intelligence.</p>
          </div>
          <div className="hero-orchestration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit-core">₹<small>LEDGER</small></div>
            <div className="orbit-label label-a">AI</div><div className="orbit-label label-b">RPA</div><div className="orbit-label label-c">BLOCKCHAIN</div><div className="orbit-label label-d">CLOUD</div>
          </div>
        </div>
        <div className="hero-footer"><span>6 MEMBERS · 1 DIGITAL ACCOUNTING ECOSYSTEM</span><span>SCROLL ↓</span></div>
      </section>

      <section className="slide evolution" id="evolution">
        <div className="slide-no">01 / 06</div>
        <div className="section-kicker">MEMBER 1 · INTRODUCTION</div>
        <div className="split-heading"><h2>Accounting<br /><em>evolves.</em></h2><p>Accounting technology uses digital systems and emerging technologies to capture, process, analyse and communicate financial information.</p></div>
        <div className="evolution-track">
          <div><span>THEN</span><strong>TRADITIONAL</strong><p>Manual records<br />Paper invoices<br />Periodic reporting</p></div>
          <b>→</b>
          <div><span>NEXT</span><strong>DIGITAL</strong><p>Software ledgers<br />Electronic documents<br />Connected systems</p></div>
          <b>→</b>
          <div className="current"><span>NOW</span><strong>INTELLIGENT</strong><p>AI-assisted work<br />Automation<br />Real-time insight</p></div>
        </div>
        <div className="thesis">Innovation matters because finance teams need <em>speed, accuracy, control and insight</em> — not just more data.</div>
      </section>

      <section className="slide technology-slide" id="ai">
        <div className="slide-no">02 / 06</div>
        <div className="section-kicker">MEMBER 2 · AI & GENERATIVE AI</div>
        <div className="technology-layout">
          <div><h2>AI turns<br /><em>data into insight.</em></h2><p>Generative AI can assist with structured extraction, transaction classification, anomaly signals and financial commentary. Human review remains essential.</p><div className="pill-row"><span>DATA ENTRY</span><span>INVOICES</span><span>FRAUD SIGNALS</span><span>ANALYSIS</span></div></div>
          <div className="ai-terminal"><div className="terminal-head"><span>AI ACCOUNTING ASSISTANT</span><span>● ONLINE</span></div><div className="invoice-card"><small>INCOMING DOCUMENT</small><strong>Invoice #INV-2048</strong><div className="invoice-lines"><span>Consulting Services <b>₹48,000</b></span><span>Tax <b>₹8,640</b></span><span>Total <b>₹56,640</b></span></div></div><div className="ai-result"><span>AI OUTPUT</span><strong>Expense classified → Professional Services</strong><p>Suggested entry generated for review.</p></div></div>
        </div>
      </section>

      <section className="slide rpa-slide" id="rpa">
        <div className="slide-no">03 / 06</div>
        <div className="section-kicker">MEMBER 3 · RPA & AUTOMATION</div>
        <div className="split-heading"><h2>Let robots<br /><em>repeat.</em></h2><p>RPA uses software bots to execute rule-based, repetitive tasks at speed while people focus on exceptions and judgement.</p></div>
        <div className="rpa-lanes">
          <div><span>INPUT</span><strong>Bank statement</strong></div><i>→</i><div><span>BOT</span><strong>Read + match</strong></div><i>→</i><div><span>RULES</span><strong>Exceptions</strong></div><i>→</i><div className="rpa-final"><span>OUTPUT</span><strong>Reconciled ledger</strong></div>
        </div>
        <div className="task-grid"><span>BANK RECONCILIATION</span><span>INVOICE PROCESSING</span><span>PAYROLL</span><span>REPORT GENERATION</span></div>
      </section>

      <section className="slide blockchain-slide" id="blockchain">
        <div className="slide-no">04 / 06</div>
        <div className="section-kicker">MEMBER 4 · BLOCKCHAIN + SMART CONTRACTS</div>
        <div className="blockchain-head"><h2>One transaction.<br /><em>Many proofs.</em></h2><p>A blockchain is a shared record where transactions are grouped into blocks and linked together. The value for accounting is the traceable history.</p></div>
        <div className="chain"><div className="block"><small>BLOCK 014</small><strong>₹2,40,000</strong><span>HASH · 8A4C</span></div><b>→</b><div className="block active-block"><small>BLOCK 015</small><strong>₹56,640</strong><span>HASH · B91E</span></div><b>→</b><div className="block"><small>BLOCK 016</small><strong>₹91,200</strong><span>HASH · 3D8F</span></div></div>
        <div className="blockchain-points"><span><b>TRANSPARENCY</b> Shared view of the record.</span><span><b>TRACEABILITY</b> Follow the transaction history.</span><span><b>SMART CONTRACTS</b> Rules can trigger actions automatically.</span></div>
      </section>

      <section className="slide cloud-slide" id="cloud">
        <div className="slide-no">05 / 06</div>
        <div className="section-kicker">MEMBER 5 · CLOUD ACCOUNTING + BIG DATA</div>
        <div className="cloud-layout"><div><h2>The ledger<br /><em>travels.</em></h2><p>Cloud accounting enables real-time access and collaboration. Big data adds the analytical layer: trends, forecasts and decision support.</p></div><div className="dashboard"><div className="dash-top"><span>FINANCE CONTROL ROOM</span><span>LIVE · 12:42:08</span></div><div className="metric-grid"><div><small>REVENUE</small><strong>₹12.8M</strong><em>+8.4%</em></div><div><small>NET MARGIN</small><strong>18.6%</strong><em>+2.1%</em></div><div><small>OPEN ITEMS</small><strong>126</strong><em>−14%</em></div></div><div className="chart"><span style={{ height: "38%" }} /><span style={{ height: "55%" }} /><span style={{ height: "44%" }} /><span style={{ height: "73%" }} /><span style={{ height: "62%" }} /><span style={{ height: "89%" }} /><span style={{ height: "78%" }} /></div><div className="dash-foot">REAL-TIME ACCESS · COLLABORATION · ANALYTICS · FORECASTING</div></div></div>
      </section>

      <section className="slide ecosystem-slide" id="demo">
        <div className="slide-no">06 / 06</div>
        <div className="section-kicker">THE INNOVATIVE COMPONENT · LIVE MOCK WORKFLOW</div>
        <h2>One transaction.<br /><em>Six technologies.</em></h2>
        <p className="demo-intro">Watch a financial document travel through an intelligent accounting ecosystem.</p>
        <div className="demo-flow">{flow.map((item, index) => <div key={item} className={index < demoStep ? "flow-step done" : "flow-step"}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < demoStep && <i>✓</i>}</div>)}</div>
        <button className="replay" onClick={() => setDemoStep(0)}>REPLAY WORKFLOW ↻</button>
      </section>

      <section className="slide future-slide" id="future">
        <div className="section-kicker">MEMBER 6 · FUTURE + CASE STUDY + CONCLUSION</div>
        <div className="future-grid"><div><h2>From number<br /><em>recorder</em><br />to strategic<br />analyst.</h2></div><div className="future-copy"><p className="big-quote">Technology handles more of the <em>process</em> so accountants can spend more time on <em>judgement, communication and strategy.</em></p><div className="future-columns"><div><span>EMERGING</span><p>Agentic AI<br />Continuous audit<br />Embedded finance<br />Intelligent forecasting</p></div><div><span>WATCH FOR</span><p>Data quality<br />Cybersecurity<br />Model risk<br />Human oversight</p></div></div></div></div>
        <div className="case-strip"><strong>CASE STUDY</strong><span>Use a real company example to show the shift from manual processing to technology-enabled accounting.</span><Link href="/case-files">EXPLORE CASE FILES →</Link></div>
      </section>

      <footer className="presentation-footer"><div><span>THE LEDGER</span><h2>Accounting isn't<br /><em>disappearing.</em><br />It's becoming intelligent.</h2></div><div className="footer-meta"><p>RECENT INNOVATIONS IN ACCOUNTING TECHNOLOGIES</p><p>Digital Accounting · CIA III · Topic 11</p><p>References & supporting materials available in the accompanying submission.</p></div></footer>
    </main>
  );
}
