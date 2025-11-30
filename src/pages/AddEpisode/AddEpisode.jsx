import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddEpisode({ onAddEpisode }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    doctor: "10th",
    episode: "",
    rating: 5,
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newEpisode = {
        id: Date.now(),
        ...formData,
      };

      onAddEpisode(newEpisode);

      // Show success toast
      toast.success(`"${formData.title}" added to your library!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      // Reset form
      setFormData({
        title: "",
        doctor: "10th",
        episode: "",
        rating: 5,
        notes: "",
      });

      // Navigate to library after adding
      setTimeout(() => {
        navigate("/library");
      }, 1000);
    } catch (error) {
      // Show error toast
      toast.error("Failed to add episode. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      console.error("Error adding episode:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    if (formData.title || formData.notes) {
      // Show warning if there's unsaved data
      toast.warn("Episode data not saved", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
    navigate("/library");
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Add New Episode</h1>
        <p className="text-gray-400">
          Track your journey through time and space.
        </p>
      </div>

      <div className="max-w-2xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                {/* EPISODE TITLE */}
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2"
                >
                  Episode Title *
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., The Day of the Doctor"
                />
              </div>
              <div className="">
                {/* DOCTOR */}
                <label className="block text-sm font-medium mb-2">Doctor</label>
                <select
                  name="doctor"
                  id="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="9th">9th Doctor</option>
                  <option value="10th">10th Doctor</option>
                  <option value="11th">11th Doctor</option>
                  <option value="12th">12th Doctor</option>
                  <option value="13th">13th Doctor</option>
                  <option value="14th">14th Doctor</option>
                  <option value="15th">15th Doctor</option>
                  <option value="war">War Doctor</option>
                  <option value="fugitive">Fugitive Doctor</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                {/* SEASON & EPISODE */}
                <label htmlFor="episode" className="block text-sm font-medium">
                  Season & Episode
                </label>
                <input
                  type="text"
                  name="episode"
                  id="episode"
                  value={formData.episode}
                  onChange={handleChange}
                  placeholder="S01E01"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                {/* RATING */}
                <label htmlFor="rating" className="block text-sm font-medium">
                  Your Rating
                </label>
                <select
                  name="rating"
                  id="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="5">⭐️⭐️⭐️⭐️⭐️ (Amazing)</option>
                  <option value="4">⭐️⭐️⭐️⭐️ (Great)</option>
                  <option value="3">⭐️⭐️⭐️ (Good)</option>
                  <option value="2">⭐️⭐️ (Okay)</option>
                  <option value="1">⭐️ (Poor)</option>
                </select>
              </div>
            </div>

            <div className="">
              {/* NOTES */}
              <label htmlFor="notes" className="block text-sm font-medium">
                Notes
              </label>
              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Share your thoughts on this episode..."
              />
            </div>

            <div className="flex gap-4">
              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 font-bold py-3 px-6 rounded transition duration-200 ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Adding...
                  </>
                ) : (
                  "Add to Library"
                )}
              </button>

              {/* CANCEL BUTTON */}
              <button
                type="button"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
