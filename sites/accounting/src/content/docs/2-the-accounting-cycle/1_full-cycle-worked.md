---
date: 2026-10-24T00:00:00+00:00
title: "A Complete Accounting Cycle, Worked End to End"
tags:
  - Accounting
description: "One small company, one month, every step: transactions to journal to ledger to trial balance to adjusting entries to the four statements - every number traceable, every statement balancing."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "accounting", "url": "https://accounting.wyattau.com"}, {"name": "2 The Accounting Cycle", "url": "https://accounting.wyattau.com/2-the-accounting-cycle"}, {"name": "A Complete Cycle, Worked",  "url": "https://accounting.wyattau.com/2-the-accounting-cycle/1_full-cycle-worked"}]
}
</script>

One company — **Ledgerline Consulting**, a two-person consultancy that opened on 1 March — one
month of events, and the entire cycle: journalise, post, adjust, check, report, close. Every
number below traces to a source line on this page; every statement balances, and the pages show
the balance at each step.

### 1. March's Transactions

<div class="table-wrap">

| # | Date | Event | Analysis |
|---|---|---|---|
| 1 | Mar 1 | Owners invest \$20,000 cash | Asset (cash) up; equity up |
| 2 | Mar 1 | Buy a laptop for \$2,400 cash | Asset swap: equipment up, cash down |
| 3 | Mar 5 | Buy \$600 of supplies **on account** (pay April) | Asset (supplies) up; liability (payable) up |
| 4 | Mar 12 | Complete work, collect \$8,000 cash | Asset (cash) up; revenue up |
| 5 | Mar 18 | Complete work for \$4,000, **billed**, uncollected | Asset (receivable) up; revenue up |
| 6 | Mar 25 | Pay \$3,500 cash for March salaries | Expense up; asset (cash) down |
| 7 | Mar 30 | Pay \$400 cash for **April's** rent (paid early) | Asset swap: prepaid rent up, cash down |

</div>

**Journal entries** (debit first, credit indented):

```
1)  Dr Cash..........................20,000
       Cr Owner's Capital................ 20,000
2)  Dr Equipment..................... 2,400
       Cr Cash............................ 2,400
3)  Dr Supplies........................ 600
       Cr Accounts Payable................ 600
4)  Dr Cash.......................... 8,000
       Cr Service Revenue................. 8,000
5)  Dr Accounts Receivable........... 4,000
       Cr Service Revenue................. 4,000
6)  Dr Salaries Expense.............. 3,500
       Cr Cash............................ 3,500
7)  Dr Prepaid Rent.................... 400
       Cr Cash............................ 400
```

Entries 3, 5, and 7 are the accrual-basis cases in miniature: goods and services recorded when
they happen, cash recognised only when it moves (and in entry 7, cash moves *without* the
expense — April's rent is not March's cost).

### 2. The Unadjusted Trial Balance (31 March)

Posting every entry to its ledger account and listing the balances:

<div class="table-wrap">

| Account | Debit | Credit |
|---|---|---|
| Cash | 21,700 | |
| Equipment | 2,400 | |
| Supplies | 600 | |
| Accounts Receivable | 4,000 | |
| Prepaid Rent | 400 | |
| Accounts Payable | | 600 |
| Owner's Capital | | 20,000 |
| Service Revenue | | 12,000 |
| Salaries Expense | 3,500 | |
| **Total** | **32,600** | **32,600** |

</div>

Debits equal credits — the invariant held through posting (Theorem: each entry balanced, so the
sum balances). Cash check by hand: $+20{,}000 - 2{,}400 + 8{,}000 - 3{,}500 - 400 = 21{,}700$. ✓

### 3. Adjusting Entries (31 March)

Two facts the journal missed, both from the accrual principle — recorded when incurred/earned,
not when cash moves:

**Adjustment A — supplies used.** Counting the supply closet: \$200 of supplies remain, so \$400
were used in March. Used supplies are March's expense:

```
A)  Dr Supplies Expense.............. 400
       Cr Supplies........................ 400
```

**Adjustment B — March's rent.** Entry 7 prepaid April's rent, but *one month of March occupancy
has already been consumed* — wait, no: entry 7 paid **April's** rent on 30 March. Nothing is
consumed yet; the prepaid amount correctly sits as an asset. The adjustment Ledgerline *does*
need: no rent was paid or payable **for March itself** in this scenario, so there is nothing to
adjust for rent — and that is a deliberate lesson. Adjustments are driven by the *facts of use
and obligation*, not by the presence of a suspicious-looking account. (A variant where March rent
of \$1,000 was paid on 1 March would adjust \$1,000 from Prepaid Rent to Rent Expense.)

**Adjustment B (actual) — depreciation.** The laptop (entry 2) is being consumed: \$2,400 over
24 months = \$100 per month.

```
B)  Dr Depreciation Expense............ 100
       Cr Accumulated Depreciation........ 100
```

