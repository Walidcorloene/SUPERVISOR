CREATE TABLE `user` (
  `id_user` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `login` varchar(30) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `role` ENUM('ingenieur', 'responsable'),
  `resetPasswordToken` varchar(225)
  );

CREATE TABLE `equipement` (
  `id_equipement` int(150) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `equipement_machine` varchar(150) NOT NULL,
  `atelier` varchar(150) NOT NULL,
  `etat_station` ENUM ('sans_restriction', 'avec_restriction', 'inutilisable'),
  `R_restriction` varchar(30)  not null,
  `pieces_remplaces` varchar(100) not null,
  `operations_effectuees` text NOT NULL
);

CREATE TABLE `corrective` (
  `id_corrective` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `anomalies_constatees` text not null,
  `ref_manip` varchar(100),
  `nom_technicien` varchar(60) NOT NULL,
  `date_debut_intervention` datetime NOT NULL default now(),
  `date_fin_intervention` datetime ,
  `EquipementIdEquipement` int
);

CREATE TABLE `preventive` (
  `id_preventive` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `outillage_documentation` text NOT NULL,
  `anomalie_constatee_reparee` text NOT NULL,
  `travaux_effectues` text NOT NULL,
  `nom_technicien` varchar(60) NOT NULL,
  `date_debut_intervention` datetime NOT NULL default now(),
  `dete_fin_intervention` datetime ,
  `UserIdUser` int,
  `EquipementIdEquipement` int
);

CREATE TABLE `notam` (
  `id_notam` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `dateDebut` datetime not null default now(),
  `dateFin` datetime,
  `installation` varchar(100) NOT NULL,
  `cause` varchar(50) NOT NULL,
  `objetNotam` varchar(50),
  `contenu` text,
  `CorrectiveIdCorrective` int,
  `UserIdUser` int
);

CREATE TABLE `effectuer` (
  `UserIdUser` int NOT NULL,
  `PreventiveIdPreventive` int NOT NULL,
  
  PRIMARY KEY (`UserIdUser`, `PreventiveIdPreventive`)
);

CREATE TABLE `creer` (
  `UserIdUser` int NOT NULL,
  `CorrectiveIdCorrective` int NOT NULL,
  
  PRIMARY KEY (`UserIdUser`, `CorrectiveIdCorrective`)
);

ALTER TABLE `corrective` ADD FOREIGN KEY (`EquipementIdEquipement`) REFERENCES `equipement` (`id_equipement`);

ALTER TABLE `preventive` ADD FOREIGN KEY (`UserIdUser`) REFERENCES `user` (`id_user`);

ALTER TABLE `preventive` ADD FOREIGN KEY (`EquipementIdEquipement`) REFERENCES `equipement` (`id_equipement`);

ALTER TABLE `notam` ADD FOREIGN KEY (`CorrectiveIdCorrective`) REFERENCES `corrective` (`id_corrective`);

ALTER TABLE `notam` ADD foreign key (`UserIdUser`) REFERENCES `user` (`id_user`);

ALTER TABLE `effectuer` ADD FOREIGN KEY (`UserIdUser`) REFERENCES `user` (`id_user`);

ALTER TABLE `effectuer` ADD FOREIGN KEY (`PreventiveIdPreventive`) REFERENCES `preventive` (`id_preventive`);

ALTER TABLE `creer` ADD FOREIGN KEY (`UserIdUser`) REFERENCES `user` (`id_user`);

ALTER TABLE `creer` ADD FOREIGN KEY (`CorrectiveIdCorrective`) REFERENCES `corrective` (`id_corrective`);
