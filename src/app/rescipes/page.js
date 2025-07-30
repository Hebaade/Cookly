// app/recipes/page.js
import data from '@/app/data/data.json'
import Link from 'next/link'

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">All Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(recipe => (
          <div key={recipe.id} className="bg-gray-100 rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <Link
                href={`/rescipes/${recipe.id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
