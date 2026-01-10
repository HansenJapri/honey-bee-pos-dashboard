import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    console.error('Error:', error);

    if (error.name === 'ZodError') {
        return res.status(400).json({
            error: 'Validation Error',
            details: error,
        });
    }

    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
}
