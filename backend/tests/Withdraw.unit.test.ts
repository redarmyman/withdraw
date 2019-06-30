import { Withdraw } from '../src/Withdraw'
import { NoteUnavailableException, InvalidArgumentException } from '../src/Errors'

describe('Withdraw get method', () => {
  test('it should deliver notes 1/2', () => {
    expect(Withdraw.get('290.00')).toStrictEqual([100, 100, 50, 20, 20]);
  })

  test('it should deliver notes 2/2', () => {
    expect(Withdraw.get('80.00')).toStrictEqual([50, 20, 10]);
  })

  test('it should return empty delivery for 0.00 entry', () => {
    expect(Withdraw.get('0.00')).toStrictEqual([])
  })

  test('it should throw NoteUnavailableException error for unavailable withdraw', () => {
    expect(() => {Withdraw.get('125.00')}).toThrowError(NoteUnavailableException)
  })

  test('it should throw InvalidArgumentException error for invalid entry', () => {
    expect(() => {Withdraw.get('-130.00')}).toThrowError(InvalidArgumentException)
  })

  test('it should return empty delivery for null entry', () => {
    expect(Withdraw.get('')).toStrictEqual([])
  })
})
