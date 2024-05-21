import express from "express"
import cors from 'cors'
app.use(cors())
const app = express();
app.listen(3000, ()=>{
    console.log('Server is listening on port 3000')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/agents', (req, res) => {
    res.send([
        '- Jett', 
        '- Sage', 
        '- Skye', 
        '- Fade',
        '- Raze', 
        '- Sova', 
        '- Yoru', 
        '- Harbor',
        '- Breach', 
        '- Viper', 
        '- Astra', 
        '- Gekko',
        '- Omen', 
        '- Cypher',
         '- Kay/o', 
         '- Deadlock',
         '- Brimstone', 
         '- Reyna', 
         '- Chamber', 
         '- Iso',
         '- Phoenix', 
         '- Killjoy', 
         '- Neon'
    ])
})