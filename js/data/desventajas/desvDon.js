addDesventaja(new Ventaja(
    "Obligación oral",
    "",
    "El personaje debe de tener la capacidad de hablar para acumular magia y realizar sus conjuros.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Obligación somática",
    "",
    "El personaje debe moverse libremente para acumular magia y realizar sus conjuros.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Extenuación mágica",
    "",
    "El mago perderá un punto de Cansancio al lanzar un conjuro con un potencial superior a 100, dos si es mayor a 300 y tres si lo es de 500.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Lenta recuperación de magia",
    "",
    "La regeneración zeónica del personaje se reduce a la mitad.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [
        new ElementoProhibido(VENTAJA,"Magia estanca")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Magia atada a acción",
    "",
    "Sólo es posible usar magia si se realiza la acción o se cumple la condición determinada por la desventaja. En el caso de que la acción sea una habilidad secundaria, el mago deberá superar un control contra Difícil (DIF) para lanzar sus conjuros.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [LISTA_INTRODUCCION_USUARIO],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Magia estanca",
    "",
    "El personaje carece de regeneración zeónica, por lo que no recuperará naturalmente los puntos de Zeon que consuma. Sólo podrá volver a conseguir magia drenándola de objetos que lo permitan o de seres vivos con el Don. Esta desventaja no puede combinarse a la de lenta recuperación de magia.",
    NO_REPETIBLE,   //getRepetible
    [-2],      //coste
    [
        new ElementoProhibido(VENTAJA,"Lenta recuperación de magia")
    ],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Lazo existencial",
    "",
    "El mago no podrá elegir los conjuros de Libre Acceso de sus vías de magia y será incapaz de acceder a conjuros elegidos libremente.",
    NO_REPETIBLE,   //getRepetible
    [-1],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [lazoExistencial],
    GRUPO_DON,
    []
));
addDesventaja(new Ventaja(
    "Brujería",
    "",
    "El hechicero requiere obligatoriamente emplear componentes materiales para lanzar hechizos. Cada conjuro requerirá un componente distinto determinado por el Director de Juego, según su origen y los conocimientos del brujo.",
    NO_REPETIBLE,   //getRepetible
    [-2],      //coste
    [],    //incompatibles
    true,  //anulable
    [],
    [],
    GRUPO_DON,
    []
));
