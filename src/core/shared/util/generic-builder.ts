export class GenericBuilder<T> {
  private instance: T;

  constructor(private entityConstructor: new (props: T) => T) {
    this.instance = new entityConstructor({} as T);
  }

  setProperty<K extends keyof T>(key: K, value: T[K]): this {
    this.instance[key] = value;
    return this;
  }

  build(): T {
    return this.instance;
  }
}
