export class Validator<Entity> {
  errors = new Map<keyof Entity, string[]>();

  addError(attribute: keyof Entity, message: string): void {
    if (this.errors.has(attribute)) {
      this.errors.get(attribute)?.push(message);
    } else {
      this.errors.set(attribute, [message]);
    }
  }

  hasMin(
    attribute: keyof Entity,
    value: string,
    length: number,
    message: string,
  ) {
    if (value !== null && value.length < length) {
      this.addError(attribute, message);
    }
  }

  hasMax(
    attribute: keyof Entity,
    value: string,
    length: number,
    message: string,
  ) {
    if (value !== null && value.length > length) {
      this.addError(attribute, message);
    }
  }

  isRequired(attribute: keyof Entity, value: string) {
    if ([null, undefined, ''].includes(value) || !value) {
      this.addError(
        attribute,
        'attribute ' + attribute.toString() + ' is required',
      );
    }
  }
}
