drop database if exists business;
create database business;

use business;

create table department(
    id int auto_increment,
    roles_id int,
    department_name varchar(25) not null,
    primary key (id)
);

create table roles (
    id int auto_increment,
    title varchar(30),
    salary int,
    department_id int,
    primary key(id),
    foreign key (department_id) references department(id)
    
);

create table employees (
    id int auto_increment,
    first_name varchar (30),
    last_name varchar(30),
    roles_id int, 
    manager_id int
);