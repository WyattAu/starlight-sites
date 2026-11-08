theorem a1 : 0 < 1 := by omega
theorem a2 : 1 < 2 := by omega
theorem a3 : 2 < 3 := by omega
theorem big : a1 ∧ a2 ∧ a3 := ⟨a1, a2, a3⟩
