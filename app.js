const express = require('express')
const path = require('path')
const { Sequelize } = require('sequelize');

// const pg = require('pg')
// const postgres = require('postgres')

const bodyParser = require('body-parser')
const { engine } = require('express-handlebars');

const PORT = process.env.PORT || 5000

const sequelize = new Sequelize('agrolink', 'root', 'Akpan123', 
{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
    .then(()=>{
        console.log("Connection to database is succefull")
    }).catch((err)=>{
        console.log(err)
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

// route to the login page
app.get('/login', (req, res) => {
    res.render('login')

})

// route to the signup page
app.get('/signup', (req, res) => {
    res.render('sign-up-form')

})

// route to the profile page
app.post('/userpage', (req, res) => {
    res.render('userpage')

})




// serving a static folder.
app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})