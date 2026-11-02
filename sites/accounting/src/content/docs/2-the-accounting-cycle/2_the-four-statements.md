---
date: 2026-10-31T00:00:00+00:00
title: "The Four Statements, Interlocking"
tags:
  - Accounting
description: "The four financial statements as one machine: net income flows into equity, equity into the balance sheet, and cash reconciles the accrual view to the bank. Every link traced to the Ledgerline worked example."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "accounting", "url": "https://accounting.wyattau.com"}, {"name": "2 The Accounting Cycle", "url": "https://accounting.wyattau.com/2-the-accounting-cycle"}, {"name": "The Four Statements, Interlocking", "url": "https://accounting.wyattau.com/2-the-accounting-cycle/2_the-four-statements"}]}
</script>

The four statements are not four reports; they are one system photographed from four angles. This
page shows the linkage — which accounts feed which statement, where each number travels next, and
why the whole assembly cannot disagree with itself. Every figure is Ledgerline Consulting's March
(from [the complete cycle, worked end to end](/2-the-accounting-cycle/1_full-cycle-worked/)), so
each claim here can be checked against a traced line there.

### The sorting rule

The adjusted trial balance holds every account once. The statements are produced by a single
sorting decision:

<div class="table-wrap">

| Account kind | Examples (Ledgerline) | Feeds |
|---|---|---|
| **Temporary** — reset to zero at period end | Service Revenue 12,000; Salaries 3,500; Supplies 400; Depreciation 100 | Income statement |
| **Permanent** — carry forward | Cash 21,700; Receivable 4,000; Supplies 200; Prepaid Rent 400; Equipment 2,300; Payable 600; Capital | Balance sheet |
| **The cash account, re-cut** | Cash 21,700 | Cash flow statement |
| **The bridge** | Net income 8,000 | Equity statement, then balance sheet |

</div>

The income statement consumes the temporary accounts; the balance sheet displays the permanent
ones; the equity statement carries net income into capital; the cash flow statement re-cuts one
permanent account (cash) by activity. Nothing is counted twice, and nothing is left out — the
sorted partitions reassemble to the adjusted trial balance.

### Thread 1 — net income becomes equity

The income statement closes: revenue 12,000 minus expenses 4,000 (salaries 3,500 + supplies 400 +
depreciation 100) leaves **net income 8,000**. That number is not filed away — it is the third
line of the statement of changes in equity:

<div class="table-wrap">

| | |
|---|---|
| Capital, 1 March | 0 |
| Owner investment | 20,000 |
| Net income for March | 8,000 |
| **Capital, 31 March** | **28,000** |

</div>

Closing entries (page 1, §5) are the mechanical version of the same link: revenue and expense
balances are folded into capital, so the income statement's bottom line is *inside* the equity
statement's ending figure.

### Thread 2 — equity lands on the balance sheet

Capital 28,000 is then a balance-sheet line, and the balance sheet's two sides must agree:

<div class="table-wrap">

| Assets | | Liabilities & Equity | |
|---|---|---|---|
| Cash | 21,700 | Accounts Payable | 600 |
| Accounts Receivable | 4,000 | Owner's Capital | 28,000 |
| Supplies | 200 | | |
| Prepaid Rent | 400 | | |
| Equipment, net | 2,300 | | |
| **28,600** | | **28,600** | |

</div>

They agree at **28,600** — and this is a theorem, not luck. The balance sheet is a re-arrangement
of the same adjusted balances that preserved the accounting equation at every entry (Foundations,
Theorem 2.1). If the sides disagreed, some posting broke the invariant, and the trial balance
would have caught it two pages earlier. The statements inherit their correctness from the
invariant; they cannot generate an error of their own.

### Thread 3 — cash reconciles the two views of profit

The income statement says March earned **8,000**. The cash account says March's operating
activity collected **4,100** more than it paid (8,000 collected − 3,500 salaries − 400 April
rent). Both are correct, because accrual profit and cash movement measure different things. The
cash flow statement is the reconciliation:

