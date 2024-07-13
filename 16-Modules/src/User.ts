import type { Person } from './types.js';

export default class User implements Person {
    constructor(public username: string, public email: string) {}
    logout() {
        console.log(`User ${this.username} has been logged out.`);
    }
}

export function userHelper() {
    console.log('User Helper'); 
}