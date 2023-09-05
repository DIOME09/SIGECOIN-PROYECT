//datos tabla envio

INSERT INTO envio ( empresa ) VALUES ("zapatex"),
INSERT INTO envio ( empresa ) VALUES ("bodegon"),
INSERT INTO envio ( empresa ) VALUES ("calzadiana"),
INSERT INTO envio ( empresa ) VALUES ("zaptejil"),
INSERT INTO envio ( empresa ) VALUES ("adidastex"),
INSERT INTO envio ( empresa ) VALUES ("laquinta"),
INSERT INTO envio ( empresa ) VALUES ("expotex"),
INSERT INTO envio ( empresa ) VALUES ("juansport"),
INSERT INTO envio ( empresa ) VALUES ("danilotex"),
INSERT INTO envio ( empresa ) VALUES ("rematessport");

//datos metododepago

INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("nequi","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("daviplata","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("bancolombia","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("paypal","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("visa","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("pagoefectivo","efectivo")
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("tarjetacredito","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("pagocontraentrega","efectivo-transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("tarjetadebito","transferencia");
INSERT INTO metododepago (metodo_pago,condicion_pago) VALUES ("transferencia","transferencia");

//datos de factura
INSERT INTO factura (id_cliente, id_producto, id_pago, id_envio, cantidad, precioUnitario, precioTotal) VALUES(2, 5, 1, 1, 9, 2000, 18000),
(3, 6, 2, 2, 7, 4000, 28000),(4, 7, 8, 8, 10, 7000, 70000), (5, 3, 4, 4, 5, 3000, 15000), (1, 2, 3, 3, 6, 1000, 6000),
(6, 1, 5, 5, 4, 5000, 20000),(7, 8, 7, 7, 8, 10000, 80000);