import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class UUID {
  private readonly id: string;

  constructor(id?: string) {
    this.id = id || uuidv4();
    this.validate();
    console.log(`entrei no construtor`);
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }

  toString() {
    return this.id;
  }
}

export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || 'ID must be a valida UUID');
    this.name = 'InvalidUuidError';
  }
}
