import Init
theorem a1 : 0 < 1 := by omega
theorem a2 : 1 < 2 := by omega
theorem a3 : 2 < 3 := by omega
theorem v1 : a1 ∧ a2 ∧ a3 := ⟨a1, a2, a3⟩
theorem v2 : a1 ∧ a2 ∧ a3 := And.intro a1 (And.intro a2 a3)
theorem v3 : a1 ∧ a2 ∧ a3 := by exact ⟨a1, a2, a3⟩
theorem v4 : a1 ∧ a2 ∧ a3 := by constructor <;> assumption
theorem v5 : a1 ∧ (a2 ∧ a3) := ⟨a1, a2, a3⟩
