import { HtmlEscapedString } from 'hono/dist/types/utils/html';

declare global {
	type HtmlContent = HtmlEscapedString | Promise<HtmlEscapedString>;
}
