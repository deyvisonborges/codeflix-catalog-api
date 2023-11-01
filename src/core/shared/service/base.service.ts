export interface BaseService<Input, Output> {
  execute(input: Input): Promise<Output>;
}
