export class Validator<Entity> {
  errors = new Map<keyof Entity, string | string[]>();

  addError(attribute: keyof Entity, message: string): void {
    const existingError = this.errors.get(attribute);
    if (existingError) {
      if (typeof existingError === 'string') {
        this.errors.set(attribute, [existingError, message]);
      } else if (Array.isArray(existingError)) {
        existingError.push(message);
      }
    } else {
      this.errors.set(attribute, message);
    }
  }

  hasMin(attribute: keyof Entity, value: string, length: number) {
    if (value !== null && value.length < length) {
      this.addError(
        attribute,
        'attribute ' +
          attribute.toString() +
          ' must have at least ' +
          value +
          ' characters.',
      );
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

  isValidEmail(email: string) {
    const pattern = new RegExp('^(.+)@(\\S+)$');
    return pattern.test(email);
  }
}
