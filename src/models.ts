import type { InferSelectModel } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';
import { messages } from './db/schema';

export type Message = InferSelectModel<typeof messages>;
export const insertMessageSchema = createInsertSchema(messages);