import Link from "next/link";

const cases = [
  {
    no: "01",
    tag: "AI · FINANCIAL SERVICES",
    title: "AI enters the finance desk",
    company: "BLACKROCK",
    summary:
      "How generative AI is moving from experimentation toward research, reporting and decision support inside a global investment platform.",
    tech: "Generative AI",
    impact: "Faster research · assisted analysis · controlled workflows",
    lesson: "The accounting lesson: AI creates value when it is embedded inside governed financial processes, not treated as a standalone chatbot.",
  },
  {
    no: "02",
    tag: "CLOUD · ACCOUNTING",
    title: "The ledger moves to the cloud",
    company: "INTUIT",
    summary:
      "A look at how cloud-native accounting platforms turn bookkeeping into a connected workflow across transactions, reporting and business insight.",
    tech: "Cloud accounting",
    impact: "Automation · collaboration · continuous data access",
    lesson: "The accounting lesson: the modern ledger is becoming a connected data layer rather than a static month-end record.",
  },
  {
    no: "03",
    tag: "AUDIT · DATA",
    title: "When audit becomes a data problem",
    company: "DELOITTE",
    summary:
      "How analytics, automation and AI are changing audit procedures by shifting attention from samples and schedules toward larger, faster data-driven testing.",
    tech: "Audit analytics",
    impact: "Exception detection · wider testing · continuous insight",
    lesson: "The accounting lesson: auditors increasingly need data fluency alongside traditional assurance judgment.",
  },
];

export default function CaseFilesPage() {
  return (
    <main className="case-page">
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
        <div className="issue">CASE FILES / SEPTEMBER 2026</div>
      </header>

      <section className="case-hero">
        <div className="eyebrow">07 / CASE FILES</div>
        <h1>Technology<br /><span>in the wild.</span></h1>
        <p>
          Real organizations. Real accounting problems. A closer look at how
          modern technologies change the work behind the numbers.
        </p>
      </section>

      <section className="case-grid" aria-label="Accounting technology case studies">
        {cases.map((item) => (
          <article className="case-card" key={item.no}>
            <div className="case-card-top"><span>{item.no}</span><span>{item.tag}</span></div>
            <div className="case-visual"><span>{item.company}</span><strong>{item.tech}</strong></div>
            <div className="case-company">{item.company}</div>
            <h2>{item.title}</h2>
            <p className="case-summary">{item.summary}</p>
            <div className="case-detail"><span>TECHNOLOGY</span><strong>{item.tech}</strong></div>
            <div className="case-detail"><span>ACCOUNTING IMPACT</span><strong>{item.impact}</strong></div>
            <blockquote>{item.lesson}</blockquote>
          </article>
        ))}
      </section>

      <section className="case-method">
        <div className="eyebrow">HOW TO READ A CASE FILE</div>
        <div className="case-method-grid">
          <div><strong>01</strong><h3>Problem</h3><p>What financial or assurance friction existed?</p></div>
          <div><strong>02</strong><h3>Technology</h3><p>Which digital capability changes the workflow?</p></div>
          <div><strong>03</strong><h3>Control</h3><p>Where do governance, evidence and human judgment remain critical?</p></div>
          <div><strong>04</strong><h3>Outcome</h3><p>What changes for accountants, auditors and reporting?</p></div>
        </div>
      </section>

      <footer>
        <Link href="/" className="logo">THE LEDGER</Link>
        <p>Where Accounting Evolves.<br />A digital publication on the future of finance.</p>
        <div className="footer-bottom"><span>© 2026 THE LEDGER</span><span>CASE FILES · ACCOUNTING · TECHNOLOGY</span></div>
      </footer>
    </main>
  );
}
