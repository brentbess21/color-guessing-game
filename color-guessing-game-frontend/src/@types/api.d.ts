declare namespace Api {
    export namespace User {
        export namespace Req {
            export interface NewUser {
                firstName: string;
                lastName: string;
                primaryEmail: string;
                password: string;
            }
        }
        export namespace Res {
            export interface User {
                id: number;
                firstName: string;
                lastName: string;
                primaryEmail: string;
                createdOn: string;
                token: string;
            }
        }
    }
}