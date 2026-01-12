// Runner script to bypass Windows path issues with & character for drizzle-kit
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set DATABASE_URL for Neon PostgreSQL
process.env.DATABASE_URL = "postgresql://neondb_owner:npg_DdgcR0oiGtj2@ep-proud-queen-a1sovfqz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

const drizzleKitPath = join(__dirname, 'node_modules', 'drizzle-kit', 'bin.cjs');

const child = spawn('node', [drizzleKitPath, 'push'], {
    cwd: __dirname,
    stdio: 'inherit',
    env: { ...process.env }
});

child.on('close', (code) => {
    process.exit(code);
});
