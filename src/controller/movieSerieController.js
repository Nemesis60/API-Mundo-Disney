const MovieSerie = require("../controller/movieSerieController");

const postMovieSerie = async (req, res) => {
    try {
        const imagePath = req.file.path;
        const { body } = req;

        const createdCharacter = await Character.create({
            image: imagePath,
            name: body.name,
            age: body.age,
            weight: body.weight,
            history: body.history,
            user_id: body.user_id
        });
        if (!createdCharacter) {
            return res.status(401).json({
                error: "incorrect credentials"
            });
        } else {
            return res.status(200).json({
                character: createdCharacter
            });
        }
    } catch (error) {
        console.error('error to create movie or serie', error);
        res.status(500).json({ message: 'Error to create movie or serie' });
    }
}

const getAllMovieSerie = async (req, res) => {
    try {
        const movieSeries = await MovieSerie.findAll({
            attributes: ["image", "title", "date_created"]
        });
        if (!movieSeries) {
            return res.status(404).json({ message: 'movie or serie Not Founded' });
        } else {
            
            return res.status(200).json({ data: movieSerieResponse })

        }
    } catch (error) {
        console.error('error to found the movies or series:', error);
        res.status(500).json({ message: 'Error to found movies or series' });
    }
}

const getMovieSerie = async (req, res) => {
    try {
        const id = req.params.id;
        const movieSerie = await MovieSerie.findByPk(id);

        if (!movieSerie) {
            return res.status(404).json({ message: 'Gender Not Founded' });
          }
      
          res.status(200).json({
            movieSerie: movieSerie
          });
    } catch (error) {
        console.error('error to found the movies and series:', error);
        res.status(500).json({ message: 'Error to found movies and series' });
    }
}

const updateMovieSerie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteMovieSerie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieSerie = await MovieSerie.findByPk(id);
        
        if (!movieSerie) {
            return res.status(404).json({ message: 'MovieSerie Not Founded' });
        } else {
            const deletedMovieSerie = await MovieSerie.destroy({
                where: {
                    id: movieSerie.id
                }
            });
            return res.status(200).json({ message: `movieSerie deleted` })
        }
    } catch (error) {
        console.error('Error while deleting movieSerie:', error);
    }
}

module.exports = {
    postMovieSerie,
    getAllMovieSerie,
    getMovieSerie,
    updateMovieSerie,
    deleteMovieSerie
}