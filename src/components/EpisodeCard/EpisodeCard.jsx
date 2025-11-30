export default function EpisodeCard({ episode }) {
  const getRatingStars = (rating) => {
    return "⭐".repeat(parseInt(rating));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-bold text-blue-400">{episode.title}</h3>
      <p className="text-gray-400 text-sm mt-1">
        {episode.doctor} • {episode.episode}
      </p>
      <p className="text-yellow-400 my-2">{getRatingStars(episode.rating)}</p>
      {episode.notes && (
        <p className="text-gray-300 mt-2 border-t border-gray-700 pt-2 text-sm">
          {episode.notes}
        </p>
      )}
    </div>
  );
}
