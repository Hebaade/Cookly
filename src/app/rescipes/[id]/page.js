import recipes from "@/app/data/data.json";

export default function RecipeDetails({ params }) {
  const recipeId = parseInt(params.id);
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return <h1 className="text-center text-2xl font-bold mt-10">Recipe Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full md:w-[50%] h-auto rounded-xl shadow-md object-cover"
          />
          <div className="md:w-[50%] space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
            <p>
              <span className="font-semibold">Ingredients:</span> {recipe.ingredients}
            </p>
            <p>
              <span className="font-semibold">Instructions:</span> {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
