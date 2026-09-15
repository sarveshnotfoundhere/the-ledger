const articles = [
  {
    category: "AI & ACCOUNTING",
    title: "The accountant is becoming a technologist",
    text: "Artificial intelligence is moving beyond automation and into the core of financial decision-making.",
  },
  {
    category: "DIGITAL AUDIT",
    title: "The audit is becoming continuous",
    text: "Real-time data, automated testing and anomaly detection are reshaping how assurance works.",
  },
  {
    category: "FINTECH",
    title: "The infrastructure behind modern finance",
    text: "Cloud platforms and connected financial systems are changing how organizations record and report.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="logo">THE LEDGER</div>

        <nav>
          <a href="#">LATEST</a>
          <a href="#">ACCOUNTING</a>
          <a href="#">AI</a>
          <a href="#">AUDIT</a>
          <a href="#">FINTECH</a>
          <a href="#">DATA</a>
        </nav>

        <div className="issue">ISSUE 01 / SEPTEMBER 2026</div>
      </header>

      {/* LIVE TICKER */}
      <div className="ticker">
        <span className="live">
          <span className="live-dot"></span>
          LIVE
        </span>

        <div className="ticker-track">
          ACCOUNTING &nbsp;&nbsp; • &nbsp;&nbsp;
          AI IS CHANGING FINANCIAL REPORTING &nbsp;&nbsp;&nbsp; /
          &nbsp;&nbsp;&nbsp;
          DIGITAL AUDIT &nbsp;&nbsp; • &nbsp;&nbsp;
          FINTECH INFRASTRUCTURE EXPANDS &nbsp;&nbsp;&nbsp; /
          &nbsp;&nbsp;&nbsp;
          CLOUD ACCOUNTING &nbsp;&nbsp; • &nbsp;&nbsp;
          THE ACCOUNTANT OF TOMORROW
        </div>
      </div>

      {/* HERO */}
<section className="hero">
  <div className="hero-top">
    <div className="hero-label">THE FUTURE OF FINANCE</div>
    <div className="hero-index">VOL. 01 / 2026</div>
  </div>

  <div className="hero-main">
    <div className="hero-copy">
      <h1>
        Where
        <br />
        Accounting
        <br />
        <span>evolves.</span>
      </h1>

      <p className="hero-description">
        The technologies, ideas and people reshaping modern finance.
      </p>

      <div className="hero-meta">
        <span>ACCOUNTING</span>
        <span>AI</span>
        <span>AUDIT</span>
        <span>FINTECH</span>
      </div>
    </div>

    <div className="hero-visual">
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

      <div className="visual-center">
        <span>LEDGER</span>
        <strong>01</strong>
      </div>

      <div className="visual-caption">
        <span>FINANCIAL SYSTEMS</span>
        <span>EST. 2026</span>
      </div>
    </div>
  </div>

  <div className="hero-bottom">
    <span>THE DIGITAL ACCOUNTING ERA</span>
    <span>SCROLL TO EXPLORE ↓</span>
  </div>
</section>

      {/* LATEST */}
      <section className="section latest">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / EDITORIAL</div>
            <h2>The Latest</h2>
          </div>

          <a href="#" className="view-all">
            VIEW ALL →
          </a>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div className="article-image">
                <span>0{index + 1}</span>
              </div>

              <div className="article-category">{article.category}</div>

              <h3>{article.title}</h3>

              <p>{article.text}</p>

              <div className="read">
                READ STORY →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers section">
        <div className="eyebrow">03 / DATA</div>

        <h2>
          Accounting
          <br />
          <span>in numbers.</span>
        </h2>

        <div className="number-grid">
          <div>
            <strong>AI</strong>
            <p>THE NEW ACCOUNTING LAYER</p>
          </div>

          <div>
            <strong>RPA</strong>
            <p>ROUTINE WORK, AUTOMATED</p>
          </div>

          <div>
            <strong>24/7</strong>
            <p>THE RISE OF CONTINUOUS AUDIT</p>
          </div>

          <div>
            <strong>∞</strong>
            <p>DATA WITHOUT BORDERS</p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section technology">
        <div className="eyebrow">04 / TECHNOLOGY INDEX</div>

        <h2>
          The machines
          <br />
          behind <span>modern finance.</span>
        </h2>

        <div className="tech-list">
          <div>
            <span>01</span>
            <strong>ARTIFICIAL INTELLIGENCE</strong>
            <p>Prediction · Analysis · Decision support</p>
          </div>

          <div>
            <span>02</span>
            <strong>ROBOTIC PROCESS AUTOMATION</strong>
            <p>Reconciliation · Data entry · Workflow</p>
          </div>

          <div>
            <span>03</span>
            <strong>CLOUD ACCOUNTING</strong>
            <p>Connectivity · Collaboration · Scale</p>
          </div>

          <div>
            <span>04</span>
            <strong>BLOCKCHAIN</strong>
            <p>Trust · Traceability · Digital records</p>
          </div>
        </div>
      </section>

      {/* FOLLOW THE MONEY */}
      <section className="money section">
        <div className="eyebrow">05 / INTERACTIVE</div>

        <h2>
          Follow
          <br />
          <span>the money.</span>
        </h2>

        <p>
          A transaction enters an organization. Technology follows it all the
          way to the financial statements.
        </p>

        <div className="flow">
          <div>INVOICE</div>
          <span>→</span>
          <div>AI EXTRACTION</div>
          <span>→</span>
          <div>ACCOUNTING SYSTEM</div>
          <span>→</span>
          <div>JOURNAL ENTRY</div>
          <span>→</span>
          <div>REPORT</div>
        </div>
      </section>

      {/* AI */}
      <section className="ai section">
        <div className="ai-box">
          <div className="eyebrow">06 / THE LEDGER AI</div>

          <h2>
            Ask the
            <br />
            <span>ledger.</span>
          </h2>

          <p>
            An intelligent guide to accounting technology, auditing, fintech
            and the future of finance.
          </p>

          <button>ASK THE LEDGER AI →</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">THE LEDGER</div>

        <p>
          Where Accounting Evolves.
          <br />
          A digital publication on the future of finance.
        </p>

        <div className="footer-bottom">
          <span>© 2026 THE LEDGER</span>
          <span>ACCOUNTING · TECHNOLOGY · FINANCE</span>
        </div>
      </footer>
    </main>
  );
}