// app/page.js
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Welcome To Cookly Recipes
      </h1>

      <Link
        href="/rescipes"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        View All Recipes
      </Link>
    </main>
  )
}
