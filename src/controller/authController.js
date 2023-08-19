const { User } = require("../db/models");
const { encrypt, compare } = require("../utils/handleBcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
    try {
        const { body } = req;
        const compareEmail = await User.findOne({
            where: {
                email: body.email
            }
        });
        if (compareEmail) {
            return res.status(401).json({ message: 'This Email is already in use' });
        }

        if (!compareEmail) {

            

            const hashPassword = await encrypt(body.password);
            body.password = hashPassword;
            const createdUser = await User.create(body);

            const token = jwt.sign(createdUser, process.env.JWT_SECRET, {
                expiresIn: "1h"
            })
            res.status(200).json({
                userCreated: createdUser,
                token: token
            })
        } else {
            return res.status(401).json({ message: 'Bad Credentials' });
        }
    } catch (error) {
        console.log(".-------------", error);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email } = req.body;
        const findByEmail = await User.findOne({
            where: {
                email: email
            }
        })

        if (!findByEmail) {
            return res.status(401).json({ message: 'este Email or password incorrect' });
        }
        const decryptPassword = await compare(body.password, findByEmail.password)
        const token = jwt.sign(createdUser, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        if (!decryptPassword) {
            return res.status(401).json({ message: 'Email or password incorrect' });
        } else {
            res.send(200).json({
                message: "todo right",
                token: token
            })
        }
    } catch (error) {
        console.log("--------------", error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();

        if (!users) {
            return res.status(404).json({ message: 'User Not Founded' });
        } else {
            const usersResponse = users.map(user => ({
                id: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }));
            return res.status(200).json({ users: usersResponse })
        }
    } catch (error) {
        console.log("-------", error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id)

        const userResponse = {
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }

        if (!user) {
            return res.status(404).json({ message: 'User Not Founded' });
        } else {
            return res.status(200).json({ user: userResponse })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User Not Founded' });
        } else {
            const deletedUser = await User.destroy({
                where: {
                    id: user.id
                }
            });
            return res.status(200).json({ message: `user deleted` })
        }
    } catch (error) {
        console.error('Error while deleting user:', error);
    }
}

const recoverUser = async (req, res) => {
    try {
        const { body } = req;
        const user = await User.findOne({
            where: {
                email: body.email
            }
        })
        if (!user) {
            return res.status(404).json({ message: 'User Not Founded' });
        } else {
            const recovered = await User.restore({
                where: {
                    email: user.email
                }
            })

            if (recovered > 0) {
                return res.status(200).json({
                    message: `Welcome back ${user.username} Account Restored`,
                    account: recovered
                })
            } else {
                return res.status(404).json({
                    message: "User active Or Already Restored"
                })
            }
        }
    } catch (error) {
        console.error('Error while restoring user:', error);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    recoverUser
}