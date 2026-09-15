"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

const prompts = [
  "How is AI changing audit evidence?",
  "Explain continuous auditing in simple terms.",
  "What does RPA automate in accounting?",
  "How does blockchain affect the ledger?",
];

const demoAnswers: Record<string, string> = {
  "How is AI changing audit evidence?":
    "AI can help auditors classify documents, surface anomalies and prioritize transactions for review. The human auditor still evaluates evidence, controls, materiality and professional judgment.",
  "Explain continuous auditing in simple terms.":
    "Continuous auditing shifts assurance from periodic sample checks toward automated, ongoing analysis of financial data. Exceptions can be surfaced closer to when transactions happen rather than only at period-end.",
  "What does RPA automate in accounting?":
    "RPA is strongest at repetitive, rules-based work such as data entry, reconciliations, invoice handling and moving information between systems. It reduces manual effort while leaving exceptions and judgment with people.",
  "How does blockchain affect the ledger?":
    "Blockchain creates a shared, tamper-evident record of transactions across participants. For accounting, its value is strongest where traceability, shared records and verification across parties matter.",
};

function demoAnswerFor(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return "Ask about accounting technology, AI, audit, fintech or financial reporting.";
  const exact = Object.entries(demoAnswers).find(([prompt]) => prompt.toLowerCase() === normalized);
  if (exact) return exact[1];
  if (normalized.includes("ai") || normalized.includes("artificial intelligence")) {
    return "In accounting, AI is most useful when it works alongside governed data and professional judgment. Common applications include document extraction, anomaly detection, forecasting, classification and decision support.";
  }
  if (normalized.includes("rpa") || normalized.includes("automation")) {
    return "RPA automates repetitive, rules-based accounting workflows such as reconciliations, data transfer, invoice processing and routine reporting steps.";
  }
  if (normalized.includes("audit")) {
    return "Digital audit tools can analyze larger populations of transactions, identify unusual patterns and support more continuous assurance. Human auditors remain responsible for evaluating evidence and conclusions.";
  }
  if (normalized.includes("blockchain")) {
    return "Blockchain can improve traceability and shared verification where multiple parties need a common transaction record, although accounting treatment and governance still matter.";
  }
  if (normalized.includes("cloud")) {
    return "Cloud accounting connects financial data, users and workflows through shared systems. Its accounting impact includes easier collaboration, faster access to records and more connected reporting processes.";
  }
  return "The Ledger can frame that topic through four accounting lenses: the workflow being changed, the technology involved, the control implications and the effect on accountants, auditors or reporting.";
}

export default function LedgerAIPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [answer, setAnswer] = useState("");
  const [mode, setMode] = useState<"ready" | "demo" | "live" | "error">("ready");
  const [loading, setLoading] = useState(false);

  const fallbackAnswer = useMemo(() => demoAnswerFor(submitted), [submitted]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = query.trim();
    if (!nextQuery || loading) return;

    setSubmitted(nextQuery);
    setLoading(true);
    setMode("ready");
    setAnswer("");

    try {
      const response = await fetch("/api/ledger-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: nextQuery }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Request failed");
      setAnswer(data.answer || fallbackAnswer);
      setMode(data.mode === "live" ? "live" : "demo");
    } catch {
      setAnswer("Ledger AI is unavailable right now. The demo explanation remains below.");
      setMode("error");
    } finally {
      setLoading(false);
    }
  }

  function usePrompt(prompt: string) {
    setQuery(prompt);
    setSubmitted(prompt);
    setAnswer("");
    setMode("ready");
  }

  const visibleAnswer = loading ? "Analyzing through the accounting lens…" : answer || (submitted ? fallbackAnswer : "Ready when you are.");

  return (
    <main className="ai-page">
      <header className="header">
        <Link href="/" className="logo" aria-label="The Ledger home">THE LEDGER</Link>
        <nav aria-label="Primary navigation">
          <Link href="/latest">LATEST</Link>
          <Link href="/accounting">ACCOUNTING</Link>
          <Link href="/ai">AI</Link>
          <Link href="/audit">AUDIT</Link>
          <Link href="/fintech">FINTECH</Link>
          <Link href="/data">DATA</Link>
        </nav>
        <div className="issue">THE LEDGER AI / ISSUE 01</div>
      </header>

      <section className="ai-hero-page">
        <div className="eyebrow">THE LEDGER AI / 01</div>
        <h1>Ask the<br /><span>ledger.</span></h1>
        <p>
          An accounting-technology guide that turns complex questions into a practical view of workflow, controls, people and financial reporting.
        </p>
      </section>

      <section className="ai-console" aria-label="Ledger AI console">
        <div className="ai-console-top">
          <span>LEDGER AI</span>
          <span>{mode === "live" ? "LIVE MODEL" : mode === "error" ? "SERVICE FALLBACK" : "ACCOUNTING INTELLIGENCE"}</span>
        </div>

        <form onSubmit={submit} className="ai-input-row">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ask an accounting technology question..."
            aria-label="Ask The Ledger AI"
            disabled={loading}
          />
          <button type="submit" disabled={loading || !query.trim()}>
            {loading ? "THINKING…" : "ANALYZE →"}
          </button>
        </form>

        <div className="ai-prompts">
          {prompts.map((prompt) => (
            <button key={prompt} type="button" onClick={() => usePrompt(prompt)} disabled={loading}>
              {prompt}
            </button>
          ))}
        </div>

        <article className="ai-response">
          <div className="ai-response-label">{loading ? "PROCESSING" : submitted ? (mode === "live" ? "LIVE LEDGER RESPONSE" : "LEDGER RESPONSE") : "READY"}</div>
          <h2>{submitted || "What changes behind the numbers?"}</h2>
          <p>{visibleAnswer}</p>
          {submitted && mode !== "live" && !loading ? <small className="ai-note">Demo mode — add OPENAI_API_KEY to the server environment to enable live responses.</small> : null}
        </article>
      </section>

      <section className="ai-principles section">
        <div className="eyebrow">THE ACCOUNTING LENS</div>
        <div className="ai-principles-grid">
          <div><strong>01</strong><h3>WORKFLOW</h3><p>What part of the finance process changes?</p></div>
          <div><strong>02</strong><h3>CONTROL</h3><p>What evidence, approvals or governance remain important?</p></div>
          <div><strong>03</strong><h3>PEOPLE</h3><p>What becomes automated, assisted or judgment-led?</p></div>
          <div><strong>04</strong><h3>REPORTING</h3><p>How does the change affect financial information and assurance?</p></div>
        </div>
      </section>

      <footer>
        <Link href="/" className="logo">THE LEDGER</Link>
        <p>Where Accounting Evolves.<br />A digital publication on the future of finance.</p>
        <div className="footer-bottom"><span>© 2026 THE LEDGER</span><span>AI · ACCOUNTING · AUDIT · FINTECH</span></div>
      </footer>
    </main>
  );
}
