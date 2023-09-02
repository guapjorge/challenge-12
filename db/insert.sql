INSERT INTO department
    (department_name)
VALUES
   ("sales"),
   ("meat"),
   ("produce"),
   ("merchandising"),
   ("front house");

   INSERT INTO roles
    (title, salary, department_id)
VALUES
   ("sales manager", 150000, 1),
   ("butcher",10000, 2),
   ("associate", 40000, 3),
   ("merchandiser", 10000, 4),
   ("cashier", 150, 5);


INSERT INTO employees
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 2),
    ('Ashley', 'Rodriguez', 3, 3),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 2, 4),
    ('Malia', 'Brown', 5, 6),
    ('Sarah', 'Lourd', 3, NULL),
    ('Tom', 'Allen', 4, 5);