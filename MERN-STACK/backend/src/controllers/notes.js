const notesCtrl = {};

const noteModels =require('../models/notes');

    notesCtrl.getNotes = async (req, res) => {
        const notes = await noteModels.find();
        res.json(notes);
    };

    notesCtrl.createNote = async (req, res) => {
        const { title, content, author, date } = req.body;
        const newNote = new noteModels({
            title,
            content,
            author,
            date
        });
        await newNote.save();
        res.json('Nueva nota agregada');
    };

    notesCtrl.getNote = async (req, res) => {
        const note = await noteModels.findById(req.params.id);
        res.json(note);
    }

    notesCtrl.deleteNote = async (req, res) => {
        await noteModels.findByIdAndDelete(req.params.id)
        res.json('Nota Eliminada');
    }

    notesCtrl.updateNote = async (req, res) => {
        const { title, content, date, author } = req.body;
        await noteModels.findByIdAndUpdate(req.params.id, {
            title,
            content,
            date,
            author
        });
        res.json('Nota Actualizada');
}

module.exports = notesCtrl ;