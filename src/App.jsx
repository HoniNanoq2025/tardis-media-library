import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Library from "./pages/Library/Library.jsx";
import AddEpisode from "./pages/AddEpisode/AddEpisode.jsx";
import About from "./pages/About/About.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [episodes, setEpisodes] = useState(() => {
    // Load fra localStorage ved opstart
    const saved = localStorage.getItem("episodes");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "The Eleventh Hour",
            doctor: "11th",
            episode: "S05E01",
            rating: 5,
            notes: "Fantastic introduction to the 11th Doctor!",
          },
          {
            id: 2,
            title: "Blink",
            doctor: "10th",
            episode: "S03E10",
            rating: 5,
            notes: "Don't blink! Brilliant standalone episode.",
          },
          {
            id: 3,
            title: "The Day of the Doctor",
            doctor: "11th",
            episode: "S07E14",
            rating: 5,
            notes: "50th anniversary special with multiple Doctors!",
          },
        ];
  });

  const handleAddEpisode = (newEpisode) => {
    const updatedEpisodes = [...episodes, newEpisode];
    setEpisodes(updatedEpisodes);
    // Gem til localStorage
    localStorage.setItem("episodes", JSON.stringify(updatedEpisodes));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard episodes={episodes} />} />
            <Route path="/library" element={<Library episodes={episodes} />} />
            <Route
              path="/add"
              element={<AddEpisode onAddEpisode={handleAddEpisode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Toast Container - renders all toasts */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="bg-gray-800"
        />
      </div>
    </Router>
  );
}
