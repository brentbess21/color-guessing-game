declare namespace Model {

    export namespace User {
        export interface UserState {
            currentUser: User | null;
        }

        export interface UserFormValues {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            confirmPassword: string;
        }

        export interface NewUser {
            firstName: string;
            lastName: string;
            primaryEmail: string;
            password: string;
        }

        export interface User {
            id: number;
            firstName: string;
            lastName: string;
            primaryEmail: string;
            createdOn: string;
            token: string;
        }

        export interface LoginData {
            email: string;
            password: string;
        }
    }
}