declare namespace Model {
    export interface NewUser {
        firstName: string;
        lastName: string;
        primaryEmail: string;
        password: string;
        token: string;
    }

    export interface User {
        id: number;
        firstName: string;
        lastName: string;
        primaryEmail: string;
        createdOn: string;
        token: string;
    }
}