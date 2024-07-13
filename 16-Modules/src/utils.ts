export function add(a: number, b: number): number {
    return a + b;
}

export function sample<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const pi = 3.14159265359;