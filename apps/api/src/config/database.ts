import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../db/schema';

// Use DATABASE_URL from environment (set in Vercel or local .env)
const connectionString = process.env.DATABASE_URL!;

// Configure for serverless environment
const client = postgres(connectionString, {
    ssl: 'require',
    max: 1, // Limit connections for serverless
    idle_timeout: 20,
    connect_timeout: 10,
});
export const db = drizzle(client, { schema });

