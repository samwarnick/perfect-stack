import type { Config } from 'drizzle-kit';

export default {
	dialect: 'sqlite',
	schema: './src/db/schema.ts',
	out: './src/db/migrations',
	casing: 'snake_case',
} satisfies Config;
