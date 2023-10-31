import { Validator } from '..';

describe(`Lib - Validator`, () => {
  it(`test validation`, () => {
    const validation = new Validator<{ name: string; description: string }>();
    validation.isRequired(`name`, ``);
    validation.hasMin(`name`, `val`, 4);
    validation.hasMin(`name`, `v`, 2);
    validation.isRequired(`description`, '');

    console.log(validation.errors);
  });

  it(`should return a invalid email`, () => {
    const validation = new Validator<{ name: string; description: string }>();
    expect(validation.isValidEmail(`fakeemail.com`)).toEqual(false);
  });

  it(`should return a valid email`, () => {
    const validation = new Validator<{ name: string; description: string }>();
    expect(validation.isValidEmail(`vali@gmail.com`)).toEqual(true);
  });
});
