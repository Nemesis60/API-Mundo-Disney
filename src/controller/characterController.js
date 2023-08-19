const { Character } = require("../db/models")

const postCharacter = async (req, res) => {
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
        console.error('error to create character', error);
        res.status(500).json({ message: 'Error to create character' });
    }
}

// ENDPOINT: /characters

const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.findAll({
            attributes: ['id', 'name', 'image', 'user_id']
        });

        if (!characters) {
            return res.status(404).json({ message: 'Characters Not Founded' });
        } else {
            
            return res.status(200).json({ users: characters })

        }

    } catch (error) {
        console.error('error to found the characterss}:', error);
        res.status(500).json({ message: 'Error to found characters' });
    }
}

const getCharacter = async (req, res) => {
    try {
        const id = req.params.id;
        const character = await Character.findByPk(id, {
            attributes: ['id', 'name', 'image', 'age', 'weight', 'history'], // Incluye el campo de imagen en la respuesta
        });

        if (!character) {
            return res.status(404).json({ message: 'Character Not Founded' });
          }
      
          res.json(character);
    } catch (error) {
        console.error('error to found the character:', error);
        res.status(500).json({ message: 'Error to character found' });
    }
}

const updateCharacter = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await Character.findByPk(id);

        if (!character) {
            return res.status(404).json({ message: 'Character Not Founded' });
        } else {
            const deletedCharacter = await Character.destroy({
                where: {
                    id: character.id
                }
            });
            return res.status(200).json({ message: `character deleted` })
        }
    } catch (error) {
        console.error('Error while deleting character:', error);
    }
}

module.exports = {
    postCharacter,
    getAllCharacters,
    getCharacter,
    updateCharacter,
    deleteCharacter
}