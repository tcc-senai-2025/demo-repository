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
-- Table structure for table `produtoingrediente`
--

DROP TABLE IF EXISTS `produtoingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtoingrediente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produtoId` int NOT NULL,
  `ingredienteId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ProdutoIngrediente_produtoId_fkey` (`produtoId`),
  KEY `ProdutoIngrediente_ingredienteId_fkey` (`ingredienteId`),
  CONSTRAINT `ProdutoIngrediente_ingredienteId_fkey` FOREIGN KEY (`ingredienteId`) REFERENCES `ingrediente` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `ProdutoIngrediente_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produto` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtoingrediente`
--

LOCK TABLES `produtoingrediente` WRITE;
/*!40000 ALTER TABLE `produtoingrediente` DISABLE KEYS */;
INSERT INTO `produtoingrediente` VALUES (1,1,6),(2,1,7),(3,1,10),(4,1,13),(5,2,18),(6,2,19),(7,2,10),(8,2,12),(9,2,6),(10,2,13),(11,3,6),(12,3,21),(13,3,22),(14,3,14),(15,4,8),(16,4,14),(17,5,6),(18,5,20),(19,5,23),(20,6,6),(21,6,15),(22,6,13),(23,15,6),(24,15,20),(25,15,22),(26,15,13),(27,16,6),(28,16,8),(29,16,13),(30,17,7),(31,17,24),(32,17,25),(33,18,6),(34,18,20),(35,18,26),(36,18,10),(37,18,12),(38,18,11),(39,19,27),(40,19,14),(41,19,24),(42,20,15),(43,20,16),(44,20,28),(45,33,29),(46,33,30),(47,33,31),(48,34,32),(49,34,33),(50,35,32),(51,35,34),(52,36,35),(53,36,36),(54,37,37),(55,37,33),(56,37,32),(57,38,32),(58,38,31),(59,39,32),(60,39,38),(61,40,31),(62,40,34),(63,41,32),(64,41,39),(65,42,34),(66,42,31),(67,43,32),(68,43,36),(69,43,37);
/*!40000 ALTER TABLE `produtoingrediente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-02 16:58:51
