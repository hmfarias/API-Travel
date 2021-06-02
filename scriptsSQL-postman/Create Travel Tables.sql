-- MySQL Workbench Synchronization
-- Generated: 2021-05-23 18:56
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Marcelo Farias

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `travel`.`compra` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cantidad` INT(11) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `fecha_viaje` DATETIME NOT NULL,
  `usuario_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_compra_usuario1_idx` (`usuario_id` ASC) ,
  CONSTRAINT `fk_compra_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `travel`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `travel`.`fecha_paquete` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `paquete_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `paquete_id`),
  INDEX `fk_fecha_paquete_paquete1_idx` (`paquete_id` ASC) ,
  CONSTRAINT `fk_fecha_paquete_paquete1`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `travel`.`imagen_paquete` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(300) NOT NULL,
  `paquete_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `paquete_id`),
  INDEX `fk_imagen_paquete_paquete_idx` (`paquete_id` ASC) ,
  CONSTRAINT `fk_imagen_paquete_paquete`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `travel`.`paquete` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `precio` DOUBLE NOT NULL,
  `destino` VARCHAR(500) NOT NULL,
  `comidas` VARCHAR(100) NOT NULL,
  `alojamiento` VARCHAR(300) NOT NULL,
  `duracion` INT(11) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `pasajeros` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `travel`.`paquete_compra` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `compra_id` INT(11) NOT NULL,
  `paquete_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `compra_id`, `paquete_id`),
  INDEX `fk_compra_has_paquete_paquete1_idx` (`paquete_id` ASC) ,
  INDEX `fk_compra_has_paquete_compra1_idx` (`compra_id` ASC) ,
  CONSTRAINT `fk_compra_has_paquete_compra1`
    FOREIGN KEY (`compra_id`)
    REFERENCES `travel`.`compra` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_compra_has_paquete_paquete1`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `travel`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(300) NOT NULL,
  `es_admin` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
