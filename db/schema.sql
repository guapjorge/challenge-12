drop database if exists business;
create database business;

use business;

create table department(
    id int auto_increment primary key,
    department_name varchar(25) not null
);

create table roles (
    id int auto_increment primary key,
    title varchar(30),
    salary int,
    department_id int,
    foreign key (department_id) references department(id)
    
);

create table employees (
    id int auto_increment primary key,
    first_name varchar (30),
    last_name varchar(30),
    roles_id int, 
    manager_id int,
    foreign key (roles_id) references roles(id),
    foreign key (manager_id) references employees(id)
);
