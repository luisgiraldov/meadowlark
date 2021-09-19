//Custom module
import { getFortune }from './fortune'
import express, { 
    Request, 
    Response,
    NextFunction, 
    ErrorRequestHandler } from 'express';

//Custom 500 Page middleware
export const serverError: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    // console.error(err.message)
    res.status(500)
    res.render('500')
};

//Custom 404 Page middleware
export const notFound = (req: Request, res: Response) => {
    res.status(404)
    res.render('404')
}

export const home = (req: Request, res: Response) => res.render('home')

export const about = (req: Request, res: Response) => res.render('about', { fortune: getFortune() })

