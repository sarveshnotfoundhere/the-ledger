"use client";

import { useState } from "react";

const steps = [
  {
    label: "INVOICE",
    tag: "SOURCE DOCUMENT",
    title: "A transaction begins with evidence.",
    body: "A supplier invoice enters the organization. Before any journal is posted, the source document carries the commercial evidence behind the transaction.",
    accounting: "Accounts payable / expense or inventory",
    control: "Document number · vendor · date · amount · approval",
    output: "Structured transaction evidence",
  },
  {
    label: "AI EXTRACTION",
    tag: "INTELLIGENT CAPTURE",
    title: "AI reads the document before the accountant does.",
    body: "OCR and machine-learning models can extract fields from invoices, classify line items and surface exceptions for human review.",
    accounting: "Suggested account · tax code · cost centre",
    control: "Confidence score · duplicate check · exception queue",
    output: "Machine-readable transaction",
  },
  {
    label: "ACCOUNTING SYSTEM",
    tag: "SYSTEM OF RECORD",
    title: "The transaction enters the ledger architecture.",
    body: "The structured data flows into the accounting platform where business rules, vendor records, tax logic and approval workflows determine what can move forward.",
    accounting: "Sub-ledger posting rules",
    control: "Role-based access · workflow · validation rules",
    output: "Approved accounting record",
  },
  {
    label: "JOURNAL ENTRY",
    tag: "DOUBLE ENTRY",
    title: "Technology still lands on accounting logic.",
    body: "Automation does not remove double-entry accounting. It accelerates how the correct debit and credit are prepared, checked and posted.",
    accounting: "Debit expense / inventory · Credit payables",
    control: "Balanced entry · period check · approval",
    output: "Posted journal",
  },
  {
    label: "REPORT",
    tag: "FINANCIAL OUTPUT",
    title: "One transaction becomes information for decisions.",
    body: "The journal ultimately feeds the financial reporting layer, management analysis and audit trail that users rely on to understand the organization.",
    accounting: "P&L · balance sheet · cash-flow impact",
    control: "Reconciliation · audit trail · reporting controls",
    output: "Decision-ready information",
  },
];

export default function FollowTheMoney() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="ftm-shell">
      <div className="ftm-steps" role="tablist" aria-label="Transaction journey">
        {steps.map((item, index) => (
          <button
            key={item.label}
            className={`ftm-step ${active === index ? "is-active" : ""}`}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
          >
            <span className="ftm-index">0{index + 1}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="ftm-arrowline" aria-hidden="true">
        <span></span><b>→</b><span></span>
      </div>

      <article className="ftm-detail">
        <div className="ftm-detail-top">
          <div>
            <span className="ftm-tag">{step.tag}</span>
            <h3>{step.title}</h3>
          </div>
          <div className="ftm-counter">STEP {String(active + 1).padStart(2, "0")} / 05</div>
        </div>
        <p>{step.body}</p>

        <div className="ftm-metrics">
          <div>
            <span>ACCOUNTING LAYER</span>
            <strong>{step.accounting}</strong>
          </div>
          <div>
            <span>CONTROL LAYER</span>
            <strong>{step.control}</strong>
          </div>
          <div>
            <span>OUTPUT</span>
            <strong>{step.output}</strong>
          </div>
        </div>

        <div className="ftm-nav">
          <button disabled={active === 0} onClick={() => setActive((value) => value - 1)}>← PREVIOUS</button>
          <button disabled={active === steps.length - 1} onClick={() => setActive((value) => value + 1)}>NEXT →</button>
        </div>
      </article>
    </div>
  );
}
