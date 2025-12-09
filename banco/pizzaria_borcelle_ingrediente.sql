-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: pizzaria_borcelle
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingrediente`
--

DROP TABLE IF EXISTS `ingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preco` double NOT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente`
--

LOCK TABLES `ingrediente` WRITE;
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
INSERT INTO `ingrediente` VALUES (1,'Massa Tradicional',0,'massa'),(2,'Massa Fina',0,'massa'),(3,'Massa Integral',2,'massa'),(4,'Molho de Tomate',0,'molho'),(5,'Molho Barbecue',1.5,'molho'),(6,'Mussarela',3,'adicional'),(7,'Calabresa',4,'adicional'),(8,'Bacon',4.5,'adicional'),(9,'Frango Desfiado',3.5,'adicional'),(10,'Cebola',1,'adicional'),(11,'Milho',1,'adicional'),(12,'Azeitona',1.5,'adicional'),(13,'Orégano',0.5,'adicional'),(14,'Catupiry',3.5,'adicional'),(15,'Pepperoni',4,'adicional'),(16,'Filé',5,'adicional'),(17,'Molho Cheddar',3,'adicional'),(18,'Presunto',3,'adicional'),(19,'Ovo',2,'adicional'),(20,'Tomate',1.5,'adicional'),(21,'Manjericão',2,'adicional'),(22,'Gorgonzola',4,'adicional'),(23,'Parmesão',4,'adicional'),(24,'Cebola Roxa',1.5,'adicional'),(25,'Pimenta Calabresa',1.5,'adicional'),(26,'Pimentão',1.5,'adicional'),(27,'Carne Seca',5,'adicional'),(28,'Cebola Crispy',2,'adicional'),(29,'Banana',2,'adicional'),(30,'Canela',1,'adicional'),(31,'Leite Condensado',2.5,'adicional'),(32,'Chocolate',3,'adicional'),(33,'Morangos',3,'adicional'),(34,'Coco Ralado',2.5,'adicional'),(35,'Goiabada',3,'adicional'),(36,'Queijo Minas',3,'adicional'),(37,'Nutella',5,'adicional'),(38,'Confeitos Coloridos',2.5,'adicional'),(39,'Oreo',3,'adicional'),(40,'Doce de Leite',2.5,'adicional');
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-02 16:58:52
