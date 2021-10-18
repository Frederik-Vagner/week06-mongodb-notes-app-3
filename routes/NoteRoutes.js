const express = require('express');
const noteModel = require('../models/Note.js');
const app = express();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    const note = new noteModel(req.body);
    try {
        await note.save();
        res.send(note);
      } catch (err) {
        res.status(500).send(err);
      }

    /*
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    */
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    const note = await noteModel.find({});
    try {
        res.send(note);
      } catch (err) {
        res.status(500).send(err);
      }
    /*
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    */

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        await noteModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(note)
      } catch (err) {
        res.status(500).send(err)
      }
    /*
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    */
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.patch('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        await noteModel.findByIdAndUpdate(req.params.id, req.body)
        await noteModel.save()
        res.send(note)
      } catch (err) {
        res.status(500).send(err)
      }
    /*
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    */
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const note = await noteModel.findByIdAndDelete(req.params.id)
    
        if (!note) res.status(404).send("No item found")
        res.status(200).send()
      } catch (err) {
        res.status(500).send(err)
      }
    /*
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    */
    //TODO - Write your code here to delete the note using noteid
});

module.exports = app