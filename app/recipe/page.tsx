import "./recipe.css";

export default function page() {
  return (
    <div className="rCon">
      <span className="titleDescription text-center">
        <h1 className="mainHeader">Marry Me Chicken</h1>{" "}
      </span>

      <div className="recipeContainer">
        <div className="ingredients">
          {" "}
          <p className="subHeaders">Ingredients</p>
          <ul>
            <li>
              Chicken: 3 large boneless, skinless chicken breasts, sliced
              horizontally in half to make thin cutlets
            </li>
            <li>
              Flour Coating: ½ cup all-purpose flour, 1 teaspoon salt, and ½
              teaspoon ground black pepper
            </li>
            <li>
              Searing: 2 tablespoons olive oil and 2 tablespoons unsalted butter
            </li>
            <li>
              Aromatics: 3 cloves garlic, minced, and 1 finely chopped shallot
              or small onion
            </li>
            <li>Sauce Liquids: 1 cup chicken stock and 1 cup heavy cream</li>
            <li>
              Flavor Boosters: ½ cup freshly grated Parmesan cheese, ⅓ cup
              chopped sun-dried tomatoes (packed in oil), and 1 tablespoon
              tomato paste
            </li>
            <li>
              Herbs & Spices: 1 teaspoon Italian seasoning (or ½ tsp dried
              oregano and ½ tsp dried thyme) and ¼ teaspoon red pepper flakes
            </li>
            <li>
              Finishing Touches: ¼ cup fresh basil leaves, torn or chopped
            </li>
          </ul>
        </div>
        <div className="stepByStep">
          <p className="subHeaders">Step-by-Step Instructions</p>
          <ol>
            <li>
              Prep the ChickenMix the flour, salt, and pepper in a shallow bowl.
              Dredge each chicken cutlet in the flour mixture, shaking off any
              excess coating.
            </li>
            <li>
              Sear to Golden PerfectionHeat the olive oil and melt the butter in
              a large skillet over medium-high heat. Add the chicken in a single
              layer and cook undisturbed for 4 to 5 minutes per side until
              golden brown. Transfer the chicken to a plate and set it aside; it
              will finish cooking later.
            </li>
            <li>
              Sauté the AromaticsReduce the pan heat to medium. Add the chopped
              shallot and minced garlic, cooking for about 1 minute until
              fragrant. Stir in the tomato paste, Italian seasoning, and red
              pepper flakes, cooking for another minute.
            </li>
            <li>
              Pour in the chicken stock, using a wooden spoon to scrape up all
              the flavorful browned bits stuck to the bottom of the pan. Stir in
              the heavy cream, Parmesan cheese, and chopped sun-dried tomatoes.
              Bring the mixture to a gentle simmer for 3 minutes to let the
              sauce thicken.
            </li>
            <li>
              Simmer and CombineNestle the seared chicken cutlets back into the
              simmering sauce, pouring in any resting juices from the plate.
              Simmer for 4 to 5 minutes until the chicken is hot and cooked
              through to an internal temperature of 165°F (74°C).
            </li>
            <li>
              Garnish and ServeRemove the skillet from the heat. Scatter the
              fresh basil leaves and a little extra Parmesan cheese over the
              top. Serve immediately.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
