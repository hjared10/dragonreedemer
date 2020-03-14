### Schema

CREATE DATABASE dragons_db;
USE dragons_db;

CREATE TABLE dragon
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	evil tinyint(1) DEFAULT 0,
	PRIMARY KEY (id)
);
