export const Card: React.FC<Card> = ({ imagePath, cardId }) => {
    return (
        <>
            <img src={imagePath} alt="" />
            <p>{cardId}</p>
        </>
    );
};