<div class="table-wrap">

| Net income | 8,000 |
|---|---|
| − Accounts receivable up (earned, not collected) | (4,000) |
| + Supplies expense incurred unpaid (bought on account) | 400 |
| + Depreciation (expense with no cash) | 100 |
| − Prepaid rent (cash paid, no expense yet) | (400) |
| **Operating cash flow** | **4,100** |

</div>

Each bridge line is a working-capital or non-cash movement — never a cash collection or payment.
Then investing (−2,400 laptop) and financing (+20,000 investment) complete the statement, and its
bottom line ties back to the balance sheet: net change +21,700, from 0 to **cash 21,700** — the
balance sheet's first asset line. The cash thread is a closed loop.

### Thread 4 — flows versus position

Three statements cover a *period* (for March); one covers a *moment* (at 31 March):

<div class="table-wrap">

| Statement | Question | Shape |
|---|---|---|
| Income statement | How much profit was earned in March? | Flow (period) |
| Equity statement | How did owners' stake move during March? | Flow (period) |
| Cash flow statement | Where did the cash come from and go? | Flow (period) |
| Balance sheet | What exists at 31 March? | Position (moment) |

</div>

The balance sheet's cash (21,700) is the cash flow statement's *ending* figure; its capital
(28,000) is the equity statement's ending figure. The period statements explain how the position
statement moved from its opening state to its closing one.

### The articulation, in one pass

$$
\text{Income statement} \to \text{net income} \to \text{equity} \to \text{balance sheet}, \qquad \text{cash account} \to \text{cash flow} \to \text{balance sheet cash}
$$

Read the assembly left to right: sort the trial balance; close the temporary accounts into net
income; carry net income through equity onto the balance sheet; re-cut cash by activity and tie
it to the balance sheet's cash line. Two closed loops, one invariant, zero degrees of freedom.

### Misconceptions this interlocking kills

- **"Net income is the cash we made."** Thread 3: profit 8,000, operating cash 4,100 — the four
  bridge lines are exactly the difference, each an accrual event without (or ahead of) cash.
- **"Depreciation is a cash cost."** It appears on the income statement (100) and is *added
  back* on the cash flow statement: the cash left at purchase (entry 2), the expense is
  recognised over 24 months.
- **"The balance sheet balances because accountants force it to."** It balances because it is a
  re-partition of balances that already satisfied the equation; the equality is inherited, not
  enforced.
- **"Each statement is prepared separately."** They are one assembly pass over one adjusted
  trial balance — prepare them in the order net income → equity → balance sheet (cash flow last,
  from the finished balance sheet's cash movement) and articulation is automatic.

### Self-test

1. Why does net income appear on *two* statements, and which line links them? (Thread 1 — it is
   the income statement's bottom line and the equity statement's third line; closing entries are
   the mechanism.)
2. The balance sheet sides agree at 28,600. Which page-1 fact makes that a theorem rather than a
   check? (Thread 2 — every entry preserved the equation, adjustments are entries, so the sorted
   balances preserve it too.)
3. Name the four bridge lines between net income 8,000 and operating cash 4,100, and classify
   each as working-capital or non-cash. (Thread 3 — receivable +4,000 working-capital;
   supplies payable +400 working-capital; depreciation +100 non-cash; prepaid −400
   working-capital.)
4. Which statement would still be complete if the business had no liabilities at all, and why
   does that not make the other three redundant? (Position vs flows — the balance sheet would
   shrink to assets = equity, but the flows explain the *change*, which the position alone
   cannot.)

## Cross-References

- [A Complete Accounting Cycle, Worked End to End](/2-the-accounting-cycle/1_full-cycle-worked/) —
  the source of every number used here
- [The Accounting Equation and Double Entry](/1-foundations/1_the-accounting-equation/) — the
  invariant the balance sheet inherits
- [Foundations](/1-foundations/) — the track opener
