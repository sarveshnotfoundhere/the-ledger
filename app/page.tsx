import Link from "next/link";
import MoneyCursor from "@/components/money-cursor";

const topics = [
  { no: "01", title: "Accounting Evolves", href: "/evolution", desc: "Traditional → Digital → Intelligent accounting." },
  { no: "02", title: "AI + Generative AI", href: "/ai", desc: "From document extraction to financial insight." },
  { no: "03", title: "RPA + Automation", href: "/rpa", desc: "Software bots take on repetitive accounting work." },
  { no: "04", title: "Blockchain + Smart Contracts", href: "/blockchain", desc: "Shared records, traceability and programmable rules." },
  { no: "05", title: "Cloud + Big Data", href: "/cloud", desc: "Connected ledgers, analytics and forecasting." },
  { no: "06", title: "Future Accountant", href: "/future", desc: "From number recorder to strategic analyst." },
  { no: "07", title: "Research Case Study", href: "/case-files", desc: "A real academic case: ML + RPA accounting automation at Dell." },
];

export default function Home() {
  return <main className="landing"><MoneyCursor/><header className="landing-nav"><Link href="/" className="landing-logo">THE LEDGER <span>/ TOPIC 11</span></Link><div>FINANCIAL ACCOUNTING · CIA III · 2026</div><Link href="/case-files">CASE STUDY →</Link></header><section className="landing-hero"><div className="landing-eyebrow">DIGITAL ACCOUNTING CONSULTANCY · TOPIC 11</div><h1>Recent<br/><em>Innovations</em><br/>in Accounting<br/>Technologies.</h1><p>How accounting is moving from recording numbers to creating intelligence.</p><div className="landing-bottom"><span>6 MEMBERS · 1 DIGITAL ACCOUNTING ECOSYSTEM</span><span>EXPLORE THE TOPICS ↓</span></div></section><section className="landing-topics"><div className="landing-section-head"><span>THE PRESENTATION</span><h2>Choose a chapter.<br/><em>Follow the ledger.</em></h2></div><div className="topic-menu">{topics.map(t=><Link className="topic-menu-item" href={t.href} key={t.no}><span>{t.no}</span><div><h3>{t.title}</h3><p>{t.desc}</p></div><b>↗</b></Link>)}</div></section><section className="landing-thesis"><span>THE CENTRAL IDEA</span><h2>Technology changes the workflow.<br/><em>Accounting expertise creates the meaning.</em></h2></section><footer className="landing-footer"><span>THE LEDGER / RECENT INNOVATIONS IN ACCOUNTING TECHNOLOGIES</span><span>TOPIC 11 · DIGITAL ACCOUNTING · 2026</span></footer></main>;
}
