import {
	mysqlTable,
	mysqlSchema,
	AnyMySqlColumn,
	uniqueIndex,
	varchar,
	index,
	foreignKey,
	int
} from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
	id: int("id").autoincrement().primaryKey().notNull(),
	author: varchar("author", { length: 255 }).notNull(),
},
(table) => {
	return {
		author: uniqueIndex("author").on(table.author),
	}
});

export const categories = mysqlTable("categories", {
	id: int("id").autoincrement().primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
},
(table) => {
	return {
		name: uniqueIndex("name").on(table.name),
	}
});

export const quotes = mysqlTable("quotes", {
	id: int("id").autoincrement().primaryKey().notNull(),
	quote: varchar("quote", { length: 255 }).notNull(),
	authorId: int("author_id").notNull().references(() => authors.id, { onDelete: "restrict", onUpdate: "restrict" } ),
	categoryId: int("category_id").notNull().references(() => categories.id, { onDelete: "restrict", onUpdate: "restrict" } ),
},
(table) => {
	return {
		categoryId: index("category_id").on(table.categoryId),
		authorId: index("author_id").on(table.authorId),
	}
});