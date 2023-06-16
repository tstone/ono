import { ErrorLike, ErrorPOJO } from "./types";
/**
 * Custom JSON serializer for Error objects.
 * Returns all built-in error properties, as well as extended properties.
 */
export declare function toJSON<T extends ErrorLike>(this: T): ErrorPOJO & T;
/**
 * Returns own, inherited, enumerable, non-enumerable, string, and symbol keys of `obj`.
 * Does NOT return members of the base Object prototype, or the specified omitted keys.
 */
export declare function getDeepKeys(obj: object, omit?: Array<string | symbol>): Set<string | symbol>;
