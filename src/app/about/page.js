export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4 leading-7">
          Welcome to <span className="font-semibold">Cookly Recipes</span>! We're passionate about sharing simple and delicious recipes with food lovers around the world.
        </p>
        <p className="text-lg mb-4 leading-7">
          Our mission is to make cooking fun, easy, and accessible for everyone – whether you're a complete beginner or an experienced chef.
        </p>
        <p className="text-lg leading-7">
          This website was built using <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span> to deliver a smooth and modern user experience.
        </p>
      </div>
    </main>
  );
}
