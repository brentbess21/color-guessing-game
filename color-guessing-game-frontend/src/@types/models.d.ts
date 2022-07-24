declare namespace Model {

    export namespace User {
        export interface UserState {
            loading: boolean;
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

    export namespace Game {
        export interface GameState {
            loading: boolean;
            currentGame: Model.Game.Game | null;
        }
        export interface Game {
            score: number;
            timer: number;
            cardsArray: Model.Card.ColorCard[];
            winningColor: string;
            winningIndex: number;
            hasWon: boolean;
            gameOver: boolean;
        }
        export interface Rounds {
            numberOfRounds: number;
            rounds: Model.Game.Game [];
        }
    }

    export namespace Card {
        export interface ColorCard {
            id: number
            randomColor: string;
        }
    }
}