**Adjusted trial balance:**

<div class="table-wrap">

| Account | Debit | Credit |
|---|---|---|
| Cash | 21,700 | |
| Equipment | 2,400 | |
| Accumulated Depreciation | | 100 |
| Supplies | 200 | |
| Accounts Receivable | 4,000 | |
| Prepaid Rent | 400 | |
| Accounts Payable | | 600 |
| Owner's Capital | | 20,000 |
| Service Revenue | | 12,000 |
| Salaries Expense | 3,500 | |
| Supplies Expense | 400 | |
| Depreciation Expense | 100 | |
| **Total** | **32,700** | **32,700** |

</div>

Still balanced — adjustments are entries, and entries preserve the invariant (Theorem 2.1 of the
Foundations track).

### 4. The Statements

**Income statement (March)** — revenues minus expenses, from the *temporary* accounts:

<div class="table-wrap">

| | |
|---|---|
| Service Revenue | 12,000 |
| Salaries Expense | (3,500) |
| Supplies Expense | (400) |
| Depreciation Expense | (100) |
| **Net income** | **8,000** |

</div>

**Statement of changes in equity:**

<div class="table-wrap">

| | |
|---|---|
| Capital, 1 March | 0 |
| Owner investment | 20,000 |
| Net income for March | 8,000 |
| **Capital, 31 March** | **28,000** |

</div>

**Balance sheet (31 March)** — the permanent accounts, and the invariant:

<div class="table-wrap">

| Assets | | Liabilities & Equity | |
|---|---|---|---|
| Cash | 21,700 | Accounts Payable | 600 |
| Accounts Receivable | 4,000 | Owner's Capital | 28,000 |
| Supplies | 200 | | |
| Prepaid Rent | 400 | | |
| Equipment, net of dep. | 2,300 | | |
| **Total** | **28,600** | **Total** | **28,600** |

</div>

Equipment's net figure: \$2,400 cost − \$100 accumulated depreciation. The balance sheet's two
sides agree at \$28,600 — and they must: the statements are re-arrangements of the same adjusted
balances, and the adjusted balances preserved the invariant.

**Cash flow statement (direct method, condensed):** operating +\$4,100 (collected \$8,000, paid
salaries \$3,500 and April's rent \$400); investing −\$2,400 (laptop); financing +\$20,000 (owner
investment). Net change in cash: +\$21,700, from \$0 to \$21,700. ✓

Note the gap between net income (8,000) and operating cash (4,100): \$4,000 was earned but still
billed-out (receivable), \$400 of supplies were expensed but unpaid, \$100 of depreciation is
non-cash, and \$400 of cash went to a prepaid asset — the accrual-cash reconciliation in
miniature, and the subject of its own page later in this track.

### 5. Closing Entries (31 March, or 1 April)

The temporary accounts (revenue, expenses, and the drawings/dividends account if used) must reset
to zero for April. Close revenue and expenses into capital:

```
Dr Service Revenue............ 12,000
    Cr Owner's Capital............ 12,000
Dr Owner's Capital............. 4,000
    Cr Salaries Expense............. 3,500
    Cr Supplies Expense.............. 400
    Cr Depreciation Expense.......... 100
```

After closing, every temporary account is zero and Capital carries 28,000 — the balance sheet's
figure. April begins clean.

### 6. The Traceability Discipline

Every number above resolves to a line on this page:

- Balance-sheet cash 21,700 → the running cash column in §2 → entries 1, 2, 4, 6, 7.
- Net income 8,000 → revenue 12,000 (entries 4, 5) minus expenses 4,000 (entry 6, adjustment A,
  adjustment B).
- Equipment net 2,300 → entry 2 minus adjustment B.

When a statement number cannot be traced to an entry, either the books are wrong or the working
is — and the cycle's whole point is that this can always be checked.

### 7. Self-test

1. Why is entry 7 an asset swap while entry 6 is an expense? (§1 — April's rent buys a future
   benefit (prepaid asset); March's salaries bought March's labour, consumed as incurred.)
2. What fact drives Adjustment A, and why is the *count* rather than the payment the trigger?
   (§3 — the accrual principle expenses supplies when used; the invoice (entry 3) recorded the
   purchase, the count records the consumption.)
3. Why does net income (8,000) exceed operating cash flow (4,100)? (§4 — item by item: \$4,000
   was earned but billed, not collected (+4,000); \$400 of cash bought April's rent, an expense
   for no month yet (+400); supplies consumed cost \$400 of expense with no cash this month
   (−400); depreciation is a \$100 expense with no cash (−100). Total: 4,000 + 400 − 400 − 100
   = 3,900 = 8,000 − 4,100. Every term is a working-capital or non-cash movement, never a cash
   collection or payment.)
4. After closing, what does Capital's 28,000 consist of? (§5 — the 20,000 investment plus the
   8,000 net income; the temporary accounts are inside it now.)
