/*datos tabla envio*/

 INSERT INTO envio ( empresa ) VALUES ("zapatex"),
    -> ("bodegon"),("calzadiana"),("zaptejil"),("adidastex"),("laquinta"),
    ("expotex"),("juansport"),("danilotex"),("rematessport");

/*datos metododepago*/

 INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("nequi","transferencia"),
    -> ("daviplata","transferencia"),
       ("bancolombia","transferencia"),
       ("paypal","transferencia"),
       ("visa","transferencia"),
       ("pagoefectivo","efectivo"),
       ("tarjetacredito","transferencia"),
       ("pagocontraentrega","efectivo-transferencia"),
       ("tarjetadebito","transferencia"),
       ("transferencia","transferencia");
/*datos de factura*/
INSERT INTO factura (id_usuario, id_productos, cantidad, precioUnitario, precioTotal, id_pago, id_envio) VALUES(2, 5, 1, 1, 9, 2000, 18000),
(3, 6, 2, 2, 7, 4000, 28000),(4, 7, 8, 8, 10, 7000, 70000), (5, 3, 4, 4, 5, 3000, 15000), (1, 2, 3, 3, 6, 1000, 6000),
(6, 1, 5, 5, 4, 5000, 20000),(7, 8, 7, 7, 8, 10000, 80000);

/*datos usuarios*/

INSERT INTO usuarios (tipodedocumento, num_documento, nombres, apellidos, direccion, email, contraseña, id_roles) VALUES 
("cedula", 1077876678, "John", "Valderrama", "Calle 12# 18-40 Medellin", "john.val@example.com", 12345,),
("cedula", 1077876679, "Julian", "Espinoza", "Calle 10# 11-20 Pitalito", "julian.espi@gmail.com", 12346,),
("cedula", 1077876676, "Oscar", "Parra", "Calle 13# 12-30 Neiva", "oscar.pa@gmail.com", 12347,),
("cedula", 1077876675, "Viviana", "Peres", "Calle 14# 13-50 Bogota", "vivi.pe@example.com", 12348,);
    
    /* datos roles*/

INSERT INTO roles (nombre_rol, descripcion) VALUES("Programador", "Ama su trabajo"), ("Diseñadora", "Los mejores diseños");

