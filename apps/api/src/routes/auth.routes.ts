import { Router } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '../config/auth.js';

export const authRoutes = Router();

// Better Auth handles all auth routes
authRoutes.all('/*', toNodeHandler(auth));
