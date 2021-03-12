BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS resto (
	Id int(4) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Name VARCHAR(100),
	Address VARCHAR(100),
	Zip_Code VARCHAR(100),
  Phone_Number VARCHAR(100),
	Website VARCHAR(100),
	Latitude DECIMAL(10, 2),
	Longitude DECIMAL(10, 2),
	COLUMN8 VARCHAR(100)
);

INSERT INTO resto VALUES (null,'Le RIMA restaurant','Rue Si El Houas, Béjaïa','','0697 70 62 85','',36.7530326,5.0855038,'');
INSERT INTO "resto" VALUES (2,' MOURADI Et Fils 

    Restaurant Spécialité Poissons, 

      Méchoui De Chevreau Et La grillade ',' stade, 

      BRANDY la route de, 

      Béjaïa ','',' 0776 24 58 08 ','',36.7511143,5.0515155,'');
INSERT INTO "resto" VALUES (3,' Restaurant La Citadelle.',' Béjaïa ','',' 0553 90 54 01 ',' https :// m.facebook.com / La - citadelle - 693908500716149 / ',36.7501704,5.0710431,'');
INSERT INTO "resto" VALUES (4,' Restaurant Aloui ',' Rue tikamera Edimco, 

      06000 ','',' 0670 29 81 17 ','',36.7460552,5.0489294,'');
INSERT INTO "resto" VALUES (5,' FAB restaurant grill ',' Béjaïa ','',' 0550 98 02 39 ','',36.7525993,5.0846606,'');
INSERT INTO "resto" VALUES (6,' O Feeling ',' Béjaïa ','',' 0770 64 05 91 ','',36.7491114,5.0569294,'');
INSERT INTO "resto" VALUES (7,' Le chêne ',' Village bouissi, 

      ouzellaguen, 

      bejaia Ouzellaguen DZ, 

      06010 ','',' 0552 66 21 49 ',' http :// www.facebook.com / restaurantlechene ',36.551641,4.574598,'');
INSERT INTO "resto" VALUES (8,' Tacos de lyon bejaia ',' Naciria % u060C 06000 ','',' 0561 40 02 69 ','',36.7498474,5.0639473,'');
INSERT INTO "resto" VALUES (9,' Restaurant La Corniche ',' Brise de mer, 

      Béjaïa ','','','',36.7589648,5.0948533,'');
INSERT INTO "resto" VALUES (10,' Mac Badji ',' Rue de la Liberté, 

      Béjaïa 06000 ','6000',' 0550 45 64 49 ','',36.7515178,5.0667555,'');
INSERT INTO "resto" VALUES (11,' RUBIS RESTO ',' cité 120logts, 

      Béjaïa ','',' 0770 96 06 68 ',' https :// www.facebook.com / rubis.res ',36.748455,5.057169,'');
INSERT INTO "resto" VALUES (12,' Hôtel Brahmi HB ',' 25 Rue de la Liberté, 

      Béjaïa 06000 ','6000',' 034 12 71 71 ',' http :// www.hotelbrahmi.com / ',36.7528102,5.0727501,'');
INSERT INTO "resto" VALUES (13,' Resto Sohaib ',' 02, 

      rue Hocine Hihat, 

      Béjaïa ','',' 034 22 19 17 ','',36.7531121,5.0841755,'');
INSERT INTO "resto" VALUES (14,' Speed Food Béjaia ',' 7 Rue de la Liberté, 

      Béjaïa 06000 ','6000',' 0561 77 70 02 ','',36.7527981,5.0725475,'');
INSERT INTO "resto" VALUES (15,' Restaurent hotel essalam ',' N12, 

      Béjaïa ','','','',36.729399,5.059469,'');
INSERT INTO "resto" VALUES (16,' Restaurent hotel essalam ',' N12, 

      Béjaïa ','','','',36.729399,5.059469,'');
INSERT INTO "resto" VALUES (17,' Kings Chapati Tunisienne ','Boulevard de l A.L.N Béjaïa 06000','','','',36.7510886,5.0615382,'');
INSERT INTO "resto" VALUES (18,'SALDAE','Unnamed Road','','0551 98 32 95','',36.7486692,5.0651163,'');
INSERT INTO "resto" VALUES (19,'Pizzeria ONLY PIZZA','Béjaïa 06000','','0552 23 99 62','https://m.facebook.com/PIZZERIAONLYPIZZA/',36.7485131,5.0579181,'');
INSERT INTO "resto" VALUES (20,'Restaurant Les Oliviers','Chemin Ouaret Rabah, Béjaïa 06000','6000','0656 97 44 17','',36.7538178,5.0890517,'');
INSERT INTO "resto" VALUES (21,'Restaurant Oublat','Unnamed Road, Béjaïa','','0795 30 08 79','',36.7406552,5.041272,'');
INSERT INTO "resto" VALUES (22,'Pizzeria ONLY PIZZA','Béjaïa 06000','','0552 23 99 62','https://m.facebook.com/PIZZERIAONLYPIZZA/',36.7485131,5.0579181,'');
INSERT INTO "resto" VALUES (23,'TACO  By Pizza Delice','Route des Aurès, citee 120 logements, naceria, Béjaïa','','0556 62 16 65','',36.7491343,5.0630731,'');
INSERT INTO "resto" VALUES (24,'Royaume food','Rue de la Liberté, Béjaïa 06000','6000','0670 15 72 77','',36.7519444,5.0683558,'');
INSERT INTO "resto" VALUES (25,'Restaurant Petit Prince','Boulevard Krim Belkacem, Béjaïa 06000','6000','0561 53 60 98','',36.7355307,5.047916,'');
INSERT INTO "resto" VALUES (26,'La petite cabane',' Boulevard de lA.L.N Béjaïa 06000','','055890384','',36.7513872,5.0579598,'');
INSERT INTO "resto" VALUES (27,' Restaurant La Couronne ',' École Naceria, 

    Rue Belkacem Omar, 

    Béjaïa 06000 ','6000','','',36.7645536,5.0594622,'');
INSERT INTO "resto" VALUES (28,' InnovaFood ',' 3 Route des Aurès, 

    Béjaïa 06000 ','6000','','',36.7491488,5.0627864,'');
INSERT INTO "resto" VALUES (29,' 59 Boulevard Krim - belkacem Cité Remla Béjaïa ',' Béjaïa ','',' 0550 57 00 66 ','',36.7346426,5.048823,'');
INSERT INTO "resto" VALUES (30,' Hôtel Essalem ',' Route nationale n° 12 % u060C Béjaïa 06000 ','',' 034 11 45 41 ','',36.7294153,5.0598663,'');
INSERT INTO "resto" VALUES (31,' Bylka ',' Rue Boudechicha Tahar, 

    Béjaïa 06300 ','6300',' 0794 24 99 84 ','',36.7496432,5.0551319,'');
INSERT INTO "resto" VALUES (32,' Pizzeria El Magnifico ',' Béjaïa, 

    cité tobal, 

    Béjaïa ','',' 0551 40 09 93 ','',36.7510166,5.0712536,'');
INSERT INTO "resto" VALUES (33,' Rotisserie Brandy ',' Rte de la Briqueterie, 

    Béjaïa ','',' 0771 40 03 86 ','',36.7510775,5.0513867,'');
INSERT INTO "resto" VALUES (34,' fast food pegasus ',' Boulevard Krim Belkacem, 

    Béjaïa 06000 ','6000','','',36.7456339,5.0487851,'');
INSERT INTO "resto" VALUES (35,' Cafe De France ',' Rue Si El Houas, 

    Béjaïa ','',' 034 17 46 10 ','',36.7532077,5.0858331,'');
INSERT INTO "resto" VALUES (36,' Le Malaga ',' 2, 

    Rue Ougana Ahmed, 

    Béjaïa ','',' 0555 64 07 51 ','',36.7514231,5.0828399,'');
INSERT INTO "resto" VALUES (37,' Kitchen Burger ',' Unnamed Road ','','','',36.747658,5.065448,'');
INSERT INTO "resto" VALUES (38,' A la corbeille Fleurie(Aouchiche) ',' Rue Larbi Ben Mhidi % u060C Béjaïa ','',' 034 22 99 47 ','',36.7528452,5.0844953,'');
INSERT INTO "resto" VALUES (39,' Le Bistrot du Port ',' Lieu Dit Rampe Du Port Bt A9n° 15 - 13 à, 

    Béjaïa ','',' 0667 06 84 23 ','',36.7519524,5.0854307,'');
INSERT INTO "resto" VALUES (40,' Pizzeria Pedro ',' Rue Boudechicha Tahar, 

    Béjaïa ','','','',36.7499556,5.057175,'');
INSERT INTO "resto" VALUES (41,' Pizzeria La Roma ',' 42, 

    Béjaïa 06000 ','6000',' 0772 73 88 96 ','',36.7495619,5.0710245,'');
INSERT INTO "resto" VALUES (42,' Restaurant Pizzeria LE BON COIN ',' N24, 

    Béjaïa ','',' 0561 76 24 44 ','',36.752855,5.055619,'');
INSERT INTO "resto" VALUES (43,' Tacos Lyonnais ',' boulevard Tacos lyonnais, 

    Béjaïa ','',' 0542 16 70 42 ','',36.7474967,5.0532161,'');
COMMIT;
