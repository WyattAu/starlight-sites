set_option maxRecDepth 100000

/-!
# Structural theorems: acyclicity, proved twice

The generated data above is the frozen course structure. This section
proves the structure is *correct*, in the strong sense:

1. **Abstract theorem.** Any dependency function in which every dependency
   strictly descends the course order is acyclic — a general theorem,
   proved by induction on path length, with no reference to the concrete
   graph. Our graph satisfies the hypothesis (the 89 `deps_lt_*`
   certificates above), so it is acyclic.
2. **Concrete theorem.** The actual dependency graph of the 89-chapter
   course is diagonal-free under full transitive closure: no chapter
   reaches itself through a nonempty path. Computed by boolean matrix
   squaring (7 squarings cover every path, since any minimal cycle through
   a chapter of rank r has length at most r + 1 ≤ 89 = 2^7 within
   saturation) and decided by the kernel.
3. **Edge-list integrity.** The concrete edge list descends, carries no
   self loops, matches the `deps` table exactly, and has the declared
   count.
4. **No orphan chapters.** Every chapter after the first consumes
   something: the course is one connected build, not scattered pages.
5. **The checker works.** A graph with the cycle 1 → 0 → 1 flips the
   acyclicity check to false, proving the check is not vacuously true.
-/

namespace CourseProof

open BitVec

/-- The dependency row of chapter `c`: bit `d` set means "c depends on d". -/
def depsRow (c : Nat) : BitVec 89 :=
  (deps c).foldl (fun acc d => acc ||| BitVec.ofNat 89 (2 ^ d)) (BitVec.ofNat 89 0)

/-- Initial rows: one per chapter, carrying the raw edges. -/
def rows0 : List (BitVec 89) := (List.range 89).map depsRow

/-- One closure step: each row absorbs the rows of everything it reaches. -/
def joinAt (rows : List (BitVec 89)) (rowA : BitVec 89) : BitVec 89 :=
  (List.range 89).foldl
    (fun acc i => if rowA.getLsbD i then acc ||| rows.getD i (BitVec.ofNat 89 0) else acc)
    rowA

/-- Boolean matrix squaring. -/
def square (rows : List (BitVec 89)) : List (BitVec 89) := rows.map (joinAt rows)

/-- Seven squarings saturate reachability: paths of length up to 2^7 ≥ 89. -/
def closedRows : List (BitVec 89) := Nat.fold 7 (fun _ _ rs => square rs) rows0

/-- Acyclicity: no chapter reaches itself through a nonempty path. -/
def diagFree : Bool :=
  (List.range 89).all fun a => !(closedRows.getD a (BitVec.ofNat 89 0)).getLsbD a

theorem acyclic : diagFree = true := by
  decide

end CourseProof

/- The abstract theorem: descent excludes cycles, for any dependency
function whatsoever. -/

/-- `Reach depsF n a b`: chapter `b` is reachable from `a` along exactly
`n` dependency steps. -/
inductive Reach (depsF : Nat → List Nat) : Nat → Nat → Nat → Prop
  | base (a : Nat) : Reach depsF 0 a a
  | step (n a b d : Nat) : Reach depsF n a b → d ∈ depsF b → Reach depsF (n + 1) a d

theorem reach_lowers (depsF : Nat → List Nat)
    (hdescent : ∀ c d, d ∈ depsF c → d < c) :
    ∀ n a b, Reach depsF n a b → b + n ≤ a := by
  intro n a b h
  induction h with
  | base a => omega
  | step n a b d ih hmem =>
    have h1 : d < b := hdescent b d hmem
    omega

/-- Under the descent hypothesis there are no nontrivial closed walks:
the dependency relation is acyclic. -/
theorem no_cycles_abstract (depsF : Nat → List Nat)
    (hdescent : ∀ c d, d ∈ depsF c → d < c) :
    ∀ n a, Reach depsF n a a → n = 0 := by
  intro n a h
  have hle := reach_lowers depsF hdescent n a a h
  omega

/- Edge-list integrity and structural sanity, decided concretely. -/

theorem edges_descend : edgeList.all fun e => e.2 < e.1 := by
  decide

theorem no_self_loops : edgeList.all fun e => ¬(e.1 = e.2) := by
  decide

theorem all_in_deps : edgeList.all fun e => e.2 ∈ deps e.1 := by
  decide

theorem edge_count_ok : edgeList.length = edgeCount := by
  decide

theorem no_orphans : (List.range 89).all fun c => c = 0 ∨ deps c ≠ [] := by
  decide

/- The checker works: a cyclic variant flips the verdict. -/

namespace CycleDetector

open BitVec

/-- A graph with the cycle 1 -> 0 -> 1. -/
def depsF (c : Nat) : List Nat :=
  match c with | 0 => [1] | 1 => [0] | _ => []

def row (c : Nat) : BitVec 89 :=
  (depsF c).foldl (fun acc d => acc ||| BitVec.ofNat 89 (2 ^ d)) (BitVec.ofNat 89 0)

def rows0 : List (BitVec 89) := (List.range 89).map row

def closedRows : List (BitVec 89) := Nat.fold 7 (fun _ _ rs => CourseProof.square rs) rows0

def diagFree : Bool :=
  (List.range 89).all fun a => !(closedRows.getD a (BitVec.ofNat 89 0)).getLsbD a

/-- The cycle is detected: the same check that passed for the course
graph fails here. -/
theorem detected : diagFree = false := by
  decide

end CycleDetector

/- Everything at once. -/

/-- The concrete structure certificate: descent, integrity, acyclicity,
and a cycle checker that detects. The statement conjoins the *propositions*;
the proof terms named after it were proved above. The abstract no-cycle
theorem (`no_cycles_abstract`) stands separately: for ANY dependency
function in which every dependency descends, cycles are impossible. -/
theorem structure_proven :
    (edgeList.all fun e => e.2 < e.1) = true ∧
    ((edgeList.all fun e => e.2 ∈ deps e.1) = true ∧
    (edgeList.length = edgeCount ∧
    (((List.range 89).all fun c => c = 0 ∨ deps c ≠ []) = true ∧
    (CourseProof.diagFree = true ∧
    (CycleDetector.diagFree = false ∧
    (∀ depsF : Nat → List Nat, (∀ c d, d ∈ depsF c → d < c) →
      ∀ n a, Reach depsF n a a → n = 0)))))) :=
  ⟨edges_descend,
   ⟨all_in_deps,
   ⟨edge_count_ok,
   ⟨no_orphans,
   ⟨CourseProof.acyclic,
   ⟨CycleDetector.detected, no_cycles_abstract⟩⟩⟩⟩⟩⟩
