import { IMG_PATHS } from "../consts";

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

export const generateCards = (gameSize: number, imgs: string[]) => {
    const cards: Card[] = [];

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < 2; j++) {
            cards.push(new CardClass(imgs[i], i.toString()));
        }
    }

    return cards;
};
