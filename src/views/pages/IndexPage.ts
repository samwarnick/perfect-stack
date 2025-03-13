import { html } from 'hono/html';
import { BaseContext } from '../context';
import BaseLayout from '../layouts/BaseLayout';
import Hello from '../components/Hello';
import { Message } from '../../models';

export interface PageContext extends BaseContext {
	messages: Message[];
}

export default function IndexPage(context: PageContext) {
	const { messages } = context;
	return BaseLayout(
		html`
			${Hello()}
			<ul id="messages">
				${messages.map((m) => html`<li>${m.message}</li>`)}
			</ul>
			<form hx-post="/" hx-swap="beforeend" hx-target="#messages">
				<fieldset role="group">
					<input name="message" type="text" placeholder="Enter your message" />
					<input type="submit" value="Submit" />
				</fieldset>
			</form>
		`,
		context,
	);
}
