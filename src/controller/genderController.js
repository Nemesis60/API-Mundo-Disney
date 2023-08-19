const { Gender } = require("./genderController");

const postGender = async (req, res) => {
    try {
        
        const { body } = req;

        const createdCharacter = await Character.create(body);
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
        console.error('error to create gender', error);
        res.status(500).json({ message: 'Error to create gender' });
    }
}

const getAllGenders = async (req, res) => {
    try {
        const genders = await Gender.findAll();
        if (!genders) {
            return res.status(404).json({ message: 'gender Not Founded' });
        } else {

            return res.status(200).json({ data: movieSerie })

        }
    } catch (error) {
        console.error('error to found the genders:', error);
        res.status(500).json({ message: 'Error to found genders' });
    }
}

const getGender = async (req, res) => {
    try {
        const id = req.params.id;
        const gender = await Gender.findByPk(id);

        if (!gender) {
            return res.status(404).json({ message: 'Gender Not Founded' });
        }

        res.status(200).json({
            gender: gender
        });
    } catch (error) {
        console.error('error to found the gender:', error);
        res.status(500).json({ message: 'Error to gender found' });
    }
}

const updateGender = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteGender = async (req, res) => {
    try {
        const { id } = req.params;
        const gender = await Gender.findByPk(id);

        if (!gender) {
            return res.status(404).json({ message: 'Gender Not Founded' });
        } else {
            const deletedGender = await Gender.destroy({
                where: {
                    id: gender.id
                }
            });
            return res.status(200).json({ message: `gender deleted` })
        }
    } catch (error) {
        console.error('Error while deleting gender:', error);
    }
}

module.exports = {
    postGender,
    getAllGenders,
    getGender,
    updateGender,
    deleteGender
}