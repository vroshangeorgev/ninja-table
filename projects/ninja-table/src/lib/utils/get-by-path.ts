/**
 * Author: Roshan
 * Reads the value of each properties from an object, including nested properties, and returns the value at the end of the path.
 * If any part of the path is invalid (e.g., property doesn't exist), it gracefully handles the situation and returns undefined instead of throwing an error.
 * Example: getByPath(user, "address.city")
 */
export function getByPath(obj: unknown, path: string): unknown {
    if (!obj || !path) return undefined;

    // Support simple dot paths: a.b.c
    const parts = path.split('.').filter(Boolean);

    let current: any = obj;
    for (const part of parts) {
        if (current == null) return undefined;
        current = current[part];
    }
    return current;
}