import { html } from 'hono/html';

export default function Hello() {
	return html`<h1>Hello, ${Bun.env.NAME}</h1>`;
};
