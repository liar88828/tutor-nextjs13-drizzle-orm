import { drizzle } from "drizzle-orm/mysql2";
import { config } from '@/db/config';
import { authors, categories, quotes } from "@/db/schema"
import { eq } from "drizzle-orm"


import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  database: "quotes",
});

const db = drizzle(poolConnection);

//
// export default async function getAllQuote(): Promise<Quote[]> {
//   const conn = connect( config )
//   const db = drizzle( conn )
//
//   const result: Quote[] = await db.select( {
//     quote: quotes.quote,
//     author: quotes.author,
//     category: quotes.category
//   } )
//   .from( quotes )
//   .innerJoin( authors, eq( quotes.authorId, authors.id ) )
//   .innerJoin( authors, eq( quotes.categoryId, categories.id ) )
//
// }