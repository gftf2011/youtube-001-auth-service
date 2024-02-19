export interface IUseCase<INPUT = any, OUTPUT = any> {
  execute: (input: INPUT) => Promise<OUTPUT>;
}
