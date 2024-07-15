import PropTypes from "prop-types";

export default function Card({ meals }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
      {meals &&
        meals.map((meal) => {
          const instructions = meal.strInstructions.slice(0, 250);
          return (
            <div
              key={meal.idMeal}
              className="card rounded-xl border-2 p-4 bg-base-100 w-full shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-xl py-4">{meal.strMeal}</h2>
                <p className="py-2">Origin : {meal.strArea}</p>
              </div>
              <figure>
                <img
                  className="rounded-md w-full"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </figure>
              <p className="mt-10">{instructions}...</p>
            </div>
          );
        })}
    </div>
  );
}

Card.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
      strMeal: PropTypes.string.isRequired,
      strArea: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
      strInstructions: PropTypes.string.isRequired,
    })
  ).isRequired,
};
