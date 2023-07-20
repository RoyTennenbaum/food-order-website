import classes from "./Card.module.css";

const Card = ({ children }) => {
  return <div classes={classes.Card}>{children}</div>;
};

export default Card;
