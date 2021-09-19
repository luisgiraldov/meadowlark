import express from 'express'
import expressHandlebars from 'express-handlebars'
import { 
    home, 
    about, 
    notFound, 
    serverError 
} from './lib/handlers'

const app = express()

const port = process.env.PORT || 8080

//Configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

//Configure static route middleware
app.use(express.static('public'))

app.get('/', home)

app.get('/about', about)

//Custom 404 Page
app.use(notFound)

//Custom 500 Page
// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.status(500)
//     res.render('500')
// })
app.use(serverError)


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; 
    press Ctrl - C to terminate.`
))