Distinguishable states *must* remain in different groups of any correct partition; some $z$
induced by the same class relation, and accepting states the class(es) in $F$; a relabelling
after $D$ reads $w$, its current state is exactly $E(w)$; the $\epsilon$-closure of the set of
of $\delta(q, a)$ over $q \in E(w)$; which is precisely $E(wa)$, since $N$'s possible states
($\text{RE} \to \text{NFA}$, by structural induction on the expression; each row of the table in
distinct states; by the pigeonhole principle some state repeats among the first $p + 1$ visited,
$q_i$; a loop. Reading the loop any number of times $k \geq 0$ leaves $M$ at $q_i$ after $xy^k$,
so $M$ ends on exactly the same state it would reading $s$ itself; an accepting state, since
says *every* pumping exponent stays in $L$; so to use the lemma against a candidate language you
**Proof.** *(CFG $\Rightarrow$ PDA.)* Given $G$, build a PDA $P$ with three states; start, loop,
accept; that works purely on the stack: push $\$$ then $S$; in the loop, the top of stack is
intermediate states $q_m$ (this is where nondeterminism is absorbed; the choice of $q_m$ encodes
$h$ has at most $b^h$ leaves, so height $< |V|$ would give $|s| < b^{|V|} = p$; contradiction.
   lower one would leave a *smaller* parse tree for $s$; contradicting minimality.
   most $|V| + 1$, bounding its yield by $b^{|V|+1} \le p \cdot b$; with $b \geq 2$ the standard
accepts, BFS reaches that accepting configuration in finite time; so the same language is
rejects it; contradiction. So $H$ cannot exist, and $A_{\text{TM}}$ is undecidable. $\blacksquare$
machine recognising $\emptyset$ (which then satisfies $P$ falsely; if not, replace $P$ by its
problem. But $A_{\text{TM}}$ is undecidable; contradiction. Hence no such $D$ exists. $\blacksquare$