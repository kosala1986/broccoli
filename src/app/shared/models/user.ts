/** This represents user properties and it's types. */
export interface User {
    name: string;
    email: string;
}

/** Readable names for user fields displayed in the home page invite dialog. */
export enum UserLabel {
    FULL_NAME = 'Full name',
    EMAIL_ADDRESS = 'Email',
    CONFIRM_EMAIL_ADDRESS = 'Confirm email',
    SEND_BUTTON = 'Send',
    LOADING = 'Sending, please wait...',
}

/** User model */
export class User {
    constructor(user: Partial<User> = {}) {
        this.email = user.email || '';
        this.name = user.name || '';
    }
}