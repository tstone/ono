import { ErrorLike, OnoOptions } from "./types";
/**
 * Normalizes Ono options, accounting for defaults and optional options.
 */
export declare function normalizeOptions(options?: OnoOptions): OnoOptions;
/**
 * Normalizes the Ono arguments, accounting for defaults, options, and optional arguments.
 */
export declare function normalizeArgs<TError extends ErrorLike, TProps extends object>(args: unknown[], options: OnoOptions): {
    originalError: TError | undefined;
    props: TProps | undefined;
    message: string;
};
