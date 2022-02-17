require('./mongo')
const express = require('express')
const cors = require('cors') 
const { response } = require('express')
const app = express()
const Note = require('./module/notes.js')
const { findByIdAndDelete } = require('./module/notes.js')

app.use(express.json())
app.use(cors())


app.get('/api/notes', (req, res, next) => {
  Note.find({})
  .then(note=>{
    console.log(note)
    res.json(note)
  })
  .catch(err=>
    next(err))
})

app.get('/api/notes/:id', (req,res) =>{
  const {id} = req.params
  Note.findById(id)
  .then(result =>{
    res.json(result)
  })
})

app.post('/api/notes', (req, res) =>{
    const note = req.body
    const newNote = new Note({
      content: note.content,
      date: new Date()
    })
        newNote.save()
        .then(result=>{
          res.json(result)
        })
     
})

app.delete('/api/notes/:id', (req,res)=>{
const {id} = req.params
Note.findByIdAndDelete(id, (err,doc)=>{
  if (err){
    console.log(err)
}
else{
    console.log("Deleted : ", doc);
}
})
})

app.use((error, req, res, next)=>{
  console.error(error)
  response.status(404)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})