import photoDots from '../assets/6dots.svg';
import photoRecipe from '../assets/photo1.png';
import './RecipeBlogPage.css';

export default function RecipeBlogPage() {
	return (
		<main className="recipeSection">
			<div className="recipeHeaderSection">
				<p className="recipeHeaderTitle">Classic Cheesecake Recipe</p>
				<div className="recipeInfoWrapper">
					<img src={photoDots} alt="photoDots" />
					<p className="recipeAbout">
						Look no further for a creamy and ultra smooth classic cheesecake
						recipe! Paired with a buttery graham cracker crust, no one can deny
						its simple decadence. For the best results, bake in a water bath.
					</p>
				</div>
			</div>
			<div className="recipeImgSection">
				<img src={photoRecipe} alt="photoRecipe" />
			</div>
			<div className="recipeIngredientsSection">
				<div className="ingredientsContainer">
					<p>Ingredients</p>
					<div className="ingredientTopic">
						<p className="ingredientItem">Graham Cracker Crust</p>
						<div className="ingredient">
							<input type="checkbox" />
							<span>
								1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{' '}
								(about 10 full sheet graham crackers)
							</span>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<span>
								5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
							</span>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<span>
								1/4 cup (50g) <strong>granulated sugar</strong>
							</span>
						</div>
					</div>
					<div className="ingredientTopic">
						<p className="ingredientItem">Cheeseckae</p>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								four 8-ounce blocks (904g) full-fat{' '}
								<strong>cream cheese</strong> , softened to room temperature
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								1 cup (200g) <strong>granulated sugar</strong>{' '}
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								1 cup (240g) full-fat <strong>sour cream</strong>, at room
								temperature
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								1 teaspoon <strong>pure vanilla extract</strong>{' '}
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								2 teaspoons <strong>fresh lemon juice</strong> (optional, but
								recommended)
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								3 large <strong>eggs</strong> , at room temperature
							</p>
						</div>
						<div className="ingredient">
							<input type="checkbox" />
							<p>
								topping suggestions: salted caramel, lemon curd, strawberry
								topping, chocolate ganache, red wine chocolate ganache, fresh
								fruit, whipped cream, or raspberry sauce (recipe in notes)
							</p>
						</div>
					</div>
					<div className="instructionsContainer">
						<p>Instructions</p>
						<ol>
							<li>
								Adjust the oven rack to the lower-middle position and preheat
								oven to 350°F (177°C).
							</li>
							<li>
								<strong>Make the crust:</strong>
								Using a food processor, pulse the graham crackers into crumbs.
								Pour into a medium bowl and stir in sugar and melted butter
								until combined. (You can also pulse it all together in the food
								processor.) Mixture will be sandy. Press firmly into the bottom
								and slightly up the sides of a 9-inch or 10-inch springform pan.
								No need to grease the pan first. I use the bottom of a measuring
								cup to pack the crust down tightly. Pre-bake for 8 minutes.
								Remove from the oven and place the hot pan on a large piece of
								aluminum foil. The foil will wrap around the pan for the water
								bath in step 4. Allow crust to slightly cool as you prepare the
								filling.
							</li>
							<li>
								<strong>Prepare the simple water bath (see note)</strong> Boil a
								pot of water. You need 1 inch of water in your roasting pan for
								the water bath, so make sure you boil enough. I use an entire
								kettle of hot water. As the water is heating up, wrap the
								aluminum foil around the springform pan. Pour the cheesecake
								batter on top of the crust. Use a rubber spatula or spoon to
								smooth it into an even layer. Place the pan inside of a large
								roasting pan. Carefully pour the hot water inside of the pan and
								place in the oven. (Or you can place the roasting pan in the
								oven first, then pour the hot water in. Whichever is easier for
								you.)
							</li>
							<li>
								Bake cheesecake for 55-70 minutes or until the center is almost
								set. When it’s done, the center of the cheesecake will slightly
								wobble if you gently shake the pan. Turn the oven off and open
								the oven door slightly. Let the cheesecake sit in the oven in
								the water bath as it cools down for 1 hour. Remove from the oven
								and water bath, then cool cheesecake completely at room
								temperature. Then refrigerate the cheesecake for at least 4
								hours or overnight.
							</li>
							<li>
								Use a knife to loosen the chilled cheesecake from the rim of the
								springform pan, then remove the rim. Using a clean sharp knife,
								cut into slices for serving. For neat slices, wipe the knife
								clean and dip into warm water between each slice.
							</li>
							<li>
								Serve cheesecake with desired toppings. Cover and store leftover
								cheesecake in the refrigerator for up to 5 days.
							</li>
						</ol>
						<p className="sourceTxt">
							Source:{' '}
							<a
								className="sallyBakeLink"
								href="https://sallysbakingaddiction.com/classic-cheesecake/"
							>
								https://sallysbakingaddiction.com/classic-cheesecake/
							</a>
						</p>
					</div>
				</div>
				<div className="recipeMetaInfoContainer">
					<div className="recipeMetaInfo">
						<i className="fa fa-solid fa-spoon"></i>
						<div className="recipeMetaInfoServings">
							<p>yields</p>
							<p className="textOrange">12 servings</p>
						</div>
					</div>
					<div className="recipeMetaInfo">
						<i className="fa fa-regular fa-clock"></i>
						<div className="recipeMetaInfoServings">
							<p>prep time</p>
							<p>45 minutes</p>
						</div>
					</div>
					<div className="recipeMetaInfo">
						<i className="fa fa-regular fa-clock"></i>
						<div className="recipeMetaInfoServings">
							<p>cook time</p>
							<p>1 hour</p>
						</div>
					</div>
					<div className="recipeMetaInfo">
						<i className="fa fa-regular fa-clock"></i>
						<div className="recipeMetaInfoServings">
							<p>total time</p>
							<p>7,75 hours</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
