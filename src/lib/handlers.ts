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

