import { ErrorLike, OnoError } from "./types";
/**
 * Extends the new error with the properties of the original error and the `props` object.
 *
 * @param newError - The error object to extend
 * @param originalError - The original error object, if any
 * @param props - Additional properties to add, if any
 */
export declare function extendError<TError extends ErrorLike, TOriginal extends ErrorLike, TProps extends object>(error: TError, originalError?: TOriginal, props?: TProps): TError & TOriginal & TProps & OnoError<TError & TOriginal & TProps>;
