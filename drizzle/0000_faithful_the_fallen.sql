-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `authors` (
	`id` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`author` varchar(255) NOT NULL);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255) NOT NULL);
--> statement-breakpoint
CREATE TABLE `quotes` (
	`id` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`quote` varchar(255) NOT NULL,
	`author_id` int(11) NOT NULL,
	`category_id` int(11) NOT NULL);
--> statement-breakpoint
CREATE UNIQUE INDEX `author` ON `authors` (`author`);--> statement-breakpoint
CREATE UNIQUE INDEX `name` ON `categories` (`name`);--> statement-breakpoint
CREATE INDEX `category_id` ON `quotes` (`category_id`);--> statement-breakpoint
CREATE INDEX `author_id` ON `quotes` (`author_id`);--> statement-breakpoint
ALTER TABLE `quotes` ADD CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `quotes` ADD CONSTRAINT `quotes_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`) ON DELETE restrict ON UPDATE restrict;
*/