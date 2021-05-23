-- -----------------------------------------------------
-- Table `travel`.`paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`paquete` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `precio` DOUBLE NOT NULL,
  `destino` VARCHAR(500) NOT NULL,
  `comidas` VARCHAR(100) NOT NULL,
  `alojamiento` VARCHAR(300) NOT NULL,
  `duracion` INT NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `pasajeros` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel`.`imagen_paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`imagen_paquete` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(300) NOT NULL,
  `paquete_id` INT NOT NULL,
  PRIMARY KEY (`id`, `paquete_id`),
  INDEX `fk_imagen_paquete_paquete_idx` (`paquete_id` ASC),
  CONSTRAINT `fk_imagen_paquete_paquete`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `travel`.`fecha_paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`fecha_paquete` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `paquete_id` INT NOT NULL,
  PRIMARY KEY (`id`, `paquete_id`),
  INDEX `fk_fecha_paquete_paquete1_idx` (`paquete_id` ASC),
  CONSTRAINT `fk_fecha_paquete_paquete1`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(300) NOT NULL,
  `es_admin` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `fecha_viaje` DATETIME NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `fk_compra_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_compra_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `travel`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`paquete_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `travel`.`paquete_compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compra_id` INT NOT NULL,
  `paquete_id` INT NOT NULL,
  PRIMARY KEY (`id`, `compra_id`, `paquete_id`),
  INDEX `fk_paquete_compra_compra1_idx` (`compra_id` ASC),
  INDEX `fk_paquete_compra_paquete1_idx` (`paquete_id` ASC),
  CONSTRAINT `fk_paquete_compra_compra1`
    FOREIGN KEY (`compra_id`)
    REFERENCES `travel`.`compra` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_paquete_compra_paquete1`
    FOREIGN KEY (`paquete_id`)
    REFERENCES `travel`.`paquete` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

