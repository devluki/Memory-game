export class CardClass {
    imagePath: string;
    cardId: string;

    constructor(imagePath: string, cardId: string) {
        this.imagePath = imagePath;
        this.cardId = cardId;
    }

    public get getId() {
        return this.cardId;
    }
}

export const shuffle = (cards: Card[]) => {
    let index = cards.length,
        randomIndex: number = 0,
        temp: Card | null = null;

    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        temp = cards[index];
        cards[index] = cards[randomIndex];
        cards[randomIndex] = temp;
    }

    return cards;
};

export const generateCards = (gameSize: number, imgs: string[]) => {
    const cards: Card[] = [];

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < 2; j++) {
            cards.push(new CardClass(imgs[i], i.toString()));
        }
    }

    return cards;
};
