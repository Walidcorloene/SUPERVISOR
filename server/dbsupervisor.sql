CREATE TABLE `Ingenieur` (
  `id_ingenieur` int(30) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `login` varchar(30) UNIQUE NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(300) NOT NULL
);

CREATE TABLE `Equipement` (
  `id_equipement` int(150) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `equipment_machine` varchar(150) NOT NULL,
  `atelier` varchar(150) NOT NULL,
  `etat_station` ENUM ('sans_restriction', 'avec_restriction', 'inutilisable'),
  `R_restriction` varchar(30)  not null,
  `pieces_remplaces` varchar(100) not null,
  `operations_effectuees` text NOT NULL
);

CREATE TABLE `RapportTacheCorrective` (
  `id_corrective` int(255) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `anomalies_constatees` text not null,
  `ref_manip` varchar(100),
  `nom_technicien` varchar(60) NOT NULL,
  `id_equipement` int
);

CREATE TABLE `Responsable` (
  `id_responsable` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `login` varchar(30) UNIQUE NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_preventive` int
);

CREATE TABLE `RapportTachePreventive` (
  `id_preventive` int(255) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `outillage_documentation` text NOT NULL,
  `anomalie_constatee_reparee` varchar(150) NOT NULL,
  `travaux_effectues` text NOT NULL,
  `nom_technicien` varchar(60) NOT NULL,
  `id_responsable` int(10),
  `id_equipement` int
);

CREATE TABLE `Notam` (
  `id_notam` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date_debut` datetime,
  `installation` varchar(100) NOT NULL,
  `cause` varchar(150) NOT NULL,
   `objetnotam` varchar(150),
    `autre` text,
  `id_corrective` int,
  `id_responsable` int
);

CREATE TABLE `Effectuer` (
  `id_ingenieur` int NOT NULL,
  `id_preventive` int NOT NULL,
  `date_debut_intervention` DATE NOT NULL,
  `date_fin_intervention` DATE NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time NOT NULL,
  `duree_intervention` int,
  PRIMARY KEY (`id_ingenieur`, `id_preventive`)
);

CREATE TABLE `Creer` (
  `id_ingenieur` int NOT NULL,
  `id_corrective` int NOT NULL,
  `date_debut_intervention` date NOT NULL,
  `dete_fin_intervention` date NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time NOT NULL,
  `duree_intervention` int,
  PRIMARY KEY (`id_ingenieur`, `id_corrective`)
);

ALTER TABLE `RapportTacheCorrective` ADD FOREIGN KEY (`id_equipement`) REFERENCES `Equipement` (`id_equipement`);

ALTER TABLE `RapportTachePreventive` ADD FOREIGN KEY (`id_responsable`) REFERENCES `Responsable` (`id_responsable`);

ALTER TABLE `RapportTachePreventive` ADD FOREIGN KEY (`id_equipement`) REFERENCES `Equipement` (`id_equipement`);

ALTER TABLE `Notam` ADD FOREIGN KEY (`id_corrective`) REFERENCES `RapportTacheCorrective` (`id_corrective`);

ALTER TABLE `Notam` ADD FOREIGN KEY (`id_responsable`) REFERENCES `Responsable` (`id_responsable`);

ALTER TABLE `Effectuer` ADD FOREIGN KEY (`id_ingenieur`) REFERENCES `Ingenieur` (`id_ingenieur`);

ALTER TABLE `Effectuer` ADD FOREIGN KEY (`id_preventive`) REFERENCES `RapportTachePreventive` (`id_preventive`);

ALTER TABLE `Creer` ADD FOREIGN KEY (`id_ingenieur`) REFERENCES `Ingenieur` (`id_ingenieur`);

ALTER TABLE `Creer` ADD FOREIGN KEY (`id_corrective`) REFERENCES `RapportTacheCorrective` (`id_corrective`);
