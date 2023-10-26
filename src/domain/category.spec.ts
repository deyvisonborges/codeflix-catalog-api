import { Category } from './category.model';

describe('Category Unit Test', () => {
  test('Constructor', () => {
    // Triple AAA
    // Arrange, Act, Assert
    const category = new Category({
      name: 'Movie',
    });

    expect(category.category_id).toBeUndefined();
    expect(category.name).toBe('Movie');
    expect(category.description).toBeNull();
    expect(category.activate).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  });
});

describe('create command', () => {
  test('should create a category', () => {
    const category = Category.create({
      name: `Movie`,
    });

    expect(category.name).toBe('Movie');
  });

  test('should create a category with description', () => {
    const category = Category.create({
      name: `Movie`,
      description: `some description`,
    });

    expect(category.name).toBe('Movie');
    expect(category.description).toBe('some description');
  });

  test(`should change name`, () => {
    const category = new Category({
      name: `Original name`,
    });

    category.changeName(`Changed name`);
    expect(category.name).toBe(`Changed name`);
  });
});
