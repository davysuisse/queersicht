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

INSERT INTO movie (movieId, title, image, description_de, description_fr, country, language, subtitle, autor, duration, year) VALUES (1, 'Hidden Away', 'escondidas/escondidas.jpg', 'Ibrahim, ein 14-jähriger Marokkaner, läuft verloren durch die Strassen einer Grossstadt. Man hat ihn soeben darüber informiert, dass er in zwei Tagen ausgeschafft werden soll, worauf er die Flucht ergreift. Er weiss nicht, wohin. Rafa, ein 14-jähriger Spanier, flüchtet vor einem Mädchen. Marta erwartet mehr, als er ihr geben kann. Die Wege der beiden Jungen kreuzen sich.', 'Ibrahim, un marocain de 14 ans, marche perdu dans les rues d\'une grande ville. On vient de lui informer qu\'il sera expulsé du pays dans deux jours, après quoi il prendra la fuite. Il ne sait pas où aller. Rafa, un jeune espagnol de 14 ans, fuit une fille. Marta attend plus que ce qu\'il peut lui donner. Les chemins des deux jeunes vont se croiser.', 'ESP', 'SP', 'GE', 'Mikel Rueda', 88, 2014);
INSERT INTO movie (movieId, title, image, description_de, description_fr, country, language, subtitle, autor, duration, year) VALUES (2, 'Carol', 'carol/carol.jpg', 'New York, frühe 1950er-Jahre. Therese Belivet arbeitet in einem Manhattaner Kaufhaus und träumt von einem erfüllteren Leben, als sie der verführerischen Carol Aird begegnet, die in einer scheiternden Ehe gefangen ist. Es funkt sofort zwischen den beiden, und die Unschuld ihres ersten Treffens verwandelt sich bald in eine tiefe Verbundenheit. Als Carols Verstrickung mit Therese ans Licht kommt, setzt ihr Ehemann sie unter Druck und stellt ihre Qualitäten als Mutter in Frage. Die beiden Frauen fliehen aus ihren Leben und brechen gemeinsam zu einer Reise ins Ungewisse auf. Schon bald müssen sie jedoch feststellen, dass eine Konfrontation mit sich selbst und ihrer Hingabe zueinander unausweichlich wird. Todd Haynes bringt den Erfolgsroman von Patricia Highsmith, der 1952 unter dem Titel "Salz und sein Preis" erschien, jetzt auf die grosse Kinoleinwand. In den Hauptrollen sind Oscar-Preisträgerin Cate Blanchett und Rooney Mara zu sehen – ein Zusammenprall höchst anziehender Gegensätze.', 'New York, début des années 50 ans: Therese Belivet travaille dans un grand magasin de Manhattan et rêve d’une vie meilleure, lors de sa rencontre avec une de ses cliente, la séduisante Carol, emprisonnée dans un mariage peu heureux. Toutes deux sont seules le soir de Noël. Carol propose alors à Thérèse de partir avec elle pour un voyage improvisé au coeur de l\'Amérique. Un road trip au cours duquel elles vont tomber follement amoureuses. Mais cette passion est contrariée par le mari de Carol. Avec pudeur et sensibilité, ce film nous parle ici d\'un amour revendiquant sa liberté. "Carol" se base sur le roman "The Price of Sale", dont on apprendra seulement plus tard que Patricia Highsmith en est l\'auteur. L’adaptation cinématographique de Todd Haynes est prometteuse avec les talentueuses interprètes Cate Blanchett et Rooney Mara! Nous remercions chaleureusement Quinnie Cinema Films et Pathé Films pour leur collaboration et leur engagement pour le film “Carol”!', 'GB', 'EN', 'GE', 'Todd Haynes', 118, 2015);
INSERT INTO movie (movieId, title, image, description_de, description_fr, country, language, subtitle, autor, duration, year) VALUES (3, 'Nude Area', 'nudeArea/nudearea.png', 'Das Schwimmbad als Traumraum! Die Liebe entfaltet sich nicht wie eine Geschichte, nur das erste und letzte Kapitel sind uns vertraut: Liebe entsteht durch Verliebtsein und endet im Loslassen. Und dazwischen? Zärtlichkeiten und Grausamkeiten, Warten und Erfüllung, Begeisterung und Ernüchterung. Zwei Teenagerinnen erleben kindliche Grausamkeit und ausgewachsene Sinnlichkeit, Träume und Reflexionen. Das Ende der Geschichte ist bekannt.', 'La piscine comme espace de rêve! L\'amour ne se déploie ici pas comme une histoire connue, que le début et la fin nous sont familiers: On commence par tomber amoureux et on finit par lâcher prise. Et entredeux? Des câlins et des disputes, de l\'attente et de l\'épanouissement, de l\'enthousiasme et de la désillusion. Deux adolescentes vivent des disputes enfantines et une sensualité mature. Rêves et réflexions. La fin de l\'histoire est connue.', 'NL', 'OHNE', 'OHNE', 'Urszula Antoniak', 78, 2014);
INSERT INTO movie (movieId, title, image, description_de, description_fr, country, language, subtitle, autor, duration, year) VALUES (4, 'The Duke of Burgundy', 'theDukeOfBurgundy/thedukeofburgundy.jpg', 'Eine obsessive Beziehung, in der nicht so ist, wie es scheint: Cynthia, Schmetterlingsforscherin, liebt Evelyn, ihre devote Haushälterin. Evelyn liebt es, wenn Cynthia sie dominiert. Eine Beziehung, geprägt von Anziehung, Macht und Bestrafungsritualen. Die Frage ist nur: Wer dominiert wen? Wer wünscht sich was? Und was passiert, wenn die Grenzen überschritten werden? Ein Film über Obsessionen, die das Leben der beiden Frauen verändern werden.', 'Une relation obsessionnelle dans laquelle tout n\'est pas comme ce qu\'il y paraît:Cynthia, spécialiste des papillons, aime Evelyn, sa gouvernante. Evelyn aime se faire dominer par Cynthia. Une relation, marquée par la force et les châtiments rituels. Les questions qui seposent: Qui domine qui? Qui veut quoi? Et qu\'est-ce qu\'il se passerait, si les limites étaient dépassées? Un film sur les obsessions, qui vont changer la vie des deux femmes.', 'GB', 'EN', 'GE', 'Peter Strickland', 104, 2014);
INSERT INTO movie (movieId, title, image, description_de, description_fr, country, language, subtitle, autor, duration, year) VALUES (5, 'Banana', 'banana/banana.jpg', 'TV-Serien sind das neue Kino. In Grossbritannien trug man dem Trend Rechnung und, erneut unter Russell T Davies, entstanden 15 Jahre nach „Queer as Folk“ „Cucumber“ und zwei Spin-Offs: „Tofu“ und „Banana“. Banana ist ein bunter Mix aus Episoden, die uns vom (Liebes-)Leben junger ProtagonistInnen in Manchester erzählen. Ob schwul, lesbisch, trans* und ganz schön queer, mal lustig, mal nachdenklich, immer liebenswert sind die Figuren und man kann nicht anders, als sie ins Herz zu schliessen. - In unserer Episodenauswahl treffen wir auf Dean, Scotty, Helen, Amy, Aiden und viele andere. Der 19-jährige Dean etwa hat einen Job, eine tolle Wohnung und ein ausgefülltes Sexleben. Doch seine Probleme holen ihn ein. Scotty trifft Yvonne und ist hin und weg von ihr. Aus der Liebe auf den ersten Blick wird jedoch eine Obsession, welche Scottys Leben grundlegend verändert. Helen erlebt eine unangenehme Geburtstagsüberraschung ihres Ex-Freundes und wird von ihrer Familie unterstützt, Amy traut sich selbst zu wenig zu, als sie sich mit Kay verabredet und schliesslich diskutieren Aiden und Frank, ob aus einem One-Night-Stand jemals mehr werden kann.', 'Les séries TV sont le nouveau cinéma. En Grande-Bretagne elles font succès et Russell T. Davies en abuse et ré-abuse: 15 ans après "Queer as Folk", il crée "Cucumber" et deux Spin-offs: "Tofu" et "Banana". "Banana" est un mix d\'épisodes qui nous racontent la vie de jeunes gens à Manchester. Les personnages, qu\'ils soient gays, lesbiens, trans* ou autres, sont parfois drôles, parfois pensifs, mais toujours très sympathiques! On ne peut que les aimer. - Dans notre choix d\'épisodes, nous rencontrons Dean, Scotty, Amy, Helen, Aiden et pleins d\'autres. Dean qui a 19 ans a un job, un super appartement et une vie sexuelle épanouie. Cependant ses problèmes le rattrapent. Scotty rencontre Yvonne et fait des allers-retours chez elle. Toutefois le coup de foudre amoureux va vite se transformer en obsession, ce qui changera sa vie. Helen fait l\'expérience d\'une surprise d’anniversaire déplaisante de son ex-petit ami et sa famille la soutient. Amy n’a aucune confiance en soi quand elle prend rendez-vous avec Kay et enfin Aiden et Frank se demandent, si à travers un One-Night-Stand quelque chose de sérieux peut se construire.', 'GB', 'EN', 'GE', 'Russell T. Davies', 88, 2015);

INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/06 20:30:00', 'Kino Rex 1', 1);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/11 18:00:00', 'Kellerkino', 1);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/09 20:30:00', 'Ciné Movie', 2);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/11 20:30:00', 'Kino Rex 1', 3);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/05 20:30:00', 'Kellerkino', 4);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/11 20:30:00', 'Cinématte', 4);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/05 20:30:00', 'ABC', 5);
INSERT INTO program (date, cinema, movie_id) VALUES ('2015/11/08 18:00:00', 'Kino Rex 1', 5);