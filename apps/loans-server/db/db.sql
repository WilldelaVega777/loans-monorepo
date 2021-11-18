-- -----------------------------------------------------
-- Set Settings
-- -----------------------------------------------------
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-

-- -----------------------------------------------------
-- Schema loans
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loans` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `loans` ;

-- -----------------------------------------------------
-- Table `loans`.`borrower`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loans`.`borrower` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `ssn` VARCHAR(11) NOT NULL,
  `phoneNumber` VARCHAR(10) NOT NULL,
  `lastFourOfDrivingLicense` VARCHAR(4) NOT NULL,
  `salary` DOUBLE NOT NULL DEFAULT '0',
  `loanAmount` DOUBLE NOT NULL DEFAULT '0',
  `loanInterest` DOUBLE NOT NULL DEFAULT '0',
  `loanTerm` DOUBLE NOT NULL DEFAULT '0',
  `employerName` VARCHAR(50) NOT NULL,
  `employerAddress` VARCHAR(150) NOT NULL,
  `employerPhoneNumber` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `IDX_0b2149b696c042d5432bb28800` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loans`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loans`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(500) NOT NULL,
  `email` VARCHAR(500) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `accessLevel` INT NOT NULL DEFAULT '0',
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Unset Settings
-- -----------------------------------------------------
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Stored Procedures Section
-- -----------------------------------------------------
-- Upsert
-- -----------------------------------------------------
DELIMITER &&
Create Procedure `loans`.`Upsert`(
  IN `id` INT,
  IN `firstName` VARCHAR(50),
  IN `lastName` VARCHAR(50),
  IN `email` VARCHAR(50),
  IN `ssn` VARCHAR(11),
  IN `phoneNumber` VARCHAR(10),
  IN `lastFourOfDrivingLicense` VARCHAR(4),
  IN `salary` DOUBLE,
  IN `loanAmount` DOUBLE,
  IN `loanInterest` DOUBLE,
  IN `loanTerm` DOUBLE,
  IN `employerName` VARCHAR(50),
  IN `employerAddress` VARCHAR(150),
  IN `employerPhoneNumber` VARCHAR(10)
)
begin
	if (id is null) then
		insert into `loans`.`borrower` (
		  `firstName`,
		  `lastName`,
		  `email`,
		  `ssn`,
		  `phoneNumber`,
		  `lastFourOfDrivingLicense`,
		  `salary`,
		  `loanAmount`,
		  `loanInterest`,
		  `loanTerm`,
		  `employerName`,
		  `employerAddress`,
		  `employerPhoneNumber`
		) values (
		  firstName,
		  lastName,
		  email,
		  ssn,
		  phoneNumber,
		  lastFourOfDrivingLicense,
		  salary,
		  loanAmount,
		  loanInterest,
		  loanTerm,
		  employerName,
		  employerAddress,
		  employerPhoneNumber
		);
    else
		update `loans`.`borrower`
		set
		  `firstName` = firstName,
		  `lastName` = lastName,
		  `email` = email,
		  `ssn` = ssn,
		  `phoneNumber` = phoneNumber,
		  `lastFourOfDrivingLicense` = lastFourOfDrivingLicense,
		  `salary` = salary,
		  `loanAmount` = loanAmount,
		  `loanInterest` = loanInterest,
		  `loanTerm` = loanTerm,
		  `employerName` = employerName,
		  `employerAddress` = employerAddress,
		  `employerPhoneNumber` = employerPhoneNumber
		where `id` = id;
	end if;
end


-- -----------------------------------------------------
-- Get
-- -----------------------------------------------------
DELIMITER &&
Create Procedure `loans`.`Get`(
  IN `user_id` INT
)
begin
    select
      `id`,
      `firstName`,
      `lastName`,
      `email`,
      `ssn`,
      `phoneNumber`,
      `lastFourOfDrivingLicense`,
      `salary`,
      `loanAmount`,
      `loanInterest`,
      `loanTerm`,
      `employerName`,
      `employerAddress`,
      `employerPhoneNumber`
    from `loans`.`borrower`
    where `id` = user_id;
end



