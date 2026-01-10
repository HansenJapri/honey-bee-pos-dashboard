import { Request, Response, NextFunction } from 'express';
import { auth } from '../config/auth';

export async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any,
        });

        if (!session) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Attach session to request
        (req as any).session = session;
        (req as any).user = session.user;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
