import { Validator } from '..';

describe(`Lib - Validator`, () => {
  it(`test validation`, () => {
    const validation = new Validator<{ name: string; description: string }>();
    validation.isRequired(`name`, `this is a value`);
    validation.isRequired(`description`, 'this is a value');
  });
});
