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
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preco` double NOT NULL,
  `categoria` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagem` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamanhoId` int DEFAULT NULL,
  `adicionais` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Produto_tamanhoId_fkey` (`tamanhoId`),
  CONSTRAINT `Produto_tamanhoId_fkey` FOREIGN KEY (`tamanhoId`) REFERENCES `tamanho` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Pizza Calabresa','Calabresa fatiada, cebola e orégano.',39.9,'Pizza Salgada','src/img/pizzas/calabresa.jpg',2,NULL),(2,'Pizza Portuguesa','Presunto, ovo, cebola, azeitona, queijo e orégano.',44.9,'Pizza Salgada','src/img/pizzas/portuguesa.jpg',2,NULL),(3,'Pizza Quatro Queijos','Mussarela, gorgonzola, parmesão e catupiry.',46.9,'Pizza Salgada','src/img/pizzas/queijo.jpg',2,NULL),(4,'Pizza Frango com Catupiry','Frango desfiado com catupiry cremoso.',45.9,'Pizza Salgada','src/img/pizzas/frango.jpg',2,NULL),(5,'Pizza Margherita','Mussarela, tomate e manjericão fresco.',39.9,'Pizza Salgada','src/img/pizzas/marguerita.jpg',2,NULL),(6,'Pizza Pepperoni','Mussarela, pepperoni fatiado e orégano.',47.9,'Pizza Salgada','src/img/pizzas/pepperoni.jpg',2,NULL),(9,'Petit Gateau','Bolo quente com sorvete.',18,'Sobremesa','src/img/sobremesas/petit gateau.jpg',NULL,NULL),(10,'Pudim','Pudim de leite condensado.',12,'Sobremesa','src/img/sobremesas/pudim.jpg',NULL,NULL),(11,'Brownie','Brownie de chocolate com nozes.',15,'Sobremesa','src/img/sobremesas/brownie.jpg',NULL,NULL),(12,'Mousse de Maracujá','Cremoso e geladinho.',10,'Sobremesa','src/img/sobremesas/mousse.jpg',NULL,NULL),(13,'Batata Frita','Porção de batata frita crocante.',12,'Acompanhamento','src/img/acompanhamentos/batata.jpg',NULL,NULL),(14,'Nuggets','Porção de nuggets crocantes.',20,'Acompanhamento','src/img/acompanhamentos/nuggets.jpg',NULL,NULL),(15,'Pizza Napolitana','Mussarela, tomate, parmesão e orégano.',42.9,'Pizza Salgada','src/img/pizzas/napolitana.jpg',2,NULL),(16,'Pizza Bacon','Mussarela, bacon crocante e orégano.',45.9,'Pizza Salgada','src/img/pizzas/bacon.jpg',2,NULL),(17,'Pizza Toscana','Calabresa, cebola roxa e pimenta calabresa.',44.9,'Pizza Salgada','src/img/pizzas/toscana.jpg',2,NULL),(18,'Pizza Vegetariana','Mussarela, tomate, pimentão, cebola, azeitona e milho.',43.9,'Pizza Salgada','src/img/pizzas/vegetariana.jpg',2,NULL),(19,'Pizza Carne Seca','Carne seca desfiada com catupiry e cebola roxa.',49.9,'Pizza Salgada','src/img/pizzas/carne seca.jpg',2,NULL),(20,'Pizza Filé com Cheddar','Tiras de filé, molho cheddar e cebola crispy.',52.9,'Pizza Salgada','src/img/pizzas/cheddar.jpg',2,NULL),(21,'Pizza Mexicana','Carne moída, pimenta, milho e queijo mussarela.',48.9,'Pizza Salgada','src/img/pizzas/mexicana.jpg',2,NULL),(22,'Pizza Alho e Óleo','Mussarela, alho frito e toque de azeite.',38.9,'Pizza Salgada','src/img/pizzas/alho e oleo.jpg',2,NULL),(23,'Pizza Brócolis com Bacon','Brócolis, bacon e catupiry.',46.9,'Pizza Salgada','src/img/pizzas/brocolis.jpg',2,NULL),(24,'Pizza Caprese','Mussarela de búfala, tomate e manjericão fresco.',47.9,'Pizza Salgada','src/img/pizzas/caprese.jpg',2,NULL),(25,'Pizza Lombo com Catupiry','Lombo canadense e catupiry cremoso.',50.9,'Pizza Salgada','src/img/pizzas/lombo.jpg',2,NULL),(33,'Pizza de Banana','Banana, canela e leite condensado.',35.9,'Pizza Doce','src/img/doces/banana.jpg',2,NULL),(34,'Pizza de Sensação','Chocolate derretido e morangos frescos.',42.9,'Pizza Doce','src/img/doces/sensaçao.jpg',2,NULL),(35,'Pizza Prestígio','Chocolate e coco ralado.',40.9,'Pizza Doce','src/img/doces/prestigio.jpg',2,NULL),(36,'Pizza Romeu e Julieta','Goiabada cremosa e queijo minas.',38.9,'Pizza Doce','src/img/doces/romeu e julieta.jpg',2,NULL),(37,'Pizza Nutella','Nutella com frutas e lascas de chocolate.',49.9,'Pizza Doce','src/img/doces/nutella.png',2,NULL),(38,'Pizza Brigadeiro','Chocolate granulado e leite condensado.',39.9,'Pizza Doce','src/img/doces/brigadeiro.jpg',2,NULL),(39,'Pizza M&M\'s','Chocolate e confeitos coloridos.',41.9,'Pizza Doce','src/img/doces/m&m.jpg',2,NULL),(40,'Pizza Doce de Leite com Coco','Doce de leite e coco ralado.',37.9,'Pizza Doce','src/img/doces/doce de leite.jpg',2,NULL),(41,'Pizza de Oreo','Creme de chocolate com pedaços de Oreo.',45.9,'Pizza Doce','src/img/doces/oreo.jpg',2,NULL),(42,'Pizza Beijinho','Coco ralado e leite condensado.',36.9,'Pizza Doce','src/img/doces/beijinho.jpg',2,NULL),(43,'Pizza Dois Amores','Meio chocolate, meio leite ninho com Nutella.',47.9,'Pizza Doce','src/img/doces/dois amores.jpg',2,NULL),(101,'Coca-Cola 350ml','Refrigerante gelado.',6,'Bebida','src/img/bebidas/coca 350.jpg',1,NULL),(102,'Coca-Cola 600ml','Refrigerante gelado.',8,'Bebida','src/img/bebidas/coca 600.jpg',2,NULL),(103,'Coca-Cola 2L','Refrigerante gelado.',15,'Bebida','src/img/bebidas/coca 2l.jpg',3,NULL),(104,'Guaraná Antarctica 350ml','Refrigerante gelado.',5.5,'Bebida','src/img/bebidas/guarana 350.jpg',1,NULL),(105,'Guaraná Antarctica 600ml','Refrigerante gelado.',7.5,'Bebida','src/img/bebidas/guarana 600.jpg',2,NULL),(106,'Guaraná Antarctica 2L','Refrigerante gelado.',13.5,'Bebida','src/img/bebidas/guarana 2l.jpg',3,NULL),(107,'Fanta Laranja 350ml','Refrigerante gelado.',6,'Bebida','src/img/bebidas/fanta laranja 350.jpg',1,NULL),(108,'Suco de Laranja','Suco natural geladinho.',6.5,'Bebida','src/img/bebidas/suco laranja.jpg',2,NULL),(109,'Suco de Uva','Suco natural geladinho.',6.5,'Bebida','src/img/bebidas/suco uva.jpg',2,NULL),(110,'Suco de Abacaxi','Suco natural geladinho.',6.5,'Bebida','src/img/bebidas/suco abacaxi.jpg',2,NULL),(111,'Suco de Melancia','Suco natural geladinho.',6.5,'Bebida','src/img/bebidas/suco melancia.jpg',2,NULL),(112,'Pizza Personalizada (Grande)','Massa Fina, Molho Barbecue, Orégano, Molho Cheddar, Presunto, Ovo',55,'Pizza','src/img/pizzas/marguerita.jpg',NULL,NULL),(113,'Pizza Personalizada (Grande)','Massa Integral, Molho Barbecue, Mussarela, Calabresa, Bacon, Frango Desfiado, Cebola',64.5,'Pizza','src/img/pizzas/marguerita.jpg',NULL,NULL),(114,'Pizza Personalizada (Médio)','Massa Fina, Molho Barbecue, Mussarela, Calabresa, Queijo Minas, Nutella, Confeitos Coloridos',59,'Pizza','src/img/pizzas/marguerita.jpg',NULL,NULL),(115,'Pizza Personalizada (Grande)','Massa Tradicional, Massa Tradicional',45,'Pizza','src/img/pizzas/marguerita.jpg',NULL,NULL),(116,'Pizza Personalizada (Grande)','Massa Tradicional, Massa Tradicional',45,'Pizza','src/img/pizzas/marguerita.jpg',NULL,NULL);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
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
