const notes = [100.00, 50.00, 20.00, 10.00]

export class Withdraw {
  static get(amount: number): number[] {
    let left: number = amount
    let withdraw: number[] = []

    for (let current of notes) {
      while (left > 0) {
        left -= current
        if (left >= 0) {
          withdraw.push(current)
        }

        if (left === 0) {
          return withdraw
        }
      }
    }
  }
}
