export type Story = {
  category: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  slug: string;
};

export const stories: Story[] = [
  {
    category: "AI & ACCOUNTING",
    title: "The accountant is becoming a technologist",
    dek: "Artificial intelligence is moving beyond automation and into the core of financial decision-making.",
    date: "SEPT 2026",
    read: "4 MIN READ",
    slug: "accountant-is-becoming-a-technologist",
  },
  {
    category: "DIGITAL AUDIT",
    title: "The audit is becoming continuous",
    dek: "Real-time data, automated testing and anomaly detection are reshaping how assurance works.",
    date: "SEPT 2026",
    read: "5 MIN READ",
    slug: "audit-is-becoming-continuous",
  },
  {
    category: "FINTECH",
    title: "The infrastructure behind modern finance",
    dek: "Cloud platforms and connected financial systems are changing how organizations record and report.",
    date: "SEPT 2026",
    read: "6 MIN READ",
    slug: "infrastructure-behind-modern-finance",
  },
  {
    category: "CLOUD",
    title: "Why finance is moving to always-on systems",
    dek: "Connected ledgers are making collaboration, reporting and control less dependent on the month-end clock.",
    date: "SEPT 2026",
    read: "5 MIN READ",
    slug: "finance-moves-to-always-on-systems",
  },
  {
    category: "PROFESSION",
    title: "What the next generation of accountants will actually do",
    dek: "The role is shifting from recording transactions toward interpreting data, systems and risk.",
    date: "SEPT 2026",
    read: "7 MIN READ",
    slug: "next-generation-accountants",
  },
  {
    category: "DATA",
    title: "From financial statements to financial signals",
    dek: "Modern reporting increasingly connects accounting data with operational information in near real time.",
    date: "SEPT 2026",
    read: "6 MIN READ",
    slug: "financial-statements-to-financial-signals",
  },
];

export const sectionCopy: Record<string, { eyebrow: string; title: string; intro: string }> = {
  latest: {
    eyebrow: "THE LEDGER / LATEST",
    title: "What is changing now.",
    intro: "The latest thinking on accounting technology, audit, artificial intelligence, fintech and the profession.",
  },
  accounting: {
    eyebrow: "THE LEDGER / ACCOUNTING",
    title: "The ledger is becoming intelligent.",
    intro: "Automation, connected systems and machine intelligence are changing how transactions become financial information.",
  },
  ai: {
    eyebrow: "THE LEDGER / AI",
    title: "When intelligence enters the ledger.",
    intro: "From document extraction to anomaly detection and decision support, AI is becoming part of the accounting stack.",
  },
  audit: {
    eyebrow: "THE LEDGER / AUDIT",
    title: "Assurance without the waiting.",
    intro: "Continuous data, automated testing and analytics are pushing audit toward a more connected operating model.",
  },
  fintech: {
    eyebrow: "THE LEDGER / FINTECH",
    title: "The infrastructure of modern finance.",
    intro: "Cloud platforms, APIs, payments and embedded financial services are changing the architecture around accounting.",
  },
  data: {
    eyebrow: "THE LEDGER / DATA",
    title: "Numbers become signals.",
    intro: "Financial data is no longer only a record of what happened. Increasingly, it becomes an input into what happens next.",
  },
  opinion: {
    eyebrow: "THE LEDGER / OPINION",
    title: "The profession, reconsidered.",
    intro: "Ideas about judgment, technology, control and the changing identity of the accountant.",
  },
};
