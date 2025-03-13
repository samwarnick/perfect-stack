import { db } from '../db/db';
import { messages } from '../db/schema';
import IndexPage from '../views/pages/IndexPage';
import { zValidator } from '@hono/zod-validator';
import { insertMessageSchema } from '../models';
import { html } from 'hono/html';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
	const allMessages = await db.select().from(messages);
	return c.html(IndexPage({ messages: allMessages, title: 'Hello' }));
});

app.post('/', zValidator('form', insertMessageSchema), async (c) => {
	const newMessage = c.req.valid('form');
	await db.insert(messages).values({ message: newMessage.message });
	return c.html(html`<li>${newMessage.message}</li>`);
});

export default app;