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
