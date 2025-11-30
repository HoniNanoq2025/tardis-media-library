import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

export default function Library({ episodes }) {
  return (
    <div className="">
      <div className="mb-6">
        <h1 className="text-3-xl font-bold">My Episode Library</h1>
        <p className="text-gray-400">
          {episodes.length} episode{episodes.length !== 1 ? "s" : ""} tracked
          across time and space
        </p>
      </div>

      {episodes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800 rounded-lg">
          <div className="text-6xl mb-4">🕰️</div>
          <h3 className="text-xl font-bold mb-2">Your Library is empty</h3>
          <p className="text-gray-400 mb-6">
            Start tracking your Doctor Who Journey
          </p>
          <a
            href="/add"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-200"
          >
            Add Your First Episode
          </a>
        </div>
      )}
    </div>
  );
}
