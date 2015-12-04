CREATE DATABLE queersicht;

use queersicht;

CREATE TABLE movie (
	movieId int(11) NOT NULL AUTO_INCREMENT,
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
	PRIMARY KEY (movieId)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;

CREATE TABLE program (
	programId int(11) NOT NULL AUTO_INCREMENT,
	date datetime,
	cinema varchar(255),
	movieId int(11),
	PRIMARY KEY (id),
	FOREIGN KEY (movieId) REFERENCES movie(movieId)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;

CREATE TABLE news (
	newsId int(11) NOT NULL AUTO_INCREMENT,
	title varchar(255),
	title_fr varchar(255),
	image varchar(255),
	description_de varchar(4000),
	description_fr varchar(4000),
	date datetime,
	PRIMARY KEY (newsId)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;