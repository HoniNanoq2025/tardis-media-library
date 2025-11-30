export default function About() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          About the TARDIS Media Library
        </h1>
        <p className="text-gray-400 text-lg">
          Your companion through time and space for tracking Doctor Who episodes
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">What is this?</h2>
        <p className="text-gray-300 mb-4">
          The TARDIS Media Library is a React application built to demonstrate
          modern web development skills including React, Tailwind CSS, and
          client-side routing.
        </p>
        <p className="text-gray-300">
          Track your favorite Doctor Who episodes, rate them, add notes, and
          explore your viewing history across different Doctors and seasons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-green-400">Features</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Add and track Doctor Who episodes</li>
            <li>• Rate episodes 1-5 stars</li>
            <li>• Organize by Doctor and season</li>
            <li>• Add personal notes and thoughts</li>
            <li>• View statistics and insights</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-400">Tech Stack</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• React 18 with Hooks</li>
            <li>• React Router DOM for navigation</li>
            <li>• Tailwind CSS for styling</li>
            <li>• Vite for fast development</li>
            <li>• Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
