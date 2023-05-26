import { Card } from "../card/Card";
import { generateCards } from "../../utils/utils";
import { shuffle } from "../../utils/utils";
import { IMG_PATHS } from "../../consts";
import { GAME_SIZE } from "../../consts";
// import card1 from "../../assets/images/card--1.png";
// import card2 from "../../assets/images/card--2.png";
// import card3 from "../../assets/images/card--3.png";
// import card4 from "../../assets/images/card--4.png";
// import card5 from "../../assets/images/card--5.png";
// import card6 from "../../assets/images/card--6.png";
// import card7 from "../../assets/images/card--7.png";
// import card8 from "../../assets/images/card--8.png";
// import card9 from "../../assets/images/card--9.png";

export const Game = () => {
    // const img = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
    const cards: Card[] = generateCards(GAME_SIZE, IMG_PATHS);
    const shuffledCards = shuffle(cards);

    return (
        <>
            {shuffledCards.map((card, i) => (
                <Card key={i} imagePath={card.imagePath} cardId={card.cardId} />
            ))}
            {/* {cards.map((card, i) => (
                <Card key={i} imagePath={card.imagePath} cardId={card.cardId} />
            ))} */}
        </>
    );
};
