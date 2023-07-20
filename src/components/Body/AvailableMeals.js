import classes from "./AvailableMeals.module.css";
import MealItems from "./MealItems";
import DUMMY_MEALS from "./dummy-meals";
import Card from "../UI/Card";

const AvailableMeals = () => {
  return (
    <Card>
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItems
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
