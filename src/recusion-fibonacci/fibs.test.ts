import { fibs, fibsRec } from './fibs'

describe('fibs', () => {
  it('should return an empty array when the iteration is zero', () => {
    expect(fibs(0)).toEqual([])
  })

  it('should return the correct array when the iteration is one', () => {
    expect(fibs(1)).toEqual([1])
  })

  it('should return the correct array when the iteration is two', () => {
    expect(fibs(2)).toEqual([1, 1])
  })

  it('should return the correct array when the iteration is three', () => {
    expect(fibs(3)).toEqual([1, 1, 2])
  })

  it('should return the correct array when the iteration is ten', () => {
    expect(fibs(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })

  it('returns an empty array when the input is negative', () => {
    expect(fibs(-1)).toEqual([])
  })
})

describe('fibsRec', () => {
  it('returns an empty array when the input is 0', () => {
    expect(fibsRec(0)).toEqual([])
  })

  it('returns [0, 1] when the input is 2', () => {
    expect(fibsRec(2)).toEqual([0, 1])
  })

  it('returns [0, 1, 1, 2, 3, 5, 8, 13] when the input is 8', () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
  })

  it('returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] when the input is 10', () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] when the input is 12', () => {
    expect(fibsRec(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  })

  it('returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] when passed an array starting with [0, 1]', () => {
    expect(fibsRec(12, [0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  })

  it('returns an empty array when the input is negative', () => {
    expect(fibsRec(-1)).toEqual([])
  })
})
