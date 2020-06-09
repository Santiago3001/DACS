const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: String,
        content: { type: String,
                   required: false},
        author: { type: String},
        date: Date
    }, {
        timestamps: true //cada vez que creemos un dato agrega 2 propiedades, la fecha de act y la fecha de creacion
                        // si cambiamos guarda la fecha de cuando lo creamos
    });

module.exports = model('Note', noteSchema);