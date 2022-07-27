

CREATE TABLE IF NOT EXISTS users (
	"email"	TEXT UNIQUE PRIMARY KEY,  
	"password"	TEXT


);

CREATE TABLE IF NOT EXISTS userInfo (
	"Name" TEXT, 
	"ProfileEmail" TEXT, 
	"LiuID" TEXT, 
	"Master" TEXT, 
	"Owner" TEXT,
	"imgUrl" TEXT,
	FOREIGN KEY (Owner) REFERENCES users(email)


);

CREATE TABLE IF NOT EXISTS 	MyCourses (
	"typ" TEXT,
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Period"	INTEGER,
	"Master" INTEGER, 
	"Owner" TEXT, 
	FOREIGN KEY (Owner) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS Termin1 (
	"typ" TEXT,
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);


CREATE TABLE IF NOT EXISTS Termin2 (
	"typ" TEXT,
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	INTEGER,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);


CREATE TABLE IF NOT EXISTS Termin3 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	INTEGER,
	"VOF"	TEXT,
	"Säsong" TEXT, 
	"Inriktning"	TEXT,
	"Period" INTEGER
);
CREATE TABLE IF NOT EXISTS Termin4 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	INTEGER,
	"VOF"	TEXT,
	"Säsong"	TEXT, 
	"Inriktning" TEXT,
	"Period" INTEGER
);
CREATE TABLE IF NOT EXISTS Termin5 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong" TEXT, 
	"Inriktning"	TEXT,
	"Period" INTEGER
	
);
CREATE TABLE IF NOT EXISTS Termin6 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);
CREATE TABLE IF NOT EXISTS Termin7 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	INTEGER,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);
CREATE TABLE IF NOT EXISTS Termin8 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);
CREATE TABLE IF NOT EXISTS Termin9 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);
CREATE TABLE IF NOT EXISTS Termin10 (
	"typ" TEXT, 
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Inriktning"	TEXT,
	"Period"	INTEGER
);



