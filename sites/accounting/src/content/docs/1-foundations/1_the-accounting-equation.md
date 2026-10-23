---
date: 2026-10-23T00:00:00+00:00
title: "The Accounting Equation and Double Entry"
tags:
  - Accounting
description: "The accounting equation stated as an invariant, double entry proved to preserve it transaction by transaction, the debit-credit convention derived from the equation's sides, and the trial balance as the check."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "accounting", "url": "https://accounting.wyattau.com"}, {"name": "1 Foundations", "url": "https://accounting.wyattau.com/1-foundations"}, {"name": "The Accounting Equation and Double Entry", "url": "https://accounting.wyattau.com/1-foundations/1_the-accounting-equation"}]
}
</script>

### 1. The Invariant

**Definition.** The **accounting equation** is

$$
\text{Assets} = \text{Liabilities} + \text{Equity}.
$$

It is not a formula to compute; it is a statement that must remain true after every recorded
event. Assets are what the entity controls of value; liabilities are outsiders' claims on it;
equity is the owners' residual claim — what remains for them after every outsider is paid. The
equation says the two ways of listing what the entity is worth (the things themselves; the claims
against them) agree. That agreement is the invariant the whole subject preserves.

### 2. Double Entry Preserves the Invariant

**Theorem 2.1.** If the accounting equation holds and a transaction is recorded as equal debits
and credits, the equation holds after the transaction.

**Proof.** Each account has a side (debit or credit) on which it increases. The convention,
derived below, is: assets and expenses increase on the debit side; liabilities, equity, and
revenues increase on the credit side. An entry posts amount $t$ to each of two accounts. Four
cases:

1. **Debit an asset, credit an asset** (e.g., buy inventory with cash): one asset rises by $t$,
   another falls by $t$. Total assets unchanged; both sides unchanged. Equation holds.
2. **Debit an asset, credit a liability or equity** (e.g., borrow cash; issue shares for cash):
   assets rise by $t$ and the right side rises by $t$. Both sides increase equally. Holds.
3. **Debit a liability or equity, credit an asset** (e.g., repay a loan with cash): the right
   side falls by $t$ and assets fall by $t$. Both sides decrease equally. Holds.
4. **Debit and credit both on the right side** (e.g., revenue earned on credit): a liability or
   revenue rises by $t$ and another falls by $t$. Right side net unchanged; assets unchanged.
   Holds.

Every entry is one of these four shapes (or the mirrored shapes with assets on the credit side —
same arithmetic). In every case the two sides move by equal amounts, so an equation that held
before the entry holds after it. By induction over all transactions, the invariant holds
forever. $\blacksquare$

### 3. Where the Debit-Credit Convention Comes From

The convention is not arbitrary; it is forced by the invariant. Choose: debits increase assets
(the subject's historical root is recording what is in the chest). Then for the equation to
balance, entries touching the right side must *increase* the right side on credits — because
when a credit also touches an asset, the asset rises by a debit, so the right side must rise by
a credit to keep pace. Revenues ultimately increase equity, so revenues increase on credits;
expenses reduce equity, so expenses increase on debits. Every rule students memorise is this
derivation.

### 4. The Trial Balance: The Invariant's Check

**Definition.** The **trial balance** lists every account's balance with total debits and total
credits.

**Theorem 4.1.** If every entry had equal debits and credits, the trial balance's two totals are
equal.

**Proof.** Each entry contributes the same amount $t$ to both totals. Summing over all entries,
both totals equal $\sum_{\text{entries}} t$. Equal. $\blacksquare$

The check has a precise limit, and knowing the limit is the skill: the trial balance catches
*one-sided* errors (a debit posted without its credit, or at a different amount). It does **not**
catch an entry posted to the wrong account (both sides correct, classification wrong), a missing
transaction (nothing posted, nothing to catch), or offsetting errors. A clean trial balance means
the invariant held; it does not mean the books are right.

### 5. Worked Example: Four Transactions

A new consultancy, recording four events:

| # | Event | Entry (debit → credit) | Shape | Effect on equation |
|---|---|---|---|---|
| 1 | Owners invest \$10,000 cash | Cash \$10,000 → Equity \$10,000 | Case 2 | Both sides +10,000 |
| 2 | Borrow \$5,000 from the bank | Cash \$5,000 → Loan \$5,000 | Case 2 | Both sides +5,000 |
| 3 | Buy \$3,000 of equipment with cash | Equipment \$3,000 → Cash \$3,000 | Case 1 | Assets reshuffled |
| 4 | Pay \$800 cash for this month's rent | Rent (expense) \$800 → Cash \$800 | Case 2, via equity | Both sides −800 |

Check after each event:

- After 1: Assets \$10,000 = Liabilities \$0 + Equity \$10,000. ✓
- After 2: Assets \$15,000 = Liabilities \$5,000 + Equity \$10,000. ✓
- After 3: Assets \$15,000 (cash down \$3,000, equipment up \$3,000) = \$5,000 + \$10,000. ✓
- After 4: Assets \$14,200 = \$5,000 + (\$10,000 − \$800 expense). ✓

Every line balances because every entry was double-entry — Theorem 2.1 executing four times.

### 6. What This Page Sets Up

Revenue and expense accounts are temporary equity sub-accounts: they accumulate the period's
changes to equity, then are closed into it. That is why Case 2 covers "revenue earned on credit"
— the credit to revenue is a credit to a future piece of equity. The
[accounting cycle](/2-the-accounting-cycle/) runs this machinery across a full period, adding the
accrual principle's adjustments; the equation remains the invariant throughout.

### Self-test

1. Which of the four shapes is "receive an invoice for utilities, unpayed"? (Case 2 mirrored to
   expenses: debit the expense, credit a liability — the right side rises by the payable.)
2. Why does the trial balance catch a missing credit but not a missing transaction? (§4 —
   the totals compare what was posted; nothing posted leaves nothing to compare.)
3. State why expenses increase on the debit side. (§3 — expenses decrease equity; equity
   increases on credits; so their opposite, expenses, increase on debits.)
