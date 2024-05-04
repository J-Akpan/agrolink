const express = require('express')
const path = require('path')
const pg = require('pg')
const postgres = require('postgres')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars');

const PORT = process.env.PORT || 5000



const db = new pg.Pool({
    host: "localhost",
    user: "Akpan",
    port: "5432",
    password: "Akpan08169625557",
    database: "agrolink"

})


//connection to database

db.connect((err) => {
    if (err) {
        console.log(`error in db connection ${err}`)
    } else {
        console.log(`Database succesfully connected`)
    }
})


//server app creation
const app = express()


// handlebars middlewaress
app.engine('handlebars', engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set("views", "./views");



// bodyParser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//routes 


// route to the home pag
app.get('/', (req, res) => {
    res.render('index')

})



// serving a static folder.
app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})