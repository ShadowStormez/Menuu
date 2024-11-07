"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false)
                ? { rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false) }
                : false,
        },
        pool: { min: 2, max: 10 },
    },
});
