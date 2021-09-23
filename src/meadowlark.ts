import express from 'express'
import expressHandlebars from 'express-handlebars'
import { 
    home, 
    about, 
    notFound, 
    serverError,
    newsletterSignUp,
    newsletterSignUpProcess,
    newsletterSignUpThankYou 
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

//Form handling
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', home)

app.get('/about', about)

app.get('/newsletter-signup', newsletterSignUp)
app.post('/newsletter-signup/process', newsletterSignUpProcess)
app.get('/newsletter-signup/thank-you', newsletterSignUpThankYou)

//Custom 404 Page
app.use(notFound)

//Custom 500 Page
// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.status(500)
//     res.render('500')
// })
app.use(serverError)

if(require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port} 
        press Ctrl-C to terminate.`)
    })
} else {
    module.exports = app
}

