import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const card = sqliteTable('cards', {
	id: integer('id').primaryKey(),
	quantity: integer('quantity'),
	setcode: text('setcode'),
	collectornumber: text('collectornumber'),
	name: text('name'),
	image_uri: text('image_uri'),
});
