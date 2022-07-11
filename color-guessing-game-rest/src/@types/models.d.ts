export interface User {
    id: number;
    fistName: string;
    lastName: string;
    primaryEmail: string;
    token: string;
}

export interface NewUser {
    firstName: string;
    lastName: string;
    primaryEmail: string;
    password: string;
    token: string;
}