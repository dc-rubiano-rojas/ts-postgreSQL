import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'firstapi',
    port: 5432
});

