import { IUseCase } from './use-case.interface';

export interface ISignUpUseCase
  extends IUseCase<ISignUpUseCase.INPUT, ISignUpUseCase.OUTPUT> {}

export namespace ISignUpUseCase {
  export type INPUT = { email: string };
  export type OUTPUT = void;
}
