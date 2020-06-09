const  userCtrl = {};

const userModels =require('../models/user');

    userCtrl.getUsers = async (req, res) => {
        try {
            const users = await userModels.find();
            res.json(users);
        }
        catch (err) {
            res.status(400).json({
                error: err
            });
        }
    };

    userCtrl.createUser = async (req, res) => {
        try {
            const { username } = req.body;

            const newUser = new userModels({ username });
            await newUser.save();
            res.json('Usuario Creado');
        } catch (e) {
            console.log(e)
            res.json(e.errmsg);
        }
    };

    userCtrl.deleteUser = async (req, res) => {
        const { id } = req.params;
        await userModels.findByIdAndDelete(id);
        res.json('Usuario Eliminado');
    }

module.exports = userCtrl;