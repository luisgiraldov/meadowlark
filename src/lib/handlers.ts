//Custom module
import { getFortune }from './fortune'
import { 
    Request, 
    Response,
    NextFunction, 
    ErrorRequestHandler } from 'express';

//Custom 500 Page middleware
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const serverError: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    // console.error(err.message)
    res.status(500)
    res.render('500')
};

//Custom 404 Page middleware
export const notFound = (req: Request, res: Response): void => {
    res.status(404)
    res.render('404')
}

export const home = (req: Request, res: Response): void => res.render('home')

export const about = (req: Request, res: Response): void => res.render('about', { fortune: getFortune() })

export const newsletterSignUp = (req: Request, res: Response): void => {
    //we will learn about CSRF later... for now, we just provide a dummy value
    res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}

export const newsletterSignUpProcess = (req: Request, res: Response): void => {
    console.log('Form (from querystring): ' + req.body.form)
    console.log('CSFR token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you')
}

export const newsletterSignUpThankYou = (req: Request, res: Response): void => {
    res.render('newsletter-signup-thank-you')
}