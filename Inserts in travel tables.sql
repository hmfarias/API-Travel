-- INSERTS IN PAQUETE TABLE --
INSERT INTO travel.paquete (precio, destino, comidas, alojamiento, duracion, descripcion, pasajeros)
VALUES (197789, "Miami - Florida","Desayuno","Holiday Inn Express & Suites Kendall",7,"Incluye Seguro, El alojamiento ofrece Pscina, WIFI gratis en zonas comunes, estacionamiento Gratis ",1);

INSERT INTO travel.paquete (precio, destino, comidas, alojamiento, duracion, descripcion, pasajeros)
VALUES (156166, "Orlando - Florida","Sin régimen de comidas","Rosen Inn",7,"Incluye Seguro y traslado privado, El alojamiento ofrece Pscina, WIFI gratis en zonas comunes, Servicio a la Habitación",1);

INSERT INTO travel.paquete (precio, destino, comidas, alojamiento, duracion, descripcion, pasajeros)
VALUES (435892, "París","Sin régimen de comidas","Les Jardins du Marais",14,"Incluye Seguro, El alojamiento ofrece gimnasio, WIFI gratis en zonas comunes, Servicio de Spa",1);


-- INSERTS IN FECHA_PAQUETE TABLE --
INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-01", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-05", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-10", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-10", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-15", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-20", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-20", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-25", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-01-30", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-01", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-05", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-10", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-10", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-15", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-20", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-20", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-25", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-02-28", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-01", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-05", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-10", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-10", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-15", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-20", 3);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-20", 1);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-25", 2);

INSERT INTO travel.fecha_paquete (fecha, paquete_id)
VALUES ("2022-03-31", 3);

-- INSERTS IN IMAGEN_PAQUETE TABLE --
INSERT INTO travel.imagen_paquete (url, paquete_id)
VALUES ("https://media.staticontent.com/media/pictures/41aab15e-c80c-43b4-b4e7-198e7d35549d/853x0?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=3", 1);
INSERT INTO travel.imagen_paquete (url, paquete_id)
VALUES ("https://media.staticontent.com/media/pictures/cd684fe7-7ebd-4e91-83b8-49f2ee2a34fd/853x0?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=3", 2);
INSERT INTO travel.imagen_paquete (url, paquete_id)
VALUES ("https://media.staticontent.com/media/pictures/3cc9422b-79a9-40cc-8a3d-2b0d1769ed6b/853x0?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=3", 3);

-- INSERTS IN USUARIO TABLE --
INSERT INTO travel.usuario (password, es_admin, email)
VALUES ("12345", 1, "dany@gmail.com");

INSERT INTO travel.usuario (password, es_admin, email)
VALUES ("12345", 0, "santiago@gmail.com");

INSERT INTO travel.usuario (password, es_admin, email)
VALUES ("12345", 0, "marcelo@gmail.com");

INSERT INTO travel.usuario (password, es_admin, email)
VALUES ("12345", 0, "andre@gmail.com");


-- INSERTS IN COMPRA TABLE -- 
INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (2, "2021-05-01", 2, "2022-01-01");

INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (2, "2021-05-14", 3, "2022-02-10");

INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (1, "2021-04-20", 4, "2022-03-25");

INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (2, "2021-05-07", 4, "2022-01-20");

INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (4, "2021-05-14", 3, "2022-01-01");

INSERT INTO travel.compra (cantidad, fecha, usuario_id, fecha_viaje)
VALUES (1, "2021-03-20", 1, "2022-03-31");

-- INSERTS IN PAQUETE_COMPRA TABLE -- 
INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (1, 1);

INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (2, 3);

INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (3, 2);

INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (4, 1);

INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (5, 2);

INSERT INTO travel.paquete_compra (compra_id, paquete_id)
VALUES (5, 3);



