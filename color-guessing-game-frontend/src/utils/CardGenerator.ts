interface ColorCard {
    id: number
    randomColor: string;
}

export class CardGenerator {
    constructor( public numberOfCards: number) {
    }

    generateRandomColors() : string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    }

    generateColorCards(): ColorCard[] {
        const colorCards : ColorCard[] = []
        for(let i = 0; i < this.numberOfCards; i++) {
            const card : ColorCard = {
                id: i,
                randomColor: this.generateRandomColors()
            }
            colorCards.push(card)
        }
        return colorCards
    }

}