import { describe, expect, it } from 'vitest'
import { formatTime } from '../../shared/utils/format'

describe('formatTime', () => {
  describe('sub-minute durations (seconds only)', () => {
    it('formats 0ms as 0s', () => {
      expect(formatTime(0)).toBe('0s')
    })

    it('formats 999ms as 0s (floors to 0 seconds)', () => {
      expect(formatTime(999)).toBe('0s')
    })

    it('formats 1000ms as 1s', () => {
      expect(formatTime(1000)).toBe('1s')
    })

    it('formats 59000ms as 59s', () => {
      expect(formatTime(59000)).toBe('59s')
    })

    it('formats 59999ms as 59s (truncates milliseconds)', () => {
      expect(formatTime(59999)).toBe('59s')
    })
  })

  describe('minute-or-greater durations (mm:ss)', () => {
    it('formats 60000ms as 1:00', () => {
      expect(formatTime(60000)).toBe('1:00')
    })

    it('formats 65000ms as 1:05', () => {
      expect(formatTime(65000)).toBe('1:05')
    })

    it('zero-pads seconds to 2 digits', () => {
      expect(formatTime(61000)).toBe('1:01')
      expect(formatTime(6000)).toBe('6s') // under a minute: no padding
    })

    it('formats 3599000ms as 59:59 (one hour minus one second)', () => {
      expect(formatTime(3599000)).toBe('59:59')
    })

    it('formats 3600000ms as 60:00 (rolls minutes past one hour)', () => {
      expect(formatTime(3600000)).toBe('60:00')
    })
  })

  describe('POST-FMT-001: output matches documented pattern', () => {
    // Contract: output matches /\d+:\d{2}/ or /\d+s/
    const pattern = /^\d+:\d{2}$|^\d+s$/
    const fixtures = [0, 1, 999, 1000, 60000, 65000, 123456, 3600000, 86_400_000]

    for (const ms of fixtures) {
      it(`output for ${ms}ms matches pattern`, () => {
        expect(formatTime(ms)).toMatch(pattern)
      })
    }
  })

  describe('PRE-FMT-001 contract (non-negative input)', () => {
    // The function's documented precondition is ms >= 0. Negative input
    // is undefined behaviour; document the current empirical behaviour
    // so regressions are caught if the implementation changes.
    it('empirically floors negative input deterministically', () => {
      // For -1ms: secs = -1, mins = -1, rem = -1 % 60 = -1.
      // mins > 0 is false, so output is `${-1}s` = '-1s'.
      // This is documented behaviour; if the implementation introduces
      // input validation, this test must be updated intentionally.
      expect(formatTime(-1)).toBe('-1s')
    })
  })

  describe('determinism', () => {
    it('returns identical output for identical input', () => {
      expect(formatTime(123456)).toBe(formatTime(123456))
    })
  })
})
