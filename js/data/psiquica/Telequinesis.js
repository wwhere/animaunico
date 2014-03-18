var discTelequinesis = new DisciplinaPsiquica(
    DISCIPLINA_TELEQUINESIS,
    DISCIPLINA_DESCRIPCION_TELEQUINESIS
);


discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_TELEQUINESIS_MENOR,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_1,"1 Kg. / Tipo de vuelo 4","2 Kg / Tipo de vuelo 6","5 Kg / Tipo de vuelo 8","10 Kg / Tipo de vuelo 10","20 Kg / Tipo de vuelo 12","40 Kg / Tipo de vuelo 14","100 Kg / Tipo de vuelo 16","200 Kg / Tipo de vuelo 18","500 Kg / Tipo de vuelo 20"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_IMPACTO_TELEQUINETICO,
    1,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_2,FATIGA_1,"Fuerza 8","Fuerza 10","Fuerza 12","Fuerza 14","Fuerza 15","Fuerza 16","Fuerza 18","Fuerza 20"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_ESCUDO_TELEQUINETICO,
    1,
    ACCION_PASIVA,
    false,
    "",
    [FATIGA_2,FATIGA_1,PV_300,PV_500,"700 PV",PV_1000,"1.500 PV / Barrera de daño 60","2.000 PV / Barrera de daño 80 Detiene energía","3.000 PV / Barrera de daño 120 Detiene energía","5.000 PV / Barrera de daño 160 Detiene energía"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_ARMADURA_TELEQUINETICA,
    1,
    ACCION_PASIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"TA 1","TA 2","TA 4","TA 6","TA 8","TA 10","TA 12","TA 14"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_PRESA_TELEQUINETICA,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,"Fuerza 6","Fuerza 8","Fuerza 10","Fuerza 12 / Radio de 5 metros","Fuerza 14 / Radio de 10 metros","Fuerza 15 /Rradio de 50 metros","Fuerza 16 / Radio de 100 metros","Fuerza 18 / Radio de 500 metros"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_BALISTICA,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1,"+0 Proyección / 5 metros","+10 Proyección / 10 metros","+20 Proyección / 15 metros","+30 Proyección / 25 metros","+40 Proyección / 40 metros","+50 Proyección / 80 metros","+60 Proyección / 150 metros"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_REPULSION,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"Fuerza 6 / Línea de 2 metros","Fuerza 8 / Línea de 5 metros","Fuerza 10 / Línea de 10 metros","Fuerza 12 / Línea de 20 metros","Fuerza 14 / Línea de 50 metros","Fuerza 18 / Línea de 100 metros"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_DESTROZAR,
    2,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_8,FATIGA_6,FATIGA_4,FATIGA_2,"100 RF","120 RF","140 RF","160 RF","180 RF","220 RF"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_DETECCION_MOVIMIENTO,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1,"120 RF / 10 metros de radio","160 RF / 50 metros de radio","200 RF / 100 metros de radio","240 RF / 500 metros de radio","280 RF / 1 kilómetro de radio","320 RF / 10 kilómetros de radio","400 RF / 100 kilómetros de radio"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_VUELO_TELEQUINETICO,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1,"Tipo de vuelo 6","Tipo de vuelo 8","Tipo de vuelo 10","Tipo de vuelo 12","Tipo de vuelo 14","Tipo de vuelo 16","Tipo de vuelo 18"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_TELEQUINESIS_ORGANICA,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,"100 Kg. / Tipo de vuelo 4 / 100 RF","250 Kg. / Tipo de vuelo 6 / 120 RF","500 Kg. / Tipo de vuelo 8 / 140 RF","1.000 Kg. / Tipo de vuelo 10 / 160 RF","2.500 Kg. / Tipo de vuelo 12 / 180 RF","5.000 Kg. / Tipo de vuelo 14 / 200 RF","10.000 Kg. / Tipo de vuelo 16 / 220 RF"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_TELEQUINESIS_MAYOR,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_24,FATIGA_20,FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_4,"500 toneladas / Tipo de vuelo 4","10.000 toneladas / Tipo de vuelo 6","100.00 toneladas / Tipo de vuelo 8","1.000.000 toneladas / Tipo de vuelo 10"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_CONTROL_TERRENO,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"10 metros de radio / Barrera de daño 40","100 metros de radio / Barrera de daño 60","250 metros de radio / Barrera de daño 80","500 metros de radio / Barrera de daño 100","1 kilómetro de radio / Barrera de daño 140"]
));
discTelequinesis.addPoder(new PoderPsiquico(
    PSI_PODER_RESTRUCTURACION_ATOMICA,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_24,FATIGA_20,FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"140 RF / 100 Kg.","160 RF / 10 toneladas","200 RF / 100 toneladas"]
));

disciplinasPsiquicas_set.push(discTelequinesis);