const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true              //limpia espacios en blancos
        }
    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);