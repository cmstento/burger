create database burgers_db;
use burgers_db;
create table burgers(
    id int primary key auto_increment,
    burger_name text,
    devoured int
);
