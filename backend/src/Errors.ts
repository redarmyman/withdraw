class WithdrawException extends Error {
  constructor (message) {
    super(message)

    this.name = this.constructor.name
  }
}

export class InvalidArgumentException extends WithdrawException {}

export class NoteUnavailableException extends WithdrawException {}
