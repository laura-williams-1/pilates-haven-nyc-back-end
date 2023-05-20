DROP DATABASE IF EXISTS studios_dev;

CREATE DATABASE studios_dev;

\c studios_dev;


CREATE TABLE studios (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
address TEXT NOT NULL,
zipcode INT NOT NULL,
city TEXT NOT NULL CHECK (LOWER (city) IN ('manhattan', 'brooklyn', 'queens', 'bronx', 'staten island')),
state CHAR(2) DEFAULT 'NY' ,
phone_number VARCHAR,
email VARCHAR,
website_url VARCHAR,
instagram_handle VARCHAR,
description VARCHAR,
specialization VARCHAR,
offers_group BOOLEAN,
offers_mat BOOLEAN,
offers_reformer BOOLEAN,
offers_duets BOOLEAN,
offers_privates BOOLEAN, 
offers_membership BOOLEAN,
offers_new_client_deal BOOLEAN,
is_black_owned BOOLEAN) ;

