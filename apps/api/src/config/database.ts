import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../db/schema/index.js';

// Use DATABASE_URL from environment (set in Vercel or local .env)
const connectionString = process.env.DATABASE_URL!;

// Check if we're in production/serverless environment (Vercel uses VERCEL env var)
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;

// Configure for serverless environment
const client = postgres(connectionString, {
    ssl: isProduction ? 'require' : undefined,
    max: 1, // Limit connections for serverless
    idle_timeout: 20,
    connect_timeout: 10,
});
export const db = drizzle(client, { schema });

