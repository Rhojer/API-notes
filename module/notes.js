const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date
})
noteSchema.set('toJSON',{
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject.__v
        delete returnedObject._id
    }
})
const Note = mongoose.model('note', noteSchema)

module.exports = Note