DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE job (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  job_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (job_id) REFERENCES job (id),
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);

INSERT INTO departments (name)
VALUES ('Manager'), ('Sales'), ('Engineer'), ('Accounting');

INSERT INTO Roles (title, salary, department_id)
VALUES ('Sales Manager', 200000, 1), ('Engineer', 300000, 2), ('Sales Associate', 150000, 3), ('Bookkeeper ', 600000, 5);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES ('Bill','Johnson', 1, NULL), ('Ricky', 'Goodman', 2, NULL), ('Gabe', 'Mora', 3, NULL), ('Robby', 'Mark', 4, NULL);

