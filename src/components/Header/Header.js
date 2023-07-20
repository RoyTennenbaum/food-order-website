import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from "./meals.jpg";

const Header = ({ openCartHandler }) => {
  return (
    <>
      <div className={classes.header}>
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>ReactMeals</div>
        <HeaderCartButton openCartHandler={openCartHandler} />
      </div>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals.jpg" />
      </div>
    </>
  );
};

export default Header;
