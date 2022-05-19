CREATE TABLE IF NOT EXISTS 	MyCourses (
	"typ" TEXT,
	"Kurskod"	TEXT,
	"Kursnamn"	TEXT,
	"HP"	TEXT,
	"Nivå"	TEXT,
	"Block"	TEXT,
	"VOF"	TEXT,
	"Säsong"	TEXT,
	"Period"	INTEGER

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
	"Period"	INTEGER
);
INSERT INTO "Termin1" VALUES ('Matematik','TATB01','Matematisk grundkurs*','3','G1X','-','O','HT',0);
INSERT INTO "Termin1" VALUES ('Övrigt', 'TEII43','Teknisk kommunikation på japanska 1*','3','G1X','-','V','HT',0);
INSERT INTO "Termin1" VALUES ('Övrigt', 'TEIK43','Teknisk kommunikation på kinesiska 1*','3','G1X','-','V','HT',0);
INSERT INTO "Termin1" VALUES ('Matematik','TATA31','Linjär algebra*','4','G1X','2','O','HT',1);
INSERT INTO "Termin1" VALUES ('Matematik','TATB01','Matematisk grundkurs*','3','G1X','2','O','HT',1);
INSERT INTO "Termin1" VALUES ('Ekonomi', 'TEIE17','Industriell ekonomi*','5','G1X','4','O','HT',1);
INSERT INTO "Termin1" VALUES ('Övrigt','TEII43','Teknisk kommunikation på japanska 1*','3','G1X','-','V','HT',1);
INSERT INTO "Termin1" VALUES ('Övrigt','TEIK43','Teknisk kommunikation på kinesiska 1*','3','G1X','-','V','HT',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THFR21','Teknisk kommunikation på franska I, del 1*','1','G1X','3','V','HT',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THSP21','Teknisk kommunikation på spanska I, del 1*','1','G1X','3','V','HT',1);
INSERT INTO "Termin1" VALUES ('Övrigt','THTY21','Teknisk kommunikation på tyska I, del 1*','1','G1X','3','V','HT',1);
INSERT INTO "Termin1" VALUES ('Matematik', 'TATA31','Linjär algebra*','4','G1X','2','O','HT',2);
INSERT INTO "Termin1" VALUES ('Matematik', 'TATA41','Envariabelanalys 1','6','G1X','3','O','HT',2);
INSERT INTO "Termin1" VALUES ('Ekonomi', 'TEIE17','Industriell ekonomi*','5','G1X','4','O','HT',2);
INSERT INTO "Termin1" VALUES ('Övrigt','TEII43','Teknisk kommunikation på japanska 1*','3','G1X','-','V','HT',2);
INSERT INTO "Termin1" VALUES ('Övrigt','TEIK43','Teknisk kommunikation på kinesiska 1*','3','G1X','-','V','HT',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THFR21','Teknisk kommunikation på franska I, del 1*','1','G1X','1','V','HT',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THSP21','Teknisk kommunikation på spanska I, del 1*','1','G1X','1','V','HT',2);
INSERT INTO "Termin1" VALUES ('Övrigt','THTY21','Teknisk kommunikation på tyska I, del 1*','1','G1X','1','V','HT',2);