INSERT INTO "Termin1" VALUES ('Matematik','TATB01','Matematisk grundkurs','6*','G1X','-','O','HT','-',0);
INSERT INTO "Termin1" VALUES ('Övrigt','TEII43','Teknisk kommunikation på japanska 1','6*','G1X','-','V','HT','-',0);
INSERT INTO "Termin1" VALUES ('Övrigt','TEIK43','Teknisk kommunikation på kinesiska 1','6*','G1X','-','V','HT','-',0);
INSERT INTO "Termin1" VALUES ('Matematik','TATA31','Linjär algebra','8*','G1X','2','O','HT','-',1);
INSERT INTO "Termin1" VALUES ('Matematik','TATB01','Matematisk grundkurs','6*','G1X','2','O','HT','-',1);
INSERT INTO "Termin1" VALUES ('Ekonomi','TEIE17','Industriell ekonomi','10*','G1X','4','O','HT','-',1);
INSERT INTO "Termin1" VALUES ('Övrigt','TEII43','Teknisk kommunikation på japanska 1','6*','G1X','-','V','HT','-',1);
INSERT INTO "Termin1" VALUES ('Övrigt','TEIK43','Teknisk kommunikation på kinesiska 1','6*','G1X','-','V','HT','-',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THFR21','Teknisk kommunikation på franska I, del 1','2*','G1X','3','V','HT','-',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THSP21','Teknisk kommunikation på spanska I, del 1','2*','G1X','3','V','HT','-',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THTY21','Teknisk kommunikation på tyska I, del 1','2*','G1X','3','V','HT','-',1);
INSERT INTO "Termin1" VALUES ('Matematik','TATA31','Linjär algebra','8*','G1X','2','O','HT','-',2);
INSERT INTO "Termin1" VALUES ('Matematik','TATA41','Envariabelanalys 1','6','G1X','3','O','HT','-',2);
INSERT INTO "Termin1" VALUES ('Ekonomi','TEIE17','Industriell ekonomi','10*','G1X','4','O','HT','-',2);
INSERT INTO "Termin1" VALUES ('Övrigt','TEII43','Teknisk kommunikation på japanska 1','6*','G1X','-','V','HT','-',2);
INSERT INTO "Termin1" VALUES ('Övrigt','TEIK43','Teknisk kommunikation på kinesiska 1','6*','G1X','-','V','HT','-',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THFR21','Teknisk kommunikation på franska I, del 1','2*','G1X','1','V','HT','-',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THSP21','Teknisk kommunikation på spanska I, del 1','2*','G1X','1','V','HT','-',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THTY21','Teknisk kommunikation på tyska I, del 1','2*','G1X','1','V','HT','-',2);

INSERT INTO "Termin2" VALUES ('Matematik','TATA42','Envariabelanalys 2','6','G1X',2,'O','VT','-',1);
INSERT INTO "Termin2" VALUES ('Övrigt','TDDD11','Programmering, grundkurs','8*','G1X',4,'O','VT','-',1);
INSERT INTO "Termin2" VALUES ('Ekonomi','TEIO61','Industriell organisation, grundkurs','6','G2X',1,'O','VT','-',1);
INSERT INTO "Termin2" VALUES ('Matematik','TAOP52','Optimeringslära, grundkurs','4','G1X',3,'O','VT','-',2);
INSERT INTO "Termin2" VALUES ('Matematik','TATA69','Flervariabelanalys','6','G1X',2,'O','VT','-',2);
INSERT INTO "Termin2" VALUES ('Övrigt','TDDD11','Programmering, grundkurs','8*','G1X',4,'O','VT','-',2);

INSERT INTO "Termin3" VALUES ('Övrigt','TKMJ51','Hållbar utveckling och företagande','6','G1X',2,'O','HT','-',1);
INSERT INTO "Termin3" VALUES ('Övrigt','TMME27','Mekanik I','10*','G1X',3,'O','HT','-',1);
INSERT INTO "Termin3" VALUES ('Övrigt','TSRT22','Reglerteknik','6','G2X',4,'O','HT','-',1);
INSERT INTO "Termin3" VALUES ('Matematik','TAMS79','Matematisk statistik, grundkurs','4','G1X',3,'O','HT','-',2);
INSERT INTO "Termin3" VALUES ('Övrigt','TMME27','Mekanik II','10*','G1X',1,'O','HT','-',2);
INSERT INTO "Termin3" VALUES ('Ekonomi','TPPE98','Ekonomisk analys: Ekonomisk teori','4','G2X',2,'O','HT','-',2);

INSERT INTO "Termin4" VALUES ('Matematik','TAMS65','Matematisk statistik, fortsättningskurs','6*','G2X',4,'O','VT','-',1);
INSERT INTO "Termin4" VALUES ('Matematik','TAOP62','Optimeringslära, fortsättningskurs','6','G2X',3,'O','VT','-',1);
INSERT INTO "Termin4" VALUES ('Övrigt','TSRT04','Introduktionskurs i Matlab','2','G1X',2,'V','VT','-',1);
INSERT INTO "Termin4" VALUES ('Matematik','TAMS65','Matematisk statistik, fortsättningskurs','6*','G2X',2,'O','VT','-',2);
INSERT INTO "Termin4" VALUES ('Ekonomi','TPPE24','Ekonomisk analys: Besluts- och finansiell metodik','6','G2X',3,'O','VT','-',2);
INSERT INTO "Termin4" VALUES ('Övrigt','TSRT04','Introduktionskurs i Matlab','2','G1X',1,'V','VT','-',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TFBI11','Genetik och evolution','6','G1X',2,'O','VT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TFKE64','Molekylers miljöpåverkan','6','G1X',1,'O','VT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära kurser',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TDDE10','Objektorienterad programmering i Java','6','G2X',1,'O','VT','Teknisk inriktning Datateknik — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TATA82','Diskret matematik','6','G1X',1,'O','VT','Teknisk inriktning Datateknik — Preliminära kurser',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TMMV04','Termodynamik','6','G1X',2,'O','VT','Teknisk inriktning Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TMES44','Energisystem - tillförsel och användning','6','G2X',1,'O','VT','Teknisk inriktning Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TMPR02','Maskinteknisk ingenjörskonst, introduktionskurs','6*','G1X',1,'O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TMPS34','Tillverkningsteknik','6*','G1X',2,'O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TMPR02','Maskinteknisk ingenjörskonst, introduktionskurs','6*','G1X',1,'O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TMPS34','Tillverkningsteknik','6*','G1X',4,'O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin4" VALUES ('Teknisk','TSEA22','Digitalteknik','6','G1X',1,'O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin4" VALUES ('Teknisk','TSEA57','Datorteknik','6','G1X',4,'O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',2);

INSERT INTO "Termin5" VALUES ('Ekonomi','TPPE13','Produktionsekonomi','6','G2X','1','O','HT','-',1);
INSERT INTO "Termin5" VALUES ('Ekonomi','TEIO91','Projektledning','6*','G2X','-','V','HT','-',1);
INSERT INTO "Termin5" VALUES ('Övrigt','THEN18','Engelska','6*','G1X','4','V','HT','-',1);
INSERT INTO "Termin5" VALUES ('Övrigt','THFR27','Franska med teknisk inriktning','6*','G1X','4','V','HT','-',1);
INSERT INTO "Termin5" VALUES ('Övrigt','THSP27','Spanska med teknisk inriktning','6*','G1X','4','V','HT','-',1);
INSERT INTO "Termin5" VALUES ('Övrigt','THTY27','Tyska med teknisk inriktning','6*','G1X','4','V','HT','-',1);
INSERT INTO "Termin5" VALUES ('Övrigt','TEIO04','Projektledning','6','G2X','2','O','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','TEAE05','Resursteori','6','G1X','3','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','TEIM13','Interkulturell kommunikation','6','G1X','4','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','TEIO91','Projektledning','6*','G2X','-','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','THEN18','Engelska','6*','G1X','4','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','THFR27','Franska med teknisk inriktning','6*','G1X','4','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','THSP27','Spanska med teknisk inriktning','6*','G1X','4','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Övrigt','THTY27','Tyska med teknisk inriktning','6*','G1X','4','V','HT','-',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TFBI22','Cellbiologi och mikrobiella processer','6','G1X','3','O','HT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TKMJ35','Industriell ekologi för ökad resurseffektivitet','6','G2X','3','O','HT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära',2);
INSERT INTO "Termin5" VALUES ('Teknisk','NBIB45','Fysiologiska principer och etik','6','G1X','1','V','HT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TSEA52','Digitalteknik','6*','G1X','2','O','HT','Teknisk inriktning Datateknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TDDE22','Datastrukturer och algoritmer','6','G2X','3','V','HT','Teknisk inriktning Datateknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TDTS10','Datorarkitektur','6','G1X','3','O','HT','Teknisk inriktning Datateknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TSEA52','Digitalteknik','6*','G1X','4','O','HT','Teknisk inriktning Datateknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TMMV11','Strömningslära och värmeöverföring','6','G2X','2','O','HT','Teknisk inriktning Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TMMV61','Tillämpad energiteknik','6*','G2X','3','O','HT','Teknisk inriktning Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TMMV61','Tillämpad energiteknik','6*','G2X','3','O','HT','Teknisk inriktning Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TKMJ39','Resurseffektiva produkter och produktion','6','G2X','1','V','HT','Teknisk inriktning Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TMHL22','Hållfasthetslära','6','G2X','3','O','HT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TMKM86','Konstruktionsmaterial','6*','G2X','2','O','HT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TMKM86','Konstruktionsmaterial','6*','G2X','3','O','HT','Teknisk inriktning Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TMMI46','Industriell automation','6','G2X','1','V','HT','Teknisk inriktning Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TDDE18','Programmera C++','6*','G2X','2','O','HT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TSDT84','Signaler och system samt transformer','8*','G2X','4','O','HT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TSTE95','Elektronik','4','G1X','3','V','HT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin5" VALUES ('Teknisk','TDDE18','Programmera C++','6*','G2X','1','O','HT','Teknisk inriktning Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin5" VALUES ('Teknisk','TSDT84','Signaler och system samt transformer','8*','G2X','3','O','HT','Teknisk inriktning Systemteknik — Preliminära kurser',2);

INSERT INTO "Termin6" VALUES ('Ekonomi','TEIM32','Industriell marknadsföring','6','G2X','4','O','VT','-',1);
INSERT INTO "Termin6" VALUES ('Övrigt','TPTE06','Praktik','6','G1X','-','F','VT','-',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TFBI23','Ekologi och miljö','6','G1X','3','O','VT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TFBI24','Kandidatprojekt bioteknik','18*','G2X','2','O','VT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TFBI24','Kandidatprojekt bioteknik','18*','G2X','2002/3/4','O','VT','Teknisk inriktning Biologiska resurser och hållbart nyttjande — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TDDD81','Databasteknik för kandidatprojekt','6*','G2X','2','O','VT','Teknisk inriktning Datateknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TDDD83','Kandidatprojekt datateknik','18*','G2X','1/3','O','VT','Teknisk inriktning Datateknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TDDD81','Databasteknik för kandidatprojekt','6*','G2X','4','O','VT','Teknisk inriktning Datateknik — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TDDD83','Kandidatprojekt datateknik','18*','G2X','1/3','O','VT','Teknisk inriktning Datateknik — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TMMV16','Kandidatprojekt energiteknik','18*','G2X','3','O','VT','Teknisk inriktning Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TMMV58','Modellering och simulering av energi- och värmeöverföringsförlopp','6','G2X','1','O','VT','Teknisk inriktning Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TMMV16','Kandidatprojekt energiteknik','18*','G2X','3','O','VT','Teknisk inriktning Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TMMV04','Termodynamik','6','G1X','2','O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TMPS32','Kandidatprojekt maskinteknik','18*','G2X','3','O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TMPS32','Kandidatprojekt maskinteknik','18*','G2X','3','O','VT','Teknisk inriktning Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TSBB18','Inbyggda perceptionssystem','6','G2X','3','O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TSEA56','Elektronik kandidatprojekt','16*','G2X','2','O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin6" VALUES ('Teknisk','TSEA56','Elektronik kandidatprojekt','16*','G2X','-','O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin6" VALUES ('Teknisk','TSKS10','Signaler, information och kommunikation','4','G2X','3','O','VT','Teknisk inriktning Systemteknik — Preliminära kurser',2);

INSERT INTO "Termin7" VALUES ('Matematik','TAMS32','Stokastiska processer','6','A1X',1,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TAMS46','Sannolikhetslära, fortsättningskurs','6','A1X',3,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TAOP34','Optimering av stora system','6','A1X',3,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TATA34','Analys, överkurs','6*','G2X',4,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TATA44','Vektoranalys','4','G1X',1,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TATM38','Matematiska modeller i biologi','6','A1X',3,'V','HT','-',1);
INSERT INTO "Termin7" VALUES ('Matematik','TAOP04','Matematisk optimering','6','A1X',4,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Matematik','TATA34','Analys, överkurs','6*','G2X',4,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Matematik','TATA45','Komplex analys','6','G2X',1,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Övrigt','TDDD07','Realtidssystem','6','A1X',4,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDD43','Datamodeller och databaser, avancerad kurs','6*','A1X',2,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TFYA96','Fysiken bakom tekniken','6','G2X',4,'V','HT','-',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI72','Strategi och digitalisering - teknik, standarder och nätverkseffekter','6','A1X',4,'O','HT','Masterprofil Digitalisering och management — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI13','Affärssystem: process och implementering','6','A1X',2,'V','HT','Masterprofil Digitalisering och management — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI21','Strategisk organisatorisk IT-användning - workflow och knowledge management','6','A1X',4,'O','HT','Masterprofil Digitalisering och management — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI19','Ekonomisk styrning','6','A1X',2,'V','HT','Masterprofil Digitalisering och management — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TAMS32','Stokastiska processer','6','A1X',1,'V','HT','Masterprofil Finans — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TPPE17','Corporate Finance','6','G2X',4,'V','HT','Masterprofil Finans — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TPPE29','Finansiella marknader och instrument','6','A1X',2,'O','HT','Masterprofil Finans — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIE72','Affärsstrategier','6','A1X',4,'V','HT','Masterprofil Industriell marknadsföring — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIE42','Industriell försäljning','6','A1X',4,'O/V','HT','Masterprofil Industriell marknadsföring — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIM10','Industriell tjänsteutveckling','6','A1X',2,'O/V','HT','Masterprofil Industriell marknadsföring — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TMQU03','Offensiv kvalitetsutveckling, gk','6','G2X',2,'O','HT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TMQU12','Lean Production','6','A1X',2,'V','HT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TETS37','Grundläggande logistik','6','G2X',4,'O','HT','Logistik och supply chain management — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TETS23','Inköp','6','A1X',2,'V','HT','Logistik och supply chain management — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TETS27','Supply Chain Logistics','6','A1X',2,'O/V','HT','Logistik och supply chain management — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TPPE16','Produktionsstrategier','6','A1X',2,'V','HT','Produktionsledning — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TPPE76','Flödesplanering och -styrning','6','A1X',4,'V','HT','Produktionsledning — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIO90','Innovationsledning','6','A1X',2,'O','HT','Projekt, innovation och entreprenörskap — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIO07','Avancerad projektverksamhet','6','A1X',4,'V','HT','Projekt, innovation och entreprenörskap — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TKMJ49','Miljödriven affärsutveckling','6*','A1X',3,'V','HT','Projekt, innovation och entreprenörskap — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TKMJ49','Miljödriven affärsutveckling','6*','A1X',3,'V','HT','Projekt, innovation och entreprenörskap — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIE72','Affärsstrategier','6','A1X',4,'O','HT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIO90','Innovationsledning','6','A1X',2,'V','HT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TKMJ49','Miljödriven affärsutveckling','6*','A1X',3,'V','HT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TPPE16','Produktionsstrategier','6','A1X',2,'V','HT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI19','Ekonomisk styrning','6','A1X',2,'O','HT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TDEI21','Strategisk organisatorisk IT-användning - workflow och knowledge management','6','A1X',4,'V','HT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TEIE42','Industriell försäljning','6','A1X',4,'V','HT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Ekonomi','TKMJ49','Miljödriven affärsutveckling','6*','A1X',3,'V','HT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TKMJ31','Biofuels for Transportation','6','A1X',1,'V','HT','Biologiska resurser och hållbart nyttjande — Preliminära kurse',1);
INSERT INTO "Termin7" VALUES ('Teknisk','NBID31','Modelling of Biological Systems','6','A1X','3/4','O','HT','Biologiska resurser och hållbart nyttjande — Preliminära kurse',2);
INSERT INTO "Termin7" VALUES ('Teknisk','NBID79','Ekosystemtjänster inom CSR och bevarandebiologi','6','A1X',1,'V','HT','Biologiska resurser och hållbart nyttjande — Preliminära kurse',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDC88','Programutvecklingsmetodik','12*','A1X',1,'O','HT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDC17','Artificiell intelligens','6','G2X',3,'V','HT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDD23','Design och programmering av datorspel','6','A1X',2,'V','HT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X',2,'V','HT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDE18','Programmera C++','6*','G2X',2,'V','HT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDC88','Programutvecklingsmetodik','12*','A1X',1,'O','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X','-','V','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDE01','Maskininlärning','6','A1X',1,'V','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TDDE18','Programmera C++','6*','G2X',1,'V','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSIT02','Datasäkerhet','6','G2X',2,'V','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSKS33','Komplexa nätverk och stora datamängder','6','A1X',3,'V','HT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMES09','Industriella energisystem','6','A1X',2,'V','HT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMES27','Modellering av energisystem','6','A1X',3,'V','HT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMMV18','Fluidmekanik','6','A1X',1,'V','HT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMES17','Building Energy Systems','6','A1X',3,'V','HT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMES45','Energiplanering och modellering av stadsdelar','6','A1X',4,'V','HT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TANA21','Beräkningsmatematik','6','G1X',3,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKM16','Hållbara materialval','6','A1X',4,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKT80','Träteknik - Material','6','G2X',2,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMPS33','Virtuell produktion','6','A1X',4,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMPS35','Framtidens fabriker','6','A1X',3,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMPT03','Produktionsteknik, fk','6','G2X',2,'V','HT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMHP03','Tekniska system','6','A1X',4,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKA11','Modellbaserad utveckling av system-av-system','6','A1X',3,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKM90','Konstruktionsmaterial - deformationer och brott','6','A1X',2,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKT39','Maskinelement','6','G2X',2,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKT71','Affektiv produktutveckling','6','A1X',2,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMPR01','Träteknik - Produktframtagning','6','G2X',1,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TMPS31','Hållbar produktion','6','A1X',1,'V','HT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSBB06','Multidimensionell signalanalys','6*','A1X',2,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TSBB08','Digital bildbehandling grundkurs','6','A1X',4,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TSDT14','Signalteori','6','A1X',1,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TSKS01','Digital kommunikation','6*','A1X',4,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TSKS15','Detektion och estimering av signaler','6','A1X',2,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TSRT92','Modellering och inlärning för dynamiska system','6','A1X',3,'V','HT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin7" VALUES ('Teknisk','TMKA11','Modellbaserad utveckling av system-av-system','6','A1X',3,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSBB06','Multidimensionell signalanalys','6*','A1X',3,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSBB21','Beräkningsfotografi','6','A1X',4,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSEA81','Datorteknik och realtidssystem','6','A1X',4,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSIT02','Datasäkerhet','6','G2X',2,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSKS01','Digital kommunikation','6*','A1X',4,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSKS33','Komplexa nätverk och stora datamängder','6','A1X',3,'V','HT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin7" VALUES ('Teknisk','TSRT78','Digital signalbehandling','6','A1X',2,'V','HT','Systemteknik — Preliminära kurser',2);

INSERT INTO "Termin8" VALUES ('Ekonomi','TEIE06','Integrerad företagsplanering','6*','A1X','-','O','VT','-',0);
INSERT INTO "Termin8" VALUES ('Övrigt','NBIB35','Miljövård','6','G1X','2002/3/4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Matematik','TAMS29','Stokastiska processer för finansmarknadsmodeller','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Matematik','TATA53','Linjär algebra, överkurs','6*','G2X','-','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TBMI26','Neuronnät och lärande system','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDB68','Processprogrammering och operativsystem','6','G2X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD17','Informationssäkerhet, fk','6*','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD20','Konstruktion och analys av algoritmer','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD41','Data Mining - Clustering and Association Analysis','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD57','Fysisk interaktion och spelprogrammering','6','A1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD75','Effektdriven utveckling och humancentrerad design av interaktiva system','6','G2X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD97','Webbprogrammering','6','G2X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE46','Programvarukvalitet','6*','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TDEI71','Digitalisering, affärsekologier och affärsmodeller','6','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDTS04','Datornät och distribuerade system','8','G2X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Övrigt','TEIE88','Datajuridisk översiktskurs','4','G1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM09','Internationellt företagande','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO13','Ledarskap och industriellt förändringsarbete','6','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS57','Logistikanalys','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TFYA62','Introduktion till biosensorteknik','6','G2X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TFYA85','Alternativa energikällor och deras tillämpningar','6','G2X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Övrigt','TGTU91','Retorik i teori och praktik','6','G1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Övrigt','TGTU94','Teknik och etik','6','G1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TKMJ10','Industriell ekologi','6','A1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TKMJ47','Miljösystemanalytiska verktyg','6*','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES43','Analys och modellering av industriella energisystem','6','A1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKA13','Träteknik - Innovation','6','A1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT48','Konstruktionsoptimering','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT74','Avancerad CAD','6','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMMS21','Mekatronik','6','G2X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMQU31','Statistisk kvalitetsstyrning','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TPPE32','Finansiell riskhantering','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TPPE78','Kvantitativa modeller och analys inom verksamhetsstyrning','6','A1X','1','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK07','Datorgrafik','6*','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK08','Datakompression','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS13','Trådlös kommunikation','6','A1X','4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT07','Industriell reglerteknik','6','A1X','2','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT09','Reglerteori','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSTE27','Analoga och tidsdiskreta integrerade kretsar','6','A1X','3','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TVCB11','Cellbiologisk metodik','6','G2X','1/4','V','VT','-',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIE06','Integrerad företagsplanering','6*','A1X','-','O','VT','-',2);
INSERT INTO "Termin8" VALUES ('Matematik','TATA53','Linjär algebra, överkurs','6*','G2X','-','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDC78','Programmering av parallelldatorer - metoder och verktyg','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD17','Informationssäkerhet, fk','6*','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD27','Avancerad webbprogrammering','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X','-','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE07','Bayesianska metoder','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE31','Big Data Analytics','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE41','Programvaruarkitekturer','6','A1X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE46','Programvarukvalitet','6*','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TDEI35','Strategisk ekonomistyrning: Modeller för en stärkt konkurrenskraft','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Övrigt','TEAE13','Affärsrätt','6','G1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM07','Industriell marknadsanalys','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO06','Innovativt entreprenörskap','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO41','Corporate Social Responsibility','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS36','Hållbara logistiksystem','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS56','Logistik och kvalitet inom vården','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Övrigt','TGTU95','Vetenskapens och teknologins filosofi','6','G1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TKMJ47','Miljösystemanalytiska verktyg','6*','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES21','Industrial Energy Systems','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES41','Strategisk utveckling av hållbara energisystem','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMHL24','Hållfasthetslära - Dimensioneringsmetoder','6','G2X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT57','Produktmodellering','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT77','Systemsäkerhet','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT83','Småskalig förnybar energiomvandling','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMME11','Markfordonsmekanik','6','A1X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMPS27','Produktionssystem','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMQU04','Six Sigma Quality','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMQU13','Kundfokuserad produkt- och tjänsteutveckling','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE33','Portföljförvaltning','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE74','Design och utveckling av produktionsverksamhet','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK02','Bild- och ljudkodning','6','A1X','4','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK07','Datorgrafik','6*','A1X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSFS06','Diagnos och övervakning','6','A1X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS14','Flerantennkommunikation','6','A1X','3','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS16','Signalbehandling för kommunikation','6','A1X','1','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT14','Sensorfusion','6','A1X','2','V','VT','-',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TDEI71','Digitalisering, affärsekologier och affärsmodeller','6','A1X','4','O','VT','Digitalisering och management — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TDEI35','Strategisk ekonomistyrning: Modeller för en stärkt konkurrenskraft','6','A1X','2','O','VT','Digitalisering och management — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE32','Finansiell riskhantering','6','A1X','2','O','VT','Finans — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE33','Portföljförvaltning','6','A1X','2','V','VT','Finans — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM09','Internationellt företagande','6','A1X','2','O/V','VT','Industriell marknadsföring — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM07','Industriell marknadsanalys','6','A1X','2','O','VT','Industriell marknadsföring — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TMQU31','Statistisk kvalitetsstyrning','6','A1X','2','V','VT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TMQU04','Six Sigma Quality','6','A1X','2','O/V','VT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TMQU13','Kundfokuserad produkt- och tjänsteutveckling','6','A1X','4','O/V','VT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS56','Logistik och kvalitet inom vården','6','A1X','2','V','VT','Kvalitets- och verksamhetsutveckling — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS57','Logistikanalys','6','A1X','2','O/V','VT','Logistik och supply chain management — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS36','Hållbara logistiksystem','6','A1X','4','V','VT','Logistik och supply chain management — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS56','Logistik och kvalitet inom vården','6','A1X','2','V','VT','Logistik och supply chain management — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE78','Kvantitativa modeller och analys inom verksamhetsstyrning','6','A1X','1','V','VT','Produktionsledning — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TPPE74','Design och utveckling av produktionsverksamhet','6','A1X','4','O','VT','Produktionsledning — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO13','Ledarskap och industriellt förändringsarbete','6','A1X','4','V','VT','Projekt, innovation och entreprenörskap — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO06','Innovativt entreprenörskap','6','A1X','2','V','VT','Projekt, innovation och entreprenörskap — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO41','Corporate Social Responsibility','6','A1X','3','V','VT','Projekt, innovation och entreprenörskap — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM09','Internationellt företagande','6','A1X','2','V','VT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIO13','Ledarskap och industriellt förändringsarbete','6','A1X','4','V','VT','Strategi och styrning — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Ekonomi','TEIM07','Industriell marknadsanalys','6','A1X','2','V','VT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Ekonomi','TETS36','Hållbara logistiksystem','6','A1X','4','V','VT','Strategi och styrning — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TBMI26','Neuronnät och lärande system','6','A1X','2','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDB68','Processprogrammering och operativsystem','6','G2X','3','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD17','Informationssäkerhet, fk','6*','A1X','4','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD20','Konstruktion och analys av algoritmer','6','A1X','3','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X','2','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD41','Data Mining - Clustering and Association Analysis','6','A1X','3','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDTS04','Datornät och distribuerade system','8','G2X','2','V','VT','Datateknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD17','Informationssäkerhet, fk','6*','A1X','4','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD27','Avancerad webbprogrammering','6','A1X','3','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDD38','Avancerad programmering i C++','6*','A1X','-','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE07','Bayesianska metoder','6','A1X','2','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE31','Big Data Analytics','6','A1X','3','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE41','Programvaruarkitekturer','6','A1X','1','V','VT','Datateknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE50','Megagame - design för hållbar utveckling i ett förändrat klimat','6*','G2X','-','V','VT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TKMJ10','Industriell ekologi','6','A1X','1','V','VT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES43','Analys och modellering av industriella energisystem','6','A1X','1','V','VT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMMV08','Beräkningsmetoder i strömningslära','6','A1X','3','V','VT','Energiteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TDDE50','Megagame - design för hållbar utveckling i ett förändrat klimat','6*','G2X','-','V','VT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES21','Industrial Energy Systems','6','A1X','3','V','VT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMES41','Strategisk utveckling av hållbara energisystem','6','A1X','2','V','VT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT83','Småskalig förnybar energiomvandling','6','A1X','4','V','VT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMMV07','Beräkningsmetoder i strömningslära, fk','6','A1X','4','V','VT','Energiteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKA13','Träteknik - Innovation','6','A1X','1','V','VT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT48','Konstruktionsoptimering','6','A1X','3','V','VT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT74','Avancerad CAD','6','A1X','4','V','VT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMMS21','Mekatronik','6','G2X','1','V','VT','Maskinteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TMHL24','Hållfasthetslära - Dimensioneringsmetoder','6','G2X','1','V','VT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT57','Produktmodellering','6','A1X','3','V','VT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMKT77','Systemsäkerhet','6','A1X','4','V','VT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMME11','Markfordonsmekanik','6','A1X','1','V','VT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TMPS27','Produktionssystem','6','A1X','3','V','VT','Maskinteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TBMI26','Neuronnät och lärande system','6','A1X','2','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK07','Datorgrafik','6*','A1X','4','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK08','Datakompression','6','A1X','2','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS13','Trådlös kommunikation','6','A1X','4','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT07','Industriell reglerteknik','6','A1X','2','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT09','Reglerteori','6','A1X','3','V','VT','Systemteknik — Preliminära kurser',1);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK02','Bild- och ljudkodning','6','A1X','4','V','VT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSBK07','Datorgrafik','6*','A1X','1','V','VT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSFS06','Diagnos och övervakning','6','A1X','1','V','VT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS14','Flerantennkommunikation','6','A1X','3','V','VT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSKS16','Signalbehandling för kommunikation','6','A1X','1','V','VT','Systemteknik — Preliminära kurser',2);
INSERT INTO "Termin8" VALUES ('Teknisk','TSRT14','Sensorfusion','6','A1X','2','V','VT','Systemteknik — Preliminära kurser',2);

INSERT INTO "Termin9" VALUES ('Teknisk','TDDD04','Programvarutestning','6','A1X','2','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDE15','Avancerad maskininlärning','6','A1X','1','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDE45','Avancerad programvarudesign','6','A1X','4','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE12','Strategisk analys och metoder för strategisk förändring','12*','A1X','2','V','HT','Strategi och styrning',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM04','Industriella marknads- och teknikstrategier','12*','A1X','2','V','HT','Industriell marknadsföring',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIO89','Innovation och entreprenörskap - projektkurs','12*','A1X','4','V','HT','Projekt, innovation och entreprenörskap',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS38','Logistikprojekt','12*','A1X','4','V','HT','Logistik och supply chain management',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TKMJ31','Biofuels for Transportation','6','A1X','1','V','HT','Bioteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMKT79','Kollaborativ multidisciplinär designoptimering','6','A1X','2','V','HT','Maskinteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPE10','Projektkurs avancerad - systemanalys inom energi- och miljösystemområdet','12*','A1X','-','V','HT','Bioteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPM08','Projektkurs avancerad - Industriell produktion','12*','A1X','1','V','HT','Maskinteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMQU27','Kvalitetsutveckling - projektkurs','12*','A1X','2','V','HT','Kvalitets- och verksamhetsutveckling',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMQU47','Kvalitetsutveckling och robust konstruktion','6','A1X','4','V','HT','Kvalitets- och verksamhetsutveckling',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE66','Företagsvärdering','6*','A1X','4','V','HT','Finans',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE73','Produktionsledningsprojekt','12*','A1X','4','V','HT','Produktionsledning',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE99','Simulering av produktion och logistik','6','A1X','3','V','HT','Logistik och supply chain management',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSFS12','Autonoma farkoster - planering, reglering och lärande system','6','A1X','1','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSIT03','Kryptoteknik','6','A1X','2','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSKS12','Modern kanalkodning, inferens och inlärning','6','A1X','1','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','NBID79','Ekosystemtjänster inom CSR och bevarandebiologi','6','A1X','1','V','HT','Bioteknik',2);
INSERT INTO "Termin9" VALUES ('Matematik','TAOP18','Optimering av försörjningskedjor','6','A1X','1','V','HT','Logistik och supply chain management',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDB44','Kompilatorkonstruktion','6','A1X','1','V','HT','-',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDC34','Teknisk, ekonomisk och samhällelig utvärdering av IT-produkter','6','A1X','4','V','HT','Digitalisering och management',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDC90','Software Security','6','A1X','1','V','HT','Datateknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE12','Strategisk analys och metoder för strategisk förändring','12*','A1X','2','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE18','Hållbara värdekedjor','6','A1X','4','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM04','Industriella marknads- och teknikstrategier','12*','A1X','2','V','HT','Industriell marknadsföring',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM10','Industriell tjänsteutveckling','6','A1X','2','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIO89','Innovation och entreprenörskap - projektkurs','12*','A1X','4','V','HT','Projekt, innovation och entreprenörskap',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS31','Logistikstrategier','6','A1X','4','V','HT','Logistik och supply chain management',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS38','Logistikprojekt','12*','A1X','2','V','HT','Logistik och supply chain management',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TKMJ32','Integrerad produkt- och tjänsteutveckling','6','A1X','3','V','HT','Maskinteknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMES51','Internationella energimarknader','6','A1X','1','V','HT','Energiteknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMKA03','Industridesign','6','G2X','1','V','HT','Maskinteknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMKA11','Modellbaserad utveckling av system-av-system','6','A1X','3','V','HT','Datateknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMPE10','Projektkurs avancerad - systemanalys inom energi- och miljösystemområdet','12*','A1X','-','V','HT','Bioteknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMPM08','Projektkurs avancerad - Industriell produktion','12*','A1X','4','V','HT','Maskinteknik',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU12','Lean Production','6','A1X','2','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU27','Kvalitetsutveckling - projektkurs','12*','A1X','4','V','HT','Kvalitets- och verksamhetsutveckling',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE61','Finansiell optimering','6','A1X','2','V','HT','Finans',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE66','Företagsvärdering','6*','A1X','4','V','HT','Finans',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE73','Produktionsledningsprojekt','12*','A1X','4','V','HT','Produktionsledning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TSRT08','Optimal styrning','6','A1X','3','V','HT','Systemteknik',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDC34','Teknisk, ekonomisk och samhällelig utvärdering av IT-produkter','6','A1X','4','V','HT','Digitalisering och management',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE66','Företagsvärdering','6*','A1X','4','V','HT','Finans',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE61','Finansiell optimering','6','A1X','2','V','HT','Finans',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE66','Företagsvärdering','6*','A1X','4','V','HT','Finans',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM04','Industriella marknads- och teknikstrategier','12*','A1X','2','O','HT','Industriell marknadsföring',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM04','Industriella marknads- och teknikstrategier','12*','A1X','2','O','HT','Industriell marknadsföring',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU27','Kvalitetsutveckling - projektkurs','12*','A1X','2','O','HT','Kvalitets- och verksamhetsutveckling',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU47','Kvalitetsutveckling och robust konstruktion','6','A1X','4','V','HT','Kvalitets- och verksamhetsutveckling',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU27','Kvalitetsutveckling - projektkurs','12*','A1X','4','O','HT','Kvalitets- och verksamhetsutveckling',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS38','Logistikprojekt','12*','A1X','4','O','HT','Logistik och supply chain management',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE99','Simulering av produktion och logistik','6','A1X','3','V','HT','Logistik och supply chain management',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS38','Logistikprojekt','12*','A1X','2','O','HT','Logistik och supply chain management',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TETS31','Logistikstrategier','6','A1X','4','V','HT','Logistik och supply chain management',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE73','Produktionsledningsprojekt','12*','A1X','4','O','HT','Produktionsledning',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE99','Simulering av produktion och logistik','6','A1X','3','V','HT','Logistik och supply chain management',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TPPE73','Produktionsledningsprojekt','12*','A1X','4','O','HT','Produktionsledning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIO89','Innovation och entreprenörskap - projektkurs','12*','A1X','4','O','HT','Projekt, innovation och entreprenörskap',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIO89','Innovation och entreprenörskap - projektkurs','12*','A1X','4','O','HT','Projekt, innovation och entreprenörskap',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE12','Strategisk analys och metoder för strategisk förändring','12*','A1X','2','O','HT','Strategi och styrning',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TDEI72','Strategi och digitalisering - teknik, standarder och nätverkseffekter','6','A1X','4','V','HT','Strategi och styrning',1);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE12','Strategisk analys och metoder för strategisk förändring','12*','A1X','2','O','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEAE18','Hållbara värdekedjor','6','A1X','4','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TEIM10','Industriell tjänsteutveckling','6','A1X','2','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Ekonomi','TMQU12','Lean Production','6','A1X','2','V','HT','Strategi och styrning',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDD04','Programvarutestning','6','A1X','2','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDE15','Avancerad maskininlärning','6','A1X','1','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TDDE45','Avancerad programvarudesign','6','A1X','4','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSFS12','Autonoma farkoster - planering, reglering och lärande system','6','A1X','1','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSIT03','Kryptoteknik','6','A1X','2','V','HT','Datateknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMKA11','Modellbaserad utveckling av system-av-system','6','A1X','3','V','HT','Datateknik',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TKMJ31','Biofuels for Transportation','6','A1X','1','V','HT','Bioteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMMV59','Tillämpning av beräkningsmetoder i strömningslära','6','A1X','2','V','HT','Bioteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPE10','Projektkurs avancerad - systemanalys inom energi- och miljösystemområdet','12*','A1X','-','V','HT','Bioteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPE10','Projektkurs avancerad - systemanalys inom energi- och miljösystemområdet','12*','A1X','-','V','HT','Bioteknik',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TMKT79','Kollaborativ multidisciplinär designoptimering','6','A1X','2','V','HT','Maskinteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPM08','Projektkurs avancerad - Industriell produktion','12*','A1X','1','V','HT','Maskinteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TKMJ32','Integrerad produkt- och tjänsteutveckling','6','A1X','3','V','HT','Maskinteknik',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TMPM08','Projektkurs avancerad - Industriell produktion','12*','A1X','4','V','HT','Maskinteknik',2);
INSERT INTO "Termin9" VALUES ('Teknisk','TSFS12','Autonoma farkoster - planering, reglering och lärande system','6','A1X','1','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSIT03','Kryptoteknik','6','A1X','2','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSKS12','Modern kanalkodning, inferens och inlärning','6','A1X','1','V','HT','Systemteknik',1);
INSERT INTO "Termin9" VALUES ('Teknisk','TSRT08','Optimal styrning','6','A1X','3','V','HT','Systemteknik',2);

INSERT INTO "Termin10" VALUES ('Övrigt','TQXX33','Examensarbete','30*','A1X','-','O','VT','-',1);
INSERT INTO "Termin10" VALUES ('Övrigt','TQXX33','Examensarbete','30*','A1X','-','O','VT','-',2);
