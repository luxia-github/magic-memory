import classes from "./SingleCard.module.scss";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={classes.card}>
      <div className={flipped ? classes.flipped : ""}>
        <div>
          <img className={classes.front} src={card.src} alt="card front" />
          <img
            className={classes.back}
            src="/img/cover.png"
            alt="card back"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
