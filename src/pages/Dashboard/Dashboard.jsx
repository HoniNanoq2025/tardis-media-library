import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

export default function Dashboard({ episodes }) {
  useEffect(() => {
    // Show welcome message on first visit
    toast.info("Welcome to your TARDIS Media Library!", {
      position: "top-right",
      autoClose: 4000,
      theme: "dark",
    });
  }, []);

  const totalEpisodes = episodes.length;
  const averageRating =
    episodes.length > 0
      ? (
          episodes.reduce((acc, episode) => acc + parseInt(episode.rating), 0) /
          episodes.length
        ).toFixed(1)
      : 0;

  // Find favorit Doctor
  const doctorCounts = episodes.reduce((acc, episode) => {
    acc[episode.doctor] = (acc[episode.doctor] || 0) + 1;
    return acc;
  }, {});

  const favoriteDoctor = Object.keys(doctorCounts).reduce(
    (a, b) => (doctorCounts[a] > doctorCounts[b] ? a : b),
    "None"
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to the TARDIS</h1>
        <p className="text-gray-400">
          Your personal Doctor Who episode tracker
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-linear-to-br from-blue-600 to-blue-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Episodes</h3>
          <p className="text-4xl font-bold">{totalEpisodes}</p>
        </div>
        <div className="bg-linear-to-br from-purple-600 to-purple-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Favorite Doctor</h3>
          <p className="text-3xl font-bold">{favoriteDoctor}</p>
        </div>
        <div className="bg-linear-to-br from-green-600 to-green-800 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
          <p className="text-4xl font-bold">{averageRating}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg shadow text-center transition duration-200"
        >
          <h3 className="text-xl font-bold mb-2">➕ Add New Episode</h3>
          <p className="text-blue-200">Track a new Doctor Who episode</p>
        </Link>
        <Link
          to="/library"
          className="bg-purple-600 hover:bg-purple-700 p-6 rounded-lg shadow text-center transition duration-200"
        >
          <h3 className="text-xl font-bold mb-2">📚 View Library</h3>
          <p className="text-purple-200">Browse all your episodes</p>
        </Link>
      </div>

      {/* Recent Episodes */}
      <div className="bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recently Added</h2>
          <Link to="/library" className="text-blue-400 hover:text-blue-300">
            View All →
          </Link>
        </div>
        {episodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.slice(-3).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">No episodes added yet</p>
            <Link
              to="/add"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition duration-200"
            >
              Add Your First Episode
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
