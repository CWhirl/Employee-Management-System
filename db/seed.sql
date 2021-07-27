INSERT INTO departments (name)
VALUES ('Manager'), ('Sales'), ('Engineer'), ('Accounting');

INSERT INTO job (title, salary, department_id)
VALUES ('Sales Manager', 200000, 1), ('Engineer', 300000, 2), ('Sales Associate', 150000, 3), ('Bookkeeper ', 600000, 5);

INSERT INTO employees (first_name, last_name, job_id, manager_id)
VALUES ('Bill','Johnson', 1, NULL), ('Ricky', 'Goodman', 2, NULL), ('Gabe', 'Mora', 3, NULL), ('Robby', 'Mark', 4, NULL);