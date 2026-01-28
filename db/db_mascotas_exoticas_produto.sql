-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: db_mascotas_exoticas
-- ------------------------------------------------------
-- Server version	8.0.42

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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descricao` text,
  `estoque` int NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `preco` double NOT NULL,
  `url_imagem` varchar(255) DEFAULT NULL,
  `categoria_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKopu9jggwnamfv0c8k2ri3kx0a` (`categoria_id`),
  CONSTRAINT `FKopu9jggwnamfv0c8k2ri3kx0a` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  CONSTRAINT `produto_chk_1` CHECK ((`estoque` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Cobra dócil de cores vibrantes (vermelho, preto e branco).',5,'Cobra Milksnake',850,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogBZwkQ6ARWoqrAdWiX3xdUz0GB4TOigBgrAkzrahirwx6Sp89aFlqFwa1jzoYIDMyzK5xH_COAw0Cil3b7nhclm3U7FdaKZ1aGxwV0fD3Q&s=10',1),(2,'Lagarto amigável, ideal para iniciantes em répteis.',3,'Dragão Barbudo',1200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYBfG22_zFrtCNXm-4Qzr6A_AG10nvUr4tA0a33Wadiw-TqZlKWxavzfiizVNfKkOqaiiV9u1vqn8FbSVGF4D7_hmT-8mTaeEfOLAB2Hy&s=10',1),(3,'Pequeno lagarto de hábitos noturnos e fácil manutenção.',10,'Gecko Leopardo',450,'https://www.petz.com.br/blog/wp-content/uploads/2022/06/gecko-leopardo-interna-2.jpg',1),(4,'Sapo robusto e sedentário, famoso pelo seu apetite.',8,'Sapo Pacman',350,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY_kUpFuO2f-7FI5-wx7-CISYhHIZEnxvlGouNTOUiKI7EA9GTTg5-g4haevHEKGcE1up_urghTpkI6ohZn9ITHVZobRPoxX1BDBWcZzs&s=10',2),(5,'Salamandra aquática mexicana que mantém formas juvenis.',4,'Axolote Rosa',600,'https://aquaa3.com.br/wp-content/uploads/2017/05/Axolote-Ambystoma-mexicanum.jpg',2),(6,'Ave inteligente que pode aprender a assobiar hinos.',12,'Calopsita Albina',300,'https://lojaavesmansas.com.br/wp-content/uploads/2022/10/image-removebg-preview-33.png.webp',3),(7,'Uma das aves mais inteligentes do mundo, fala muito.',2,'Papagaio do Congo',15000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo9VeRnpnHnc_joIHtj3K7YcL7PFgLtvRpdqS8_pQL5egWGHxOohBkO8zXsTsbvKqsRc835L5o1qpzHZSvGK8Uql4wQh3wDFr-pXijiM&s=10',3),(8,'Aranha mexicana clássica para colecionadores.',6,'Tarântula de Joelhos Vermelhos',550,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdcFZW9UU-yB1Bi5559EVPIUHbdrIasj2-Q&s',4),(9,'Escorpião grande de cor preta brilhante, visual imponente.',7,'Escorpião Imperador',400,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEYuc1Bky6SYF9aoPvzWMxMI_Bqiu_2sVMgz1Nhe6jLoampgOqmp6idE64RNdwuDJ35QxEGbymCXG9_3SH-FCkpRy8ccMydIGxa6vFw&s=10',4),(10,'Tartaruga semiaquática muito comum e resistente.',15,'Tartaruga Tigre d\'Água',180,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbkmWg0fEa6e5Zjn_5XdIfZ1Cg5Lhio8_3g&s',1);
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

-- Dump completed on 2026-01-28 12:34:00
