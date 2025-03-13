import { html } from 'hono/html';
import { BaseContext } from '../context';

export default function BaseLayout(content: HtmlContent, context: BaseContext) {
	return html`
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>${context.title ?? "The Perfect Stack"}</title>
			<link rel="stylesheet" href="/assets/picocss@2.0.6.min.css" />
			<link rel="stylesheet" href="/assets/styles.css" />
			<script src="/assets/htmx@2.0.1.min.js"></script>
			<script src="/assets/alpinejs@3.14.1.min.js"></script>
		</head>
		<body>
		<main class="container">
			${content}
		</main>
		</body>
		</html>`
};
