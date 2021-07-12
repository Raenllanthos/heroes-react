-- CREATE TABLE public.user(
-- 	id VARCHAR PRIMARY KEY,
-- 	first_name VARCHAR(150),
-- 	last_name VARCHAR(150),
-- 	email VARCHAR(150),
-- 	password VARCHAR,
-- 	g_auth_verify BOOLEAN,
-- 	token VARCHAR,
-- 	date_created TIMESTAMP WITHOUT TIME ZONE
-- );

-- CREATE TABLE public.hero(
-- 	id VARCHAR PRIMARY KEY,
-- 	name VARCHAR(150),
-- 	power VARCHAR(150),
-- 	is_a_hero VARCHAR(10),
-- 	description VARCHAR,
-- 	back_story VARCHAR,
-- 	date_created TIMESTAMP WITHOUT TIME ZONE,
--  	user_token VARCHAR
-- );

-- ALTER TABLE public.user
-- DROP COLUMN first_name, DROP COLUMN last_name

SELECT * FROM public.hero