const express = require('express')
const cors = require('cors') 
const { response } = require('express')
const app = express()

app.use(express.json())
app.use(cors())

let notes = [
    {
    userId: 1,
    id: 1,
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 2,
    id: 2,
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 3,
    id: 3,
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
]

app.get('/api/notes', (req, res) => {
  res.send(notes)
})

app.post('/api/notes', (req, res) =>{
    const note = req.body
console.log(note)
    const newNote = {
        id: notes.length + 1,
        body: note.body,
        }
        notes = notes.concat(newNote)
        res.json(newNote)
     
})


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})