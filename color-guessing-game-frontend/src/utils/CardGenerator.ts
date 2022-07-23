export class CardGenerator {
    constructor( public numberOfCards: number) {
    }

    generateRandomColors() : string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    }

    generateColorCardsArray(): Model.Card.ColorCard[] {
        const cardsArray: Model.Card.ColorCard[] = []
        for(let i = 0; i < this.numberOfCards; i++) {
            const card : Model.Card.ColorCard = {
                id: i,
                randomColor: this.generateRandomColors()
            }
            cardsArray.push(card)
        }
        return cardsArray
    }

}