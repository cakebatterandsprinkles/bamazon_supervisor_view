DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE departments(
  dep_id INT NOT NULL AUTO_INCREMENT,
  dep_name VARCHAR(100) NOT NULL UNIQUE,
  over_head_costs INT default 0,
  PRIMARY KEY (dep_id)
); 

INSERT INTO departments (dep_name, over_head_costs)
VALUES ("Accesories", 20);

INSERT INTO departments (dep_name, over_head_costs)
VALUES ("Technology", 20);

INSERT INTO departments (dep_name, over_head_costs)
VALUES ("Kitchen Items", 20);

INSERT INTO departments (dep_name, over_head_costs)
VALUES ("Food", 20);

INSERT INTO departments (dep_name, over_head_costs)
VALUES ("Home Furniture", 20);