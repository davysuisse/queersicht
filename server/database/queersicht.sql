CREATE DATABLE queersicht;

use queersicht;

CREATE TABLE movie (
	id int(11) NOT NULL AUTO_INCREMENT,
	title varchar(255),
	image varchar(255),
	description_de varchar(4000),
	description_fr varchar(4000),
	country varchar(50),
	language varchar(50),
	subtitle varchar(50),
	autor varchar(50),
	duration int(11),
	year int(11),
	PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;

CREATE TABLE program (
	id int(11) NOT NULL AUTO_INCREMENT,
	date datetime,
	cinema varchar(255),
	movie_id int(11),
	PRIMARY KEY (id),
	FOREIGN KEY (movie_id) REFERENCES movie(id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;