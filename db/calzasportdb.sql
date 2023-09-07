-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (x86_64)
--
-- Host: localhost    Database: calzasport
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categorias` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Zapatos de Mujer','Elegantes y cómodos zapatos para mujeres.'),(2,'Zapatos de Hombre','Estilosos zapatos para hombres.'),(3,'Zapatillas Deportivas','Zapatillas ideales para deportes y actividades al aire libre.'),(4,'Zapatos Casuales','Zapatos informales para uso diario.'),(5,'Zapatos de Niños','Adorables zapatos para los más pequeños de la casa.');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `envio`
--

DROP TABLE IF EXISTS `envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `envio` (
  `id_envio` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_envio`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `envio`
--

LOCK TABLES `envio` WRITE;
/*!40000 ALTER TABLE `envio` DISABLE KEYS */;
INSERT INTO `envio` VALUES (11,'interrapidizimo'),(12,'servientrega'),(13,'markepley'),(14,'envia'),(15,'correos'),(16,'tcc'),(17,'coordinadora'),(18,'avianca'),(19,'deprix'),(20,'mercadoenvio');
/*!40000 ALTER TABLE `envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `id_factura` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `fechaEmision` date DEFAULT NULL,
  `id_productos` int DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `preciounitario` varchar(45) DEFAULT NULL,
  `preciototal` varchar(45) DEFAULT NULL,
  `id_pago` int DEFAULT NULL,
  `id_envio` int DEFAULT NULL,
  PRIMARY KEY (`id_factura`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_productos` (`id_productos`),
  KEY `id_pago` (`id_pago`,`id_envio`),
  KEY `id_envio` (`id_envio`),
  CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`id_envio`) REFERENCES `envio` (`id_envio`),
  CONSTRAINT `factura_ibfk_3` FOREIGN KEY (`id_pago`) REFERENCES `metododepago` (`id_pago`),
  CONSTRAINT `factura_ibfk_4` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
INSERT INTO `factura` VALUES (32,5,NULL,5,'1','1','9',21,11),(33,6,NULL,6,'2','2','7',22,12),(34,7,NULL,7,'8','8','10',23,13),(35,8,NULL,3,'4','4','5',24,14),(36,9,NULL,2,'3','3','6',25,15),(37,10,NULL,1,'5','5','4',26,16),(38,11,NULL,8,'7','7','8',27,17),(39,12,NULL,5,'1','1','9',28,18),(40,13,NULL,6,'2','2','7',29,19);
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingresosproveedores`
--

DROP TABLE IF EXISTS `ingresosproveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingresosproveedores` (
  `id_ingresos` int NOT NULL AUTO_INCREMENT,
  `id_productos` int DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  PRIMARY KEY (`id_ingresos`),
  KEY `id_productos` (`id_productos`),
  CONSTRAINT `ingresosproveedores_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingresosproveedores`
--

LOCK TABLES `ingresosproveedores` WRITE;
/*!40000 ALTER TABLE `ingresosproveedores` DISABLE KEYS */;
INSERT INTO `ingresosproveedores` VALUES (1,1,'20',NULL),(2,2,'15',NULL),(3,3,'10',NULL),(4,4,'25',NULL),(5,5,'30',NULL),(6,6,'12',NULL),(7,7,'18',NULL),(8,8,'22',NULL),(9,9,'17',NULL),(10,10,'19',NULL),(11,11,'21',NULL),(12,12,'14',NULL),(13,13,'27',NULL),(14,14,'13',NULL),(15,15,'16',NULL),(16,16,'29',NULL),(17,17,'23',NULL),(18,18,'11',NULL),(19,19,'24',NULL),(20,20,'26',NULL);
/*!40000 ALTER TABLE `ingresosproveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `id_inventario` int NOT NULL AUTO_INCREMENT,
  `id_productos` int DEFAULT NULL,
  PRIMARY KEY (`id_inventario`),
  KEY `id_productos` (`id_productos`),
  CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metododepago`
--

DROP TABLE IF EXISTS `metododepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metododepago` (
  `id_pago` int NOT NULL AUTO_INCREMENT,
  `metodo_pago` varchar(45) DEFAULT NULL,
  `condicion_pago` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_pago`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metododepago`
--

LOCK TABLES `metododepago` WRITE;
/*!40000 ALTER TABLE `metododepago` DISABLE KEYS */;
INSERT INTO `metododepago` VALUES (21,'nequi','transferencia'),(22,'daviplata','transferencia'),(23,'bancolombia','transferencia'),(24,'paypal','transferencia'),(25,'visa','transferencia'),(26,'pagoefectivo','efectivo'),(27,'tarjetacredito','transferencia'),(28,'pagocontraentrega','efectivo-transferencia'),(29,'tarjetadebito','transferencia'),(30,'transferencia','transferencia');
/*!40000 ALTER TABLE `metododepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(245) DEFAULT NULL,
  `precio` int DEFAULT NULL,
  `cant_disponible` int DEFAULT NULL,
  `id_categorias` int DEFAULT NULL,
  PRIMARY KEY (`id_productos`),
  KEY `id_categorias` (`id_categorias`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categorias`) REFERENCES `categorias` (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Producto 1','zapatillas para dama',30,100,1),(2,'Producto 2','chanclas para hombre',15,50,2),(3,'Producto 3','tacones para mujer',80,75,1),(4,'Producto 4','zapatos para niño',25,60,3),(5,'Producto 5','zapatos para niña',26,120,2),(6,'Producto 6','zapatos para hombre',40,40,1),(7,'Producto 7','zapatillas para hombre',55,90,3),(8,'Producto 8','botas para hombre',60,70,2),(9,'Producto 9','botas para mujer',60,110,1),(10,'Producto 10','chanclas para hombre',16,80,3),(11,'Jordan One','Zapatillas para dama Jordan One',30000,100,1),(12,'Adidas UltraBoost','Chanclas para hombre Adidas UltraBoost',15000,50,2),(13,'Stiletto Clásico','Tacones para mujer Stiletto Clásico',80000,75,1),(14,'Nike Air Max','Zapatos para niño Nike Air Max',25000,60,5),(15,'Puma Cali','Zapatos para niña Puma Cali',26000,120,4),(16,'Converse Chuck Taylor','Zapatos para hombre Converse Chuck Taylor',40000,40,2),(17,'Reebok Classic','Zapatillas para hombre Reebok Classic',55000,90,5),(18,'Timberland Premium','Botas para hombre Timberland Premium',60000,70,4),(19,'Steve Madden Tallen','Botas para mujer Steve Madden Tallen',60000,110,1),(20,'Nike Benassi','Chanclas para hombre Nike Benassi',16000,80,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id_proveedores` int NOT NULL AUTO_INCREMENT,
  `nombre_proveesor` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` bigint DEFAULT NULL,
  `id_productos` bigint DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_proveedores`),
  KEY `id_productos` (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (5,'PJuan Alberto','proveedora@example.com',1234567890,1,'Calle 123, Bogota'),(6,'Diego Polo','proveedorb@example.com',9876543210,2,'Avenida XYZ, Medellin'),(7,'Hector Toledo','proveedorc@example.com',5555555555,3,'Carrera 456, Argentina'),(8,'Jimmy Lombana','proveedord@example.com',1112223333,4,'Plaza 789, Cali'),(9,'María López','proveedore@example.com',7778889999,5,'Avenida Principal, Santiago'),(10,'Pedro Ramirez','proveedorf@example.com',5554443333,6,'Calle Central, Lima'),(11,'Ana Sánchez','proveedorg@example.com',9998887777,7,'Rue de la Rivière, París'),(12,'Carlos Rodriguez','proveedorh@example.com',1113335555,8,'Main Street, New York'),(13,'Laura Smith','proveedori@example.com',1234567890,9,'Hauptstrasse, Berlin'),(14,'José González','proveedorj@example.com',9876543210,10,'Calle Mayor, Madrid');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_roles` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(245) DEFAULT NULL,
  `descripcion` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'usuario','usuario'),(2,'admin','Administrador autorizado');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `tipodedocumento` varchar(45) DEFAULT NULL,
  `num_documento` varchar(45) DEFAULT NULL,
  `nombres` varchar(250) DEFAULT NULL,
  `apellidos` varchar(250) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `id_roles` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_roles`),
  KEY `id_roles` (`id_roles`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (5,'cedula','1077876678','John','Valderrama','Calle 12# 18-40 Medellin','john.val@example.com','12345',1),(6,'cedula','1077876679','Julian','Espinoza','Calle 10# 11-20 Pitalito','julian.espi@gmail.com','12346',2),(7,'cedula','1077876676','Oscar','Parra','Calle 13# 12-30 Neiva','oscar.pa@gmail.com','12347',1),(8,'cedula','1077876675','Viviana','Peres','Calle 14# 13-50 Bogota','vivi.pe@example.com','12348',1),(9,'cedula','1077876696','Laura','Lopez','Calle 15# 16-70 Cali','laura.lopez@example.com','123472',1),(10,'tarjeta de identidad','1077876697','Diego','Garcia','Carrera 8# 9-40 Barranquilla','diego.garcia@example.com','123473',1),(11,'cedula','1077876698','Maria','Ramirez','Avenida 5# 6-25 Bogota','maria.ramirez@example.com','123474',1),(12,'cedula','1077876699','Andres','Hernandez','Calle 7# 8-30 Medellin','andres.hernandez@example.com','123475',1),(13,'cedula','1077876700','Juan Alberto','Perez Molina ','Avenida 3# 5-35 Bogota','juan@example.com','123476',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-07 10:48:37
