USE mysql;
ALTER USER 'root'@'%' IDENTIFIED BY 'my-secret-pw';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'my-secret-pw';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE(`email`)
);

CREATE TABLE IF NOT EXISTS `job` (
  `job_id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(2083) NOT NULL,
  `position` varchar(200) NOT NULL,
  `company` varchar(200) NOT NULL,
  `location` varchar(200),
  `app_status` varchar(200) NOT NULL,
  `date_updated` DATE NOT NULL,
  `deadline` DATE NOT NULL,
  `description` TEXT,
  `notes` TEXT,
  `user_id` int(11),
  PRIMARY KEY (`job_id`),
  CONSTRAINT fk_job_user_id FOREIGN KEY (`user_id`) REFERENCES users(`id`)
);

CREATE TABLE IF NOT EXISTS `post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `content` longtext NOT NULL,
  `tag` varchar(80),
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11),
  PRIMARY KEY (`post_id`),
  CONSTRAINT fk_post_user_id FOREIGN KEY (`user_id`) REFERENCES users(`id`)
);

SELECT u.username, j.position FROM users u Left Join job j on u.id = j.user_id;

