const Movies = require("../DataBase/MovieSchema")

const createMovie = async (req, res) => {
    const { Title, Title_Img, Rating, TrailerURL, CoverIMG, Moods, Play, plot_summary, Release_Year, Languages } = req.body

    try {
        await Movies.create({
            Title, Title_Img, Rating, TrailerURL, CoverIMG, Moods, Play, Likes: 0, Dislikes: 0, plot_summary, Release_Year, Languages
        })
        res.status(201).json({ message: 'Movie uploaded successfully' })

    } catch (err) {
        res.status(400).json({ message: "Movie upload failed", error: err.message })
    }
}

const readMovie = async (req, res) => {
    try {
        const Movie = await Movies.find();
        res.status(200).json({ message: 'Movies fetched successfully', data: Movie })
    } catch (err) {
        res.status(500).json({ message: "Error fetching movies", error: err.message })
    }
}

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        // Assuming findByIdAndUpdate is used to update a movie by its ID
        await Movies.findByIdAndUpdate(id, updateData);
        res.status(200).json({ message: 'Movie updated successfully' })
    } catch (err) {
        res.status(500).json({ message: "Error updating movie", error: err.message })
    }
}

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        await Movies.findByIdAndDelete(id);
        res.status(200).json({ message: 'Movie deleted successfully' })
    } catch (err) {
        res.status(500).json({ message: "Error deleting movie", error: err.message })
    }
}

module.exports = { createMovie, readMovie, updateMovie, deleteMovie }
