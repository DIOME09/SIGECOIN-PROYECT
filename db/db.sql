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
INSERT INTO factura (id_cliente, id_productos, id_pago, id_envio, cantidad, precioUnitario, precioTotal) VALUES(2, 5, 1, 1, 9, 2000, 18000),
(3, 6, 2, 2, 7, 4000, 28000),(4, 7, 8, 8, 10, 7000, 70000), (5, 3, 4, 4, 5, 3000, 15000), (1, 2, 3, 3, 6, 1000, 6000),
(6, 1, 5, 5, 4, 5000, 20000),(7, 8, 7, 7, 8, 10000, 80000);

/*datos prod*/