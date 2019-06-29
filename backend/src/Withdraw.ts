import { InvalidArgumentException, NoteUnavailableException } from './Errors'

const notes = [100.00, 50.00, 20.00, 10.00]

export class Withdraw {
  static get(entry: string): number[] {
    const amount = entry === '' ? 0 : parseFloat(entry)
    if (amount < 0 || isNaN(amount)) {
      throw new InvalidArgumentException('Invalid argument')
    }

    let left: number = amount
    let withdraw: number[] = []

    for (let current of notes) {
      while (left >= 0) {
        left -= current

        if (left >= 0) {
          withdraw.push(current)
        }

        if (left === 0 || left === -current) {
          return withdraw
        }

        if (left <= 0) {
          left += current
          break
        }
      }
    }

    throw new NoteUnavailableException('Note Unavailable!')
  }
}
