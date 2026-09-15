import Link from "next/link";

const tasks=["Bank reconciliation","Invoice processing","Payroll checks","Routine reports"];
const steps=[["01","INPUT","Statement / invoice / payroll file"],["02","READ","Bot extracts structured fields"],["03","RULE","Configured logic matches records"],["04","EXCEPTION","Unusual items go to a person"],["05","POST","Clean results flow onward"]];

export default function RPAPage(){return <main className="topic-page"><header className="topic-nav"><Link href="/">THE LEDGER <span>/ 11</span></Link><div>03 / RPA + AUTOMATION</div></header>
<section className="topic-hero"><span>03 · RPA</span><div><h1>Make the<br/><em>repeatable</em><br/><span>automatic.</span></h1><p>Robotic Process Automation uses software bots to follow repeatable rules across digital systems. Accounting is a strong fit because many workflows are structured, high-volume and rules-driven.</p></div><div className="hero-side-note">INPUT → RULES → EXCEPTION → OUTPUT</div></section>
<section className="topic-section"><div className="section-label">THE BOT LOOP</div><div className="rpa-process">{steps.map(([n,t,d])=><div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></section>
<section className="topic-section"><div className="section-label">WHERE IT FITS</div><div className="big-grid">{tasks.map((x,i)=><div key={x}><strong>0{i+1}</strong><h3>{x}</h3><p>Repetitive digital work where consistent rules can reduce manual handling and free time for review.</p></div>)}</div></section>
<section className="topic-callout"><span>THE RULE</span><h2>Automate the <em>repeatable.</em> Escalate the unusual.</h2></section>
<section className="topic-section"><div className="section-label">ACCOUNTING IMPACT</div><div className="topic-columns"><div><h2>Less screen work. More exception work.</h2><p>When bots handle stable routines, accountants can spend more time investigating exceptions, improving controls, reviewing reconciliations and understanding why a process breaks.</p></div><div><h3>The bot still needs governance</h3><p>Credentials, access, logging, process changes, error handling and exception rules must be controlled. Automation without ownership simply makes errors faster.</p></div></div></section>
<footer className="topic-footer"><Link href="/ai">02 / ← AI</Link><Link href="/blockchain">04 / BLOCKCHAIN →</Link></footer></main>}
