import express, { 
    Request, 
    Response,
    NextFunction, 
    ErrorRequestHandler } from 'express';
import expressHandlebars from 'express-handlebars'

//Custom module
import { getFortune } from '../lib/fortune'

//Custom 500 Page middleware
export const custom500ErrorPageMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
};

const app = express()

const port = process.env.PORT || 8080

//Configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

//Configure static route middleware
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    res.render('about', { fortune: getFortune() })
})

//Custom 404 Page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//Custom 500 Page
// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.status(500)
//     res.render('500')
// })
app.use(custom500ErrorPageMiddleware)


app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; 
    press Ctrl - C to terminate.`
))