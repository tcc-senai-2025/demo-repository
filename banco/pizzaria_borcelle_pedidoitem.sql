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
-- Table structure for table `pedidoitem`
--

DROP TABLE IF EXISTS `pedidoitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidoitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pedidoId` int NOT NULL,
  `produtoId` int NOT NULL,
  `quantidade` int NOT NULL DEFAULT '1',
  `preco` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `PedidoItem_pedidoId_fkey` (`pedidoId`),
  KEY `PedidoItem_produtoId_fkey` (`produtoId`),
  CONSTRAINT `PedidoItem_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `pedido` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `PedidoItem_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produto` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidoitem`
--

LOCK TABLES `pedidoitem` WRITE;
/*!40000 ALTER TABLE `pedidoitem` DISABLE KEYS */;
INSERT INTO `pedidoitem` VALUES (1,1,2,1,44.9),(2,2,112,1,55),(3,2,1,1,39.9),(4,2,5,1,39.9),(5,3,37,1,49.9),(6,3,1,1,39.9),(7,3,14,1,20),(8,3,13,1,12),(9,3,9,1,18),(10,3,1,1,39.9),(11,4,1,1,39.9),(12,4,113,1,64.5),(13,5,2,1,44.9),(14,6,4,1,45.9),(15,6,1,1,39.9),(16,7,114,1,59);
/*!40000 ALTER TABLE `pedidoitem` ENABLE KEYS */;
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
