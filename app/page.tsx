import Link from "next/link";

const articles = [
  {
    category: "AI & ACCOUNTING",
    title: "The accountant is becoming a technologist",
    text: "Artificial intelligence is moving beyond automation and into the core of financial decision-making.",
    date: "SEPT 2026",
    read: "4 MIN READ",
    slug: "accountant-is-becoming-a-technologist",
  },
  {
    category: "DIGITAL AUDIT",
    title: "The audit is becoming continuous",
    text: "Real-time data, automated testing and anomaly detection are reshaping how assurance works.",
    date: "SEPT 2026",
    read: "5 MIN READ",
    slug: "audit-is-becoming-continuous",
  },
  {
    category: "FINTECH",
    title: "The infrastructure behind modern finance",
    text: "Cloud platforms and connected financial systems are changing how organizations record and report.",
    date: "SEPT 2026",
    read: "6 MIN READ",
    slug: "infrastructure-behind-modern-finance",
  },
];

const tickerItems = [
  ["ACCOUNTING", "AI is moving deeper into financial workflows"],
  ["AUDIT", "Continuous assurance is changing the audit cycle"],
  ["FINTECH", "Connected infrastructure is reshaping reporting"],
  ["CLOUD", "Finance teams are moving toward always-on systems"],
  ["PROFESSION", "The accountant of tomorrow is becoming more technical"],
];

function TickerSet() {
  return (
    <div className="ticker-set" aria-hidden="true">
      {tickerItems.map(([category, story]) => (
        <span className="ticker-item" key={`${category}-${story}`}>
          <span className="ticker-category">{category}</span>
          <span className="ticker-story">{story}</span>
          <span className="ticker-separator">/</span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
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
        <div className="issue">ISSUE 01 / SEPTEMBER 2026</div>
      </header>

      <div className="ticker" aria-label="The Ledger editorial feed">
        <span className="live"><span className="live-dot"></span>LIVE</span>
        <div className="ticker-track-wrap">
          <div className="ticker-track"><TickerSet /><TickerSet /></div>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero-top">
          <div className="hero-label">THE FUTURE OF FINANCE</div>
          <div className="hero-index">VOL. 01 / 2026</div>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1>Where<br />Accounting<br /><span>evolves.</span></h1>
            <p className="hero-description">The technologies, ideas and people reshaping modern finance.</p>
            <div className="hero-meta">
              <Link href="/accounting">ACCOUNTING</Link>
              <Link href="/ai">AI</Link>
              <Link href="/audit">AUDIT</Link>
              <Link href="/fintech">FINTECH</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract financial systems visualization">
            <div className="visual-grid"></div>
            <div className="data-line line-one"></div>
            <div className="data-line line-two"></div>
            <div className="data-line line-three"></div>
            <div className="data-node node-one"></div>
            <div className="data-node node-two"></div>
            <div className="data-node node-three"></div>
            <div className="data-node node-four"></div>
            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="visual-center"><span>LEDGER</span><strong>01</strong></div>
            <div className="visual-caption"><span>FINANCIAL SYSTEMS</span><span>EST. 2026</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>THE DIGITAL ACCOUNTING ERA</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="section ledger-intro" id="accounting">
        <div className="ledger-intro-grid">
          <div><div className="eyebrow">01 / ABOUT THE LEDGER</div><h2>The new language of finance.</h2></div>
          <div className="ledger-intro-copy">
            <p className="lead">The Ledger is a premium digital publication exploring how technology is rewriting accounting, auditing, financial reporting and the profession itself.</p>
            <p className="supporting">From artificial intelligence and robotic process automation to cloud accounting, connected data and digital audit, we examine what is changing, why it matters and what comes next.</p>
            <div className="editorial-rule"></div>
          </div>
        </div>
      </section>

      <section className="section latest" id="latest">
        <div className="section-heading">
          <div><div className="eyebrow">02 / EDITORIAL</div><h2>The Latest</h2></div>
          <Link href="/latest" className="view-all">VIEW ALL →</Link>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <Link href={`/story/${article.slug}`} className="article-image"><span>0{index + 1}</span></Link>
              <div className="article-category">{article.category}</div>
              <h3><Link href={`/story/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.text}</p>
              <div className="article-meta"><span>{article.date}</span><span>{article.read}</span></div>
              <Link className="read" href={`/story/${article.slug}`}>READ STORY →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers section" id="data">
        <div className="eyebrow">03 / DATA</div>
        <h2>Accounting<br /><span>in numbers.</span></h2>
        <div className="number-grid">
          <div><strong>AI</strong><p>THE NEW ACCOUNTING LAYER</p></div>
          <div><strong>RPA</strong><p>ROUTINE WORK, AUTOMATED</p></div>
          <div><strong>24/7</strong><p>THE RISE OF CONTINUOUS AUDIT</p></div>
          <div><strong>∞</strong><p>DATA WITHOUT BORDERS</p></div>
        </div>
      </section>

      <section className="section technology" id="fintech">
        <div className="eyebrow">04 / TECHNOLOGY INDEX</div>
        <h2>The machines<br />behind <span>modern finance.</span></h2>
        <div className="tech-list">
          <div><span>01</span><strong>ARTIFICIAL INTELLIGENCE</strong><p>Prediction · Analysis · Decision support</p></div>
          <div><span>02</span><strong>ROBOTIC PROCESS AUTOMATION</strong><p>Reconciliation · Data entry · Workflow</p></div>
          <div><span>03</span><strong>CLOUD ACCOUNTING</strong><p>Connectivity · Collaboration · Scale</p></div>
          <div><span>04</span><strong>BLOCKCHAIN</strong><p>Trust · Traceability · Digital records</p></div>
        </div>
      </section>

      <section className="money section" id="audit">
        <div className="eyebrow">05 / INTERACTIVE</div>
        <h2>Follow<br /><span>the money.</span></h2>
        <p>A transaction enters an organization. Technology follows it all the way to the financial statements.</p>
        <div className="flow"><div>INVOICE</div><span>→</span><div>AI EXTRACTION</div><span>→</span><div>ACCOUNTING SYSTEM</div><span>→</span><div>JOURNAL ENTRY</div><span>→</span><div>REPORT</div></div>
      </section>

      <section className="ai section" id="ai">
        <div className="ai-box">
          <div className="eyebrow">06 / THE LEDGER AI</div>
          <h2>Ask the<br /><span>ledger.</span></h2>
          <p>An intelligent guide to accounting technology, auditing, fintech and the future of finance.</p>
          <Link href="/ai" className="ledger-button">ASK THE LEDGER AI →</Link>
        </div>
      </section>

      <footer>
        <Link href="/" className="logo">THE LEDGER</Link>
        <p>Where Accounting Evolves.<br />A digital publication on the future of finance.</p>
        <div className="footer-bottom"><span>© 2026 THE LEDGER</span><span>ACCOUNTING · TECHNOLOGY · FINANCE</span></div>
      </footer>
    </main>
  );
}
