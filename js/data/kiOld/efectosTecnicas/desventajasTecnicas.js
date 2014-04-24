addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_ATADURA_ELEMENTAL_1,
    "",
    [elegirAtaduraElemental,1],
    [ KI_TECN_DESV_ATADURA_ELEMENTAL_2],
    -15,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_ATADURA_ELEMENTAL_2,
    "",
    [elegirAtaduraElemental,2],
    [KI_TECN_DESV_ATADURA_ELEMENTAL_1],
    -10,
    1
));

addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_DAÑO_REDUCIDO_MITAD,
    "",
    [],
    [ KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO],
    -10,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_DAÑO_REDUCIDO_NINGUNO,
    "",
    [],
    [KI_TECN_DESV_DAÑO_REDUCIDO_MITAD],
    -20,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_SIMPLE,
    "",
    [],
    [ KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_MAYOR],
    -10,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_MAYOR,
    "",
    [],
    [KI_TECN_DESV_REQUERIMIENTOS_ESPECIALES_SIMPLE],
    -15,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_CONDICION_DETERMINADA,
    "",
    [introducirCosteCMYDescripcion,-25,-5],
    [],
    0,
    1
));
addDesventajaTecnica(new DesventajaTecnica(
    KI_TECN_DESV_PREDETERMINACION,
    "",
    [],
    [],
    -20,
    2
